import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-server";
import { site } from "@/lib/site";

/** 문자열 필드 정리: 문자열이 아니면 "", 앞뒤 공백 제거, 최대 길이 제한 */
function clean(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "잘못된 요청입니다." },
      { status: 400 }
    );
  }

  // 허니팟: 사람 눈에 안 보이는 필드가 채워져 있으면 스팸봇 → 성공한 척 무시
  if (clean(body.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const inquiry = {
    name: clean(body.name, 50),
    phone: clean(body.phone, 30),
    email: clean(body.email, 100),
    company: clean(body.company, 100),
    category: clean(body.category, 50),
    quantity: clean(body.quantity, 50),
    message: clean(body.message, 2000),
  };

  if (!inquiry.name || !inquiry.phone || !inquiry.message) {
    return NextResponse.json(
      { ok: false, error: "성함 · 연락처 · 문의 내용은 필수입니다." },
      { status: 400 }
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("[inquiry] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 미설정");
    return NextResponse.json(
      {
        ok: false,
        error: `일시적인 오류가 발생했습니다. 전화(${site.phone}) 또는 카카오톡으로 문의해 주세요.`,
      },
      { status: 500 }
    );
  }

  // 다른 사이트와 Supabase 프로젝트를 공유하므로 테이블 이름에 shop_ 접두사 사용
  const { error } = await supabase.from("shop_inquiries").insert(inquiry);
  if (error) {
    console.error("[inquiry] DB 저장 실패:", error.message);
    return NextResponse.json(
      {
        ok: false,
        error: `접수 중 오류가 발생했습니다. 전화(${site.phone}) 또는 카카오톡으로 문의해 주세요.`,
      },
      { status: 500 }
    );
  }

  // 이메일 알림 (Resend) — 실패해도 접수 자체는 성공 처리
  try {
    await sendNotifyEmail(inquiry);
  } catch (e) {
    console.error("[inquiry] 알림 메일 발송 실패:", e);
  }

  return NextResponse.json({ ok: true });
}

/** 접수 알림 메일. RESEND_API_KEY 가 없으면 조용히 건너뛴다. */
async function sendNotifyEmail(inq: {
  name: string;
  phone: string;
  email: string;
  company: string;
  category: string;
  quantity: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_NOTIFY_EMAIL;
  if (!apiKey || !to) return;

  const rows = [
    ["성함", inq.name],
    ["연락처", inq.phone],
    ["이메일", inq.email || "-"],
    ["회사/단체명", inq.company || "-"],
    ["품목", inq.category || "-"],
    ["수량", inq.quantity || "-"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#767676;white-space:nowrap">${k}</td><td style="padding:6px 12px;font-weight:600">${v}</td></tr>`
    )
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // danbinuri.kr 도메인을 Resend 에서 인증하면 INQUIRY_FROM_EMAIL 로 교체.
      // 미인증 상태에서는 onboarding@resend.dev 로만 발송 가능(본인 메일로만 수신).
      from:
        process.env.INQUIRY_FROM_EMAIL ||
        "단비누리 견적문의 <onboarding@resend.dev>",
      to: [to],
      subject: `[견적문의] ${inq.name} — ${inq.category || "품목 미지정"}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px">
          <h2 style="color:#13294b">새 견적문의가 접수되었습니다</h2>
          <table style="border-collapse:collapse;font-size:14px">${rows}</table>
          <div style="margin-top:16px;padding:12px 16px;background:#f5f5f5;border-radius:8px;font-size:14px;white-space:pre-wrap">${inq.message}</div>
          <p style="margin-top:16px;font-size:12px;color:#767676">Supabase 대시보드의 shop_inquiries 테이블에서 전체 내역을 확인할 수 있습니다.</p>
        </div>`,
    }),
  });
  if (!res.ok) {
    throw new Error(`Resend ${res.status}: ${await res.text()}`);
  }
}

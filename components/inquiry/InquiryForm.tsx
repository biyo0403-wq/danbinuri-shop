"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const CATEGORY_OPTIONS = [
  "근무복/작업복",
  "단체조끼",
  "점퍼(바람막이/후리스/패딩)",
  "단체티셔츠",
  "후드/맨투맨",
  "안전화/모자",
  "브랜드 구매대행",
  "기타",
];

type Props = {
  /** 제품 상세에서 넘어온 경우 미리 채울 값 */
  initialCategory?: string;
  initialMessage?: string;
};

const inputCls =
  "w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-point focus:ring-2 focus:ring-point/20";

export default function InquiryForm({
  initialCategory = "",
  initialMessage = "",
}: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    category: CATEGORY_OPTIONS.includes(initialCategory)
      ? initialCategory
      : "",
    quantity: "",
    message: initialMessage,
    website: "", // 허니팟 (사람에겐 안 보임)
  });
  const [agree, setAgree] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("성함 · 연락처 · 문의 내용을 입력해 주세요.");
      return;
    }
    if (!agree) {
      setError("개인정보 수집 · 이용에 동의해 주세요.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setError(data.error ?? "접수 중 오류가 발생했습니다.");
        return;
      }
      setDone(true);
    } catch {
      setError(
        `네트워크 오류가 발생했습니다. 전화(${site.phone})로 문의해 주세요.`
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-line bg-neutral-50 px-6 py-16 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-point" />
        <p className="mt-4 text-xl font-extrabold">
          견적문의가 접수되었습니다
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          영업일 기준 1일 이내에 남겨주신 연락처로 견적을 안내해 드립니다.
          <br />
          급하신 경우 전화 · 카카오톡으로 문의해 주세요.
        </p>
        <div className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center justify-center gap-2 rounded-lg border border-line bg-white px-5 py-3 text-sm font-bold text-ink hover:bg-neutral-50"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <a
            href={site.kakaoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-[#FEE500] px-5 py-3 text-sm font-bold text-[#3A1D1D] hover:brightness-95"
          >
            <MessageCircle className="h-4 w-4" />
            카카오톡 상담
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-bold">
            성함 / 담당자명 <span className="text-sale">*</span>
          </label>
          <input
            className={inputCls}
            value={form.name}
            onChange={set("name")}
            placeholder="홍길동"
            maxLength={50}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold">
            연락처 <span className="text-sale">*</span>
          </label>
          <input
            className={inputCls}
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="010-0000-0000"
            maxLength={30}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold">이메일</label>
          <input
            className={inputCls}
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="example@email.com"
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold">
            회사 / 단체명
          </label>
          <input
            className={inputCls}
            value={form.company}
            onChange={set("company")}
            placeholder="(주)단비누리"
            maxLength={100}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold">품목</label>
          <select
            className={inputCls}
            value={form.category}
            onChange={set("category")}
          >
            <option value="">선택해 주세요</option>
            {CATEGORY_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-bold">수량</label>
          <input
            className={inputCls}
            value={form.quantity}
            onChange={set("quantity")}
            placeholder="예: 30벌"
            maxLength={50}
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-bold">
          문의 내용 <span className="text-sale">*</span>
        </label>
        <textarea
          className={inputCls + " min-h-[140px] resize-y"}
          value={form.message}
          onChange={set("message")}
          placeholder="원하시는 제품 · 로고 인쇄/자수 여부 · 납기 일정 등을 자유롭게 적어주세요."
          maxLength={2000}
        />
      </div>

      {/* 허니팟: 봇 차단용. 사람에게는 보이지 않음 */}
      <input
        type="text"
        value={form.website}
        onChange={set("website")}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
        name="website"
      />

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-point"
        />
        <span>
          견적 상담을 위한 개인정보 수집 · 이용에 동의합니다.{" "}
          <Link
            href="/privacy"
            target="_blank"
            className="underline hover:text-ink"
          >
            개인정보처리방침 보기
          </Link>
        </span>
      </label>

      {error && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-sale">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-point px-5 py-4 text-base font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-60"
      >
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            접수 중...
          </>
        ) : (
          "견적문의 보내기"
        )}
      </button>
    </form>
  );
}

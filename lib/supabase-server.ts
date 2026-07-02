import { createClient } from "@supabase/supabase-js";

/**
 * 서버 전용 Supabase 클라이언트.
 * service_role 키를 사용하므로 절대 클라이언트 컴포넌트에서 import 하지 말 것.
 * 환경변수가 아직 설정되지 않았으면 null 을 반환한다.
 */
export function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  // 자리표시자 등 잘못된 값이 들어있어도 서버가 죽지 않도록 방어
  if (!url || !key || !url.startsWith("https://")) return null;
  try {
    return createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
  } catch {
    return null;
  }
}

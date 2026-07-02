-- 견적문의 테이블 (Supabase SQL Editor 에 붙여넣고 Run)
-- 다른 사이트와 프로젝트를 공유하므로 shop_ 접두사로 구분한다.
create table if not exists public.shop_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,          -- 성함/담당자명
  phone text not null,         -- 연락처
  email text,                  -- 이메일 (선택)
  company text,                -- 회사/단체명 (선택)
  category text,               -- 품목
  quantity text,               -- 수량
  message text not null,       -- 문의 내용
  status text not null default 'new'  -- new / in_progress / done
);

-- RLS 켜기: 정책을 만들지 않으므로 브라우저(anon) 접근은 전부 차단되고,
-- 서버의 service_role 키로만 읽기/쓰기가 가능하다.
alter table public.shop_inquiries enable row level security;

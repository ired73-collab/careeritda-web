import Link from "next/link";
import { supabase } from "../../../lib/supabase";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function NoticeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: notice, error } = await supabase
    .from("notices")
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !notice) {
    return (
      <main className="min-h-screen bg-[#F4F4F5] px-4 py-20">
        <div className="mx-auto max-w-[900px] rounded-2xl bg-white p-10 shadow-sm">
          <h1 className="text-2xl font-black text-[#0B1F44]">
            공고를 찾을 수 없습니다.
          </h1>
          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-[#0759C8] px-5 py-3 font-bold text-white"
          >
            메인으로 돌아가기
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F4F4F5] px-4 py-12 font-['Pretendard',sans-serif] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[980px]">
        <Link href="/" className="mb-6 inline-block text-sm font-bold text-[#0759C8]">
          ← 목록으로 돌아가기
        </Link>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#0759C8] px-3 py-1 text-xs font-black text-white">
              {notice.type}
            </span>
            <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold text-[#0759C8]">
              {notice.field}
            </span>
            <span className="rounded-full bg-[#FFF1E8] px-3 py-1 text-xs font-black text-[#FF7A00]">
              {notice.deadline}
            </span>
          </div>

          <h1 className="mb-8 text-3xl font-black leading-tight tracking-tight text-[#0B1F44] lg:text-5xl">
            {notice.title}
          </h1>

          <div className="grid gap-4 border-y border-slate-100 py-6 text-sm font-bold text-slate-700 sm:grid-cols-2">
            <Info label="기관명" value={notice.org} />
            <Info label="지역" value={notice.area} />
            <Info label="분야" value={notice.field} />
            <Info label="구분" value={notice.type} />
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <h2 className="mb-4 text-xl font-black text-[#0B1F44]">
              공고 안내
            </h2>
            <p className="leading-relaxed text-slate-700">
              해당 공고는 {notice.org}에서 모집 중인 {notice.type} 관련 공고입니다.
              상세 모집 요강, 제출 서류, 접수 방법은 추후 관리자 입력 항목을 확장하여 표시할 수 있습니다.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#0759C8] px-6 py-3 font-black text-white hover:bg-[#064AA5]">
              지원하기
            </button>
            <Link
              href="/"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-black text-slate-700 hover:border-[#0759C8] hover:text-[#0759C8]"
            >
              목록 보기
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 text-xs font-black text-slate-400">{label}</div>
      <div className="text-base font-black text-[#111827]">{value}</div>
    </div>
  );
}
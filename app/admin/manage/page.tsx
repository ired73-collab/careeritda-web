"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../../../lib/supabase";

type Notice = {
  id: number;
  type: string;
  title: string;
  org: string;
  area: string;
  field: string;
  deadline: string;
  content?: string;
  created_at?: string;
};

export default function AdminManagePage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [message, setMessage] = useState("");

  const loadNotices = async () => {
    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("불러오기 실패: " + error.message);
      return;
    }

    setNotices(data ?? []);
  };

  const handleDelete = async (id: number) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (!ok) return;

    const { error } = await supabase.from("notices").delete().eq("id", id);

    if (error) {
      setMessage("삭제 실패: " + error.message);
      return;
    }

    setMessage("삭제되었습니다.");
    loadNotices();
  };

  useEffect(() => {
    loadNotices();
  }, []);

  return (
    <main className="min-h-screen bg-[#F4F4F5] px-4 py-12 font-['Pretendard',sans-serif]">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-sm font-black text-[#0759C8]">Admin</p>
            <h1 className="text-3xl font-black text-[#0B1F44]">
              모집공고 관리
            </h1>
          </div>

          <Link
            href="/admin/notices"
            className="rounded-xl bg-[#0759C8] px-5 py-3 text-sm font-black text-white hover:bg-[#064AA5]"
          >
            새 공고 등록
          </Link>
        </div>

        {message && (
          <div className="mb-5 rounded-xl bg-[#EFF6FF] px-5 py-4 text-sm font-bold text-[#0759C8]">
            {message}
          </div>
        )}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-[80px_1fr_140px_120px_150px] border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-black text-slate-600">
            <div>ID</div>
            <div>공고 제목</div>
            <div>기관</div>
            <div>마감</div>
            <div className="text-right">관리</div>
          </div>

          {notices.length === 0 ? (
            <div className="px-5 py-12 text-center font-bold text-slate-500">
              등록된 공고가 없습니다.
            </div>
          ) : (
            notices.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[80px_1fr_140px_120px_150px] items-center border-b border-slate-100 px-5 py-5 text-sm last:border-b-0"
              >
                <div className="font-black text-[#0759C8]">{item.id}</div>

                <div>
                  <Link
                    href={`/notices/${item.id}`}
                    className="block text-base font-black text-[#0B1F44] hover:text-[#0759C8]"
                  >
                    {item.title}
                  </Link>
                  <div className="mt-1 text-xs font-bold text-slate-500">
                    {item.type} · {item.area} · {item.field}
                  </div>
                </div>

                <div className="font-bold text-slate-700">{item.org}</div>

                <div>
                  <span className="rounded-lg bg-[#EEF4FF] px-3 py-2 text-xs font-black text-[#0759C8]">
                    {item.deadline}
                  </span>
                </div>

                <div className="flex justify-end gap-2">
                  <Link
                    href={`/admin/edit/${item.id}`}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-black text-slate-700 hover:border-[#0759C8] hover:text-[#0759C8]"
                  >
                    수정
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-red-50 px-3 py-2 text-xs font-black text-red-600 hover:bg-red-100"
                  >
                    삭제
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
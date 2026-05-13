"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabase";

export default function AdminEditNoticePage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [form, setForm] = useState({
    type: "",
    title: "",
    org: "",
    area: "",
    field: "",
    deadline: "",
    content: "",
  });

  const [message, setMessage] = useState("");

  const loadNotice = async () => {
    setMessage("불러오는 중...");

    const { data, error } = await supabase
      .from("notices")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      setMessage("공고를 불러오지 못했습니다.");
      return;
    }

    setForm({
      type: data.type ?? "",
      title: data.title ?? "",
      org: data.org ?? "",
      area: data.area ?? "",
      field: data.field ?? "",
      deadline: data.deadline ?? "",
      content: data.content ?? "",
    });

    setMessage("");
  };

  useEffect(() => {
    loadNotice();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("수정 중...");

    const { error } = await supabase
      .from("notices")
      .update(form)
      .eq("id", id);

    if (error) {
      setMessage("수정 실패: " + error.message);
      return;
    }

    setMessage("수정되었습니다.");

    setTimeout(() => {
      router.push("/admin/manage");
    }, 700);
  };

  return (
    <main className="min-h-screen bg-[#F4F4F5] px-4 py-12 font-['Pretendard',sans-serif]">
      <div className="mx-auto max-w-[720px] rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <Link
          href="/admin/manage"
          className="mb-6 inline-block text-sm font-bold text-[#0759C8]"
        >
          ← 관리 목록으로 돌아가기
        </Link>

        <p className="mb-2 text-sm font-black text-[#0759C8]">Admin</p>
        <h1 className="mb-8 text-3xl font-black text-[#0B1F44]">
          모집공고 수정
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input name="type" label="구분" value={form.type} onChange={handleChange} />
          <TextArea name="title" label="공고 제목" value={form.title} onChange={handleChange} rows={3} />
          <Input name="org" label="기관명" value={form.org} onChange={handleChange} />
          <Input name="area" label="지역" value={form.area} onChange={handleChange} />
          <Input name="field" label="분야" value={form.field} onChange={handleChange} />
          <Input name="deadline" label="마감 표시" value={form.deadline} onChange={handleChange} />
          <TextArea name="content" label="상세 내용" value={form.content} onChange={handleChange} rows={10} />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#0759C8] px-6 py-4 text-base font-black text-white hover:bg-[#064AA5]"
          >
            수정 저장하기
          </button>
        </form>

        {message && (
          <div className="mt-6 rounded-xl bg-[#EFF6FF] px-5 py-4 text-sm font-bold text-[#0759C8]">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}

function Input({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0759C8] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}

function TextArea({
  name,
  label,
  value,
  onChange,
  rows = 3,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-700">
        {label}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0759C8] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}
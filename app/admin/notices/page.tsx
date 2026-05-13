"use client";

import { useState } from "react";
import { supabase } from "../../../lib/supabase";

export default function AdminNoticePage() {
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
    setMessage("저장 중...");

    const { error } = await supabase.from("notices").insert([form]);

    if (error) {
      setMessage("저장 실패: " + error.message);
      return;
    }

    setMessage("공고가 저장되었습니다.");

    setForm({
      type: "",
      title: "",
      org: "",
      area: "",
      field: "",
      deadline: "",
      content: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#F4F4F5] px-4 py-12 font-['Pretendard',sans-serif]">
      <div className="mx-auto max-w-[720px] rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <p className="mb-2 text-sm font-black text-[#0759C8]">Admin</p>
        <h1 className="mb-8 text-3xl font-black text-[#0B1F44]">
          모집공고 등록
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input name="type" label="구분" value={form.type} onChange={handleChange} placeholder="평가위원" />
          <TextArea name="title" label="공고 제목" value={form.title} onChange={handleChange} placeholder="스마트도시 데이터 플랫폼 운영 민간위탁 적격자심의위원 모집" />
          <Input name="org" label="기관명" value={form.org} onChange={handleChange} placeholder="대구광역시" />
          <Input name="area" label="지역" value={form.area} onChange={handleChange} placeholder="대구" />
          <Input name="field" label="분야" value={form.field} onChange={handleChange} placeholder="ICT · 빅데이터" />
          <Input name="deadline" label="마감 표시" value={form.deadline} onChange={handleChange} placeholder="D-2" />

          <TextArea
            name="content"
            label="상세 내용"
            value={form.content}
            onChange={handleChange}
            placeholder="공고 상세 설명을 입력하세요"
            rows={8}
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-[#0759C8] px-6 py-4 text-base font-black text-white hover:bg-[#064AA5]"
          >
            공고 저장하기
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
  placeholder,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
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
        placeholder={placeholder}
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
  placeholder,
  rows = 3,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
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
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-[#0759C8] focus:ring-4 focus:ring-blue-100"
      />
    </label>
  );
}
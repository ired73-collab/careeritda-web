export default function SearchBox() {
  return (
    <section className="relative z-10 mt-8 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px] rounded-2xl border border-slate-200 bg-white p-4 shadow-md sm:p-5">
        <div className="grid gap-3 lg:grid-cols-[1fr_160px_160px_140px]">
          <input
            className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none focus:ring-4 focus:ring-blue-100"
            placeholder="찾고 싶은 공고, 기관명, 분야를 입력하세요"
          />

          <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-600">
            <option>전체 지역</option>
            <option>서울</option>
            <option>대구</option>
            <option>부산</option>
          </select>

          <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 font-semibold text-slate-600">
            <option>전체 분야</option>
            <option>ICT</option>
            <option>교육</option>
            <option>도시재생</option>
          </select>

          <button className="rounded-xl bg-[#0759C8] px-6 py-4 font-black text-white hover:bg-[#064AA5]">
            검색
          </button>
        </div>
      </div>
    </section>
  );
}
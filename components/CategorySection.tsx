export default function CategorySection() {
  const categories = [
    '평가위원',
    '자문위원',
    '심의위원',
    '전문강사',
    '멘토링',
    '기술닥터',
    '도시재생',
    'ICT/정보화',
    '교육/복지',
    '창업/경영',
  ];

  return (
    <section id="category" className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-black text-[#0759C8]">
              Activity Category
            </p>
            <h3 className="text-3xl font-black tracking-tight text-[#0B1F44]">
              분야별 전문가 활동 찾기
            </h3>
          </div>

          <button className="w-fit rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-600 hover:border-[#0759C8] hover:text-[#0759C8]">
            전체 분야 보기
          </button>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, idx) => (
              <button
                key={category}
                className={`rounded-xl border px-5 py-3 text-sm font-bold transition-all ${
                  idx === 0
                    ? 'border-[#0759C8] bg-[#0759C8] text-white'
                    : 'border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-[#0759C8] hover:bg-[#F5FAFF] hover:text-[#0759C8]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-5 border-t border-slate-100 pt-5">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-black text-[#0B1F44]">추천 분야</span>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 font-bold text-[#0759C8]">
                ICT/정보화
              </span>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 font-bold text-[#0759C8]">
                도시재생
              </span>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 font-bold text-[#0759C8]">
                교육/복지
              </span>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 font-bold text-[#0759C8]">
                창업/경영
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
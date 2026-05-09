export default function FilterSection() {
  const regions = [
    '전체',
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
  ];

  return (
    <section id="region" className="px-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="text-xl text-[#0759C8]">⌘</span>

              <h3 className="text-xl font-black text-[#0B1F44]">
                상세 필터
              </h3>
            </div>

            <div className="flex items-center gap-5 text-sm font-bold text-slate-600">
              <button className="hover:text-[#0759C8]">
                초기화
              </button>

              <button className="text-lg text-slate-500 hover:text-[#0759C8]">
                ^
              </button>
            </div>
          </div>

          <div className="px-6 py-7">
            <div className="mb-4 text-sm font-black text-[#0B1F44]">
              지역
              <span className="ml-2 font-bold text-slate-500">
                (복수 선택 가능)
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {regions.map((region, idx) => (
                <button
                  key={region}
                  className={`rounded-xl border px-4 py-4 text-left text-sm font-bold transition-all ${
                    idx === 0
                      ? 'border-[#0759C8] bg-blue-50 text-[#0759C8]'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-[#0759C8] hover:text-[#0759C8]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
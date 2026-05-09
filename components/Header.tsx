export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[68px]">
          <div className="flex shrink-0 items-center gap-4">
            <button className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-xl font-bold text-slate-600 shadow-sm hover:bg-slate-50">
              ≡
            </button>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0759C8] text-lg font-black text-white shadow-sm lg:h-11 lg:w-11 lg:text-xl">
                잇
              </div>

              <div className="leading-tight">
                <h1 className="text-xl font-black tracking-tight text-[#0B1F44] lg:text-2xl">
                  경력잇다
                </h1>
                <p className="hidden text-xs font-medium text-slate-500 sm:block">
                  경력을 잇고, 가치를 다시 일로
                </p>
              </div>
            </div>
          </div>

          <nav className="hidden flex-1 items-center justify-start gap-7 text-[15px] font-bold text-slate-700 lg:flex xl:gap-9">
            <a href="#" className="hover:text-[#0759C8]">홈</a>
            <a href="#notice" className="hover:text-[#0759C8]">모집공고</a>
            <a href="#category" className="hover:text-[#0759C8]">분야별 찾기</a>
            <a href="#expert" className="hover:text-[#0759C8]">전문가 등록</a>
            <a href="#request" className="hover:text-[#0759C8]">기관 의뢰</a>
            <a href="#" className="hover:text-[#0759C8]">커뮤니티</a>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            <button className="hidden rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 sm:block">
              로그인
            </button>
            <button className="rounded-lg bg-[#0759C8] px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-[#064AA5] sm:px-5 sm:py-2.5">
              전문가 등록
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="mt-10 bg-[#111214] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[260px_1fr_auto]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl font-black text-[#111214]">
              잇
            </div>

            <div>
              <div className="text-2xl font-black tracking-tight text-white">
                경력잇다
              </div>
              <div className="text-sm font-medium text-slate-400">
                경력을 잇고, 가치를 다시 일로
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex flex-wrap gap-6 text-sm font-bold text-white">
            <a href="#" className="hover:text-[#4EA1FF]">회사소개</a>
            <a href="#" className="hover:text-[#4EA1FF]">문의</a>
            <a href="#" className="hover:text-[#4EA1FF]">이용약관</a>
            <a href="#" className="hover:text-[#4EA1FF]">개인정보처리방침</a>
          </div>

          <div className="space-y-2 text-[15px] leading-relaxed text-slate-400">
            <p>이메일 : contact@careeritda.com</p>
            <p>주소 : 서울특별시 강남구 테헤란로 000</p>
            <p>사업자등록번호 : 000-00-00000</p>
            <p>직업정보제공사업신고번호 : J0000000000000</p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-slate-500">
            <p className="font-semibold text-slate-300">
              COPYRIGHT 2026 경력잇다. All Rights Reserved.
            </p>
            <p className="mt-2">
              본 사이트에 게시된 모집공고 및 프로그램 정보의 무단 수집을 거부합니다.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 lg:justify-end">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black text-[#111214] transition-all hover:scale-105 hover:bg-[#4EA1FF] hover:text-white">
            ◐
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-black text-[#111214] transition-all hover:scale-105 hover:bg-[#4EA1FF] hover:text-white">
            f
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg font-black text-[#111214] transition-all hover:scale-105 hover:bg-[#4EA1FF] hover:text-white">
            ◎
          </button>
        </div>
      </div>
    </footer>
  );
}
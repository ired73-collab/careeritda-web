export default function HeroBanner() {
  return (
    <section className="bg-[#F4F4F5] pt-8">
      <div className="mx-auto max-w-[1280px] px-0 pb-5">
        <div className="relative min-h-[320px] overflow-hidden rounded-[26px] bg-white shadow-sm ring-1 ring-slate-200 lg:min-h-[360px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1600&auto=format&fit=crop"
              alt="Business professional"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061E46]/70 via-[#061E46]/35 to-transparent" />
          </div>

          <div className="relative z-10 flex min-h-[320px] items-center px-7 py-8 sm:px-10 lg:min-h-[360px] lg:px-16">
            <div className="max-w-3xl text-white">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur-md">
                  경력잇다
                </div>
                <div className="text-sm font-bold text-white/80">
                  AI 기반 전문가 플랫폼
                </div>
              </div>

              <h2 className="mb-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                경력을 잇고,
                <br />
                가치를 다시 일로
              </h2>

              <p className="mb-7 max-w-2xl text-base leading-relaxed text-white/90 lg:text-lg">
                평가위원 · 자문위원 · 멘토 · 강사 활동까지.
                공공기관과 기업이 신뢰할 수 있는 대한민국 전문가 네트워크를 연결합니다.
              </p>

              <button className="rounded-lg bg-[#1194F6] px-8 py-3 text-base font-black text-white shadow-xl transition-all hover:bg-[#0A7FE0] hover:scale-[1.02]">
                모집공고 보러가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
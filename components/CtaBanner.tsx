export default function CtaBanner() {
  return (
    <section id="request" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[32px]">
          {/* IMAGE */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
              alt="Business professionals"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 px-8 py-14 text-white sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black backdrop-blur-md">
                AI Expert Matching Platform
              </div>

              <h3 className="text-4xl font-black leading-tight tracking-tight lg:text-6xl">
                기관과 전문가를
                <br />
                가장 빠르게 연결합니다
              </h3>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 lg:text-lg">
                공공기관 · 기업 · 단체를 위한 전문가 매칭 플랫폼.
                AI 기반 추천 시스템으로 더욱 정확한 연결 경험을 제공합니다.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-[#0759C8] px-7 py-4 text-base font-black text-white transition-all hover:bg-[#064AA5]">
                  전문가 찾기
                </button>

                <button className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 text-base font-black text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  기관 의뢰하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
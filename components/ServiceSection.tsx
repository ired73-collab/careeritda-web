export default function ServiceSection() {
  const serviceCards = [
    {
      icon: <NoticeIcon />,
      accent: "blue",
      title: "전문가 공고",
      desc: "평가위원·자문위원·강사 모집 정보를 한곳에서 빠르게 확인합니다.",
    },
    {
      icon: <AiIcon />,
      accent: "orange",
      title: "AI 맞춤추천",
      desc: "경력·지역·활동 데이터를 기반으로 적합 공고를 추천합니다.",
    },
    {
      icon: <ExpertIcon />,
      accent: "blue",
      title: "전문가 등록",
      desc: "전문분야와 활동 이력을 등록하고 새로운 기회를 연결합니다.",
    },
    {
      icon: <RequestIcon />,
      accent: "orange",
      title: "기관 전문가 의뢰",
      desc: "공공기관·기업이 필요한 분야의 검증된 전문가를 찾을 수 있습니다.",
    },
  ];

  return (
    <section id="expert" className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-black text-[#0759C8]">Service</p>
          <h3 className="text-3xl font-black tracking-tight text-[#0B1F44]">
            경력잇다의 핵심 서비스
          </h3>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((item, idx) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-[#9CC5FF] hover:shadow-md"
            >
              <div className="mb-6 flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    item.accent === "orange"
                      ? "bg-[#FFF4EC] text-[#FF7A00]"
                      : "bg-[#EFF6FF] text-[#0759C8]"
                  }`}
                >
                  {item.icon}
                </div>

                <div
                  className={`text-sm font-black transition-all ${
                    item.accent === "orange"
                      ? "text-[#FFD8BF] group-hover:text-[#FF7A00]"
                      : "text-slate-300 group-hover:text-[#0759C8]"
                  }`}
                >
                  0{idx + 1}
                </div>
              </div>

              <h4 className="mb-3 text-2xl font-black tracking-tight text-[#0B1F44]">
                {item.title}
              </h4>

              <p className="leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
    </svg>
  );
}

function AiIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <path d="M12 3v18M3 12h18" strokeLinecap="round" />
    </svg>
  );
}

function ExpertIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c1.5-3 4-5 7-5s5.5 2 7 5" strokeLinecap="round" />
    </svg>
  );
}

function RequestIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-7 w-7"
    >
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path d="M9 10h6M9 14h3" strokeLinecap="round" />
    </svg>
  );
}
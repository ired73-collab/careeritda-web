import Link from "next/link";

type Notice = {
  id: number;
  type: string;
  title: string;
  org: string;
  area: string;
  field: string;
  deadline: string;
};

type NoticeListProps = {
  notices: Notice[];
};

export default function NoticeList({ notices }: NoticeListProps) {
  return (
    <section id="notice" className="bg-[#F4F4F5] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-black text-[#0759C8]">Latest Notice</p>
            <h3 className="text-3xl font-black text-[#0B1F44]">최신 모집공고</h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-2 text-sm font-bold">
              <button className="rounded-full bg-[#0759C8] px-4 py-2 text-white">전체</button>
              <button className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">마감임박</button>
              <button className="rounded-full bg-slate-100 px-4 py-2 text-slate-600">지역별</button>
            </div>

            <select className="rounded-xl border-2 border-[#1194F6] bg-white px-4 py-2 font-bold text-slate-700 outline-none">
              <option>등록일 순</option>
              <option>마감 임박순</option>
              <option>조회순</option>
            </select>
          </div>
        </div>

        <div className="space-y-5">
          {notices.map((item, idx) => {
            const deadlineStyle =
              item.deadline === "D-1" || item.deadline === "D-2"
                ? "bg-[#FFF1E8] text-[#FF7A00]"
                : "bg-[#EEF4FF] text-[#0759C8]";

            const deadlineText = item.deadline === "D-7" ? "마감여유" : item.deadline;

            return (
              <Link
                key={idx}
                href={`/notices/${item.id}`}
                className="block rounded-2xl border border-slate-200 bg-white px-7 py-6 shadow-sm transition-all hover:border-[#8BBEFF] hover:shadow-md"
            >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#0759C8] px-3 py-1 text-xs font-black text-white">
                        {item.type}
                      </span>
                      <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold text-[#0759C8]">
                        {item.field}
                      </span>
                    </div>

                    <h4 className="mb-4 text-2xl font-black leading-snug tracking-tight text-[#111827]">
                      {item.title}
                    </h4>

                    <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-700">
                      <LocationIcon />
                      <span>{item.area}</span>
                      <span className="text-slate-300">·</span>
                      <span>{item.org}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end lg:self-center">
                    <span className={`rounded-xl px-4 py-3 text-base font-black ${deadlineStyle}`}>
                      {deadlineText}
                    </span>

                    <button className="text-3xl text-slate-400 transition-all hover:text-[#0759C8]">
                      ♡
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LocationIcon() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center text-[#0759C8]">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4"
      >
        <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11z" />
        <circle cx="12" cy="10" r="2.2" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}
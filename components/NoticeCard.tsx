type NoticeItem = {
  type: string;
  title: string;
  org: string;
  area: string;
  field: string;
  deadline: string;
};

interface Props {
  item: NoticeItem;
}

export default function NoticeCard({ item }: Props) {
  const isUrgent =
    item.deadline === "D-1" || item.deadline === "D-2";

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#8DBDFF] hover:shadow-xl">
      <div className="mb-5 flex items-start justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#0759C8] px-3 py-1 text-xs font-black text-white">
            {item.type}
          </span>

          <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-bold text-[#0759C8]">
            {item.field}
          </span>
        </div>

        <button className="text-2xl text-slate-300 transition-all hover:scale-110 hover:text-[#0759C8]">
          ☆
        </button>
      </div>

      <h3 className="mb-5 text-2xl font-black leading-snug tracking-tight text-[#111827] transition-colors group-hover:text-[#0759C8]">
        {item.title}
      </h3>

      <div className="mb-6 flex flex-wrap items-center gap-5 text-sm font-bold text-slate-600">
        <div className="flex items-center gap-2">
          <span className="text-[#0759C8]">◉</span>
          {item.org}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#0759C8]">⌂</span>
          {item.area}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-100 pt-5">
        <div
          className={`rounded-xl px-4 py-2 text-sm font-black ${
            isUrgent
              ? "bg-[#FFF1E8] text-[#FF7A00]"
              : "bg-[#EEF4FF] text-[#0759C8]"
          }`}
        >
          {item.deadline}
        </div>

        <button className="rounded-xl border border-slate-200 px-5 py-2 text-sm font-black text-slate-700 transition-all hover:border-[#0759C8] hover:bg-[#0759C8] hover:text-white">
          상세보기
        </button>
      </div>
    </article>
  );
}
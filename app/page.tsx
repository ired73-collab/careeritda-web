import { supabase } from '../lib/supabase'

import Footer from "../components/Footer";

import NoticeCard from "../components/NoticeCard";

import CtaBanner from "../components/CtaBanner";

import ServiceSection from "../components/ServiceSection";

import NoticeList from "../components/NoticeList";

import CategorySection from "../components/CategorySection";

import FilterSection from "../components/FilterSection";

import SearchBox from "../components/SearchBox";

import HeroBanner from "../components/HeroBanner";

import Header from "../components/Header";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CareerBridgeLanding() {
const { data: notices } = await supabase
  .from('notices')
  .select('*')
  .order('created_at', { ascending: false })

  const regions = [
    '전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
    '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
  ];

  const categories = [
    '평가위원', '자문위원', '심의위원', '전문강사', '멘토링',
    '기술닥터', '도시재생', 'ICT/정보화', '교육/복지', '창업/경영',
  ];

  const serviceCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
          <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
        </svg>
      ),
      accent: 'blue',
      title: '전문가 공고',
      desc: '평가위원·자문위원·강사 모집 정보를 한곳에서 빠르게 확인합니다.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
          <path d="M12 3v18M3 12h18" strokeLinecap="round" />
        </svg>
      ),
      accent: 'orange',
      title: 'AI 맞춤추천',
      desc: '경력·지역·활동 데이터를 기반으로 적합 공고를 추천합니다.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c1.5-3 4-5 7-5s5.5 2 7 5" strokeLinecap="round" />
        </svg>
      ),
      accent: 'blue',
      title: '전문가 등록',
      desc: '전문분야와 활동 이력을 등록하고 새로운 기회를 연결합니다.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M9 10h6M9 14h3" strokeLinecap="round" />
        </svg>
      ),
      accent: 'orange',
      title: '기관 전문가 의뢰',
      desc: '공공기관·기업이 필요한 분야의 검증된 전문가를 찾을 수 있습니다.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-slate-900 font-['Pretendard',sans-serif]">
      <Header />

      <main>
        <HeroBanner />

<SearchBox />

<FilterSection />

<CategorySection />

<NoticeList notices={notices} />

<ServiceSection />

<CtaBanner />
      </main>

<Footer />
    </div>
  );
}

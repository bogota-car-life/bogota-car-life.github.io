"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CarFront,
  Check,
  ChevronRight,
  CircleGauge,
  Droplets,
  Gauge,
  Mail,
  Search,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  Wind,
} from "lucide-react";

const navigation = [
  { label: "기능 소개", href: "#features" },
  { label: "보고타의 약속", href: "#promise" },
];

const features = [
  {
    id: "warning",
    number: "01",
    eyebrow: "WARNING LIGHT GUIDE",
    title: "계기판에 켜진 불빛,\n무슨 뜻인지 바로 알게.",
    description:
      "처음 보는 표시가 켜져도 걱정하지 마세요. 지금 운전해도 되는지, 무엇을 확인해야 하는지 쉬운 말로 알려드립니다.",
    points: ["지금 운전해도 되는지 위험도 안내", "정비소에 가기 전 해야 할 일 안내"],
    visual: "warning",
  },
  {
    id: "care",
    number: "02",
    eyebrow: "PERSONALIZED CAR CARE",
    title: "내 차 소모품,\n교체할 때를 놓치지 않게.",
    description:
      "차를 잘 몰라도 괜찮아요. 보고타가 내 차의 주행거리와 관리 이력을 살펴 엔진오일, 타이어 같은 소모품의 교체 시기를 알기 쉽게 알려드립니다.",
    points: ["내 차 주행거리 기준 교체 시기 안내", "엔진오일·타이어 등 소모품 한눈에 관리"],
    visual: "care",
  },
  {
    id: "recommend",
    number: "03",
    eyebrow: "SMART RECOMMENDATION",
    title: "내 주행데이터를 바탕으로,\n잘 맞는 차를 추천하게.",
    description:
      "보고타가 주행거리, 주로 달리는 도로, 가속과 감속 같은 실제 운전 패턴을 분석해 내 운전 습관에 잘 맞는 차량을 추천합니다. 별도의 설문은 필요하지 않아요.",
    points: ["추가 질문 없이 주행데이터로 분석", "추천 차량과 그 이유를 한눈에 확인"],
    visual: "recommend",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#top" aria-label="보고타 홈">
      BOGOTA<span>.</span>
    </a>
  );
}

function WarningPreview() {
  return (
    <div className="feature-preview warning-preview" aria-label="차량 경고등 관리 화면 예시">
      <div className="preview-topline">
        <div>
          <span className="preview-kicker">경고등 진단</span>
          <strong>어떤 표시가 켜졌나요?</strong>
        </div>
        <span className="preview-icon-button"><Search size={18} /></span>
      </div>
      <div className="warning-focus">
        <span className="warning-symbol"><TriangleAlert size={34} strokeWidth={1.8} /></span>
        <div>
          <span className="danger-label">주의가 필요해요</span>
          <h3>타이어 공기압 경고</h3>
          <p>안전한 곳에 정차 후 타이어 상태를 확인하세요.</p>
        </div>
        <button type="button" aria-label="자세히 보기"><ChevronRight size={19} /></button>
      </div>
      <div className="warning-grid">
        <div><span><Droplets size={20} /></span><p>엔진 오일</p><small>정상</small></div>
        <div className="active"><span><CircleGauge size={20} /></span><p>타이어</p><small>확인 필요</small></div>
        <div><span><Wind size={20} /></span><p>냉각 장치</p><small>정상</small></div>
      </div>
    </div>
  );
}

function CarePreview() {
  return (
    <div className="feature-preview care-preview" aria-label="차량 관리 화면 예시">
      <div className="car-summary">
        <div>
          <span className="preview-kicker">MY GARAGE</span>
          <strong>GENESIS G80</strong>
          <small>2024 · 가솔린 · 18,620 km</small>
        </div>
        <div className="score-ring"><span>92</span><small>GOOD</small></div>
      </div>
      <div className="care-stats">
        <div><span>다음 점검</span><strong>D-18</strong></div>
        <div><span>이번 달 주행</span><strong>842<small>km</small></strong></div>
        <div><span>관리 항목</span><strong>7<small>개</small></strong></div>
      </div>
      <div className="timeline-card">
        <div className="timeline-head"><strong>다가오는 관리</strong><span>전체 보기</span></div>
        <div className="timeline-item">
          <span className="date-box"><b>08</b><small>AUG</small></span>
          <span className="timeline-dot" />
          <div><strong>엔진오일 교체</strong><small>권장 주기까지 620km</small></div>
          <span className="status-pill">예정</span>
        </div>
        <div className="timeline-item muted">
          <span className="date-box"><b>26</b><small>SEP</small></span>
          <span className="timeline-dot" />
          <div><strong>정기 안전 점검</strong><small>보고타가 미리 알려드려요</small></div>
        </div>
      </div>
    </div>
  );
}

function RecommendPreview() {
  return (
    <div className="feature-preview recommend-preview" aria-label="차량 추천 화면 예시">
      <div className="recommend-head">
        <div>
          <span className="preview-kicker">FROM YOUR DRIVING DATA</span>
          <strong>주행데이터 맞춤 추천</strong>
        </div>
        <Sparkles size={22} />
      </div>
      <div className="match-card">
        <div className="match-visual">
          <span className="car-glow" />
          <CarFront size={92} strokeWidth={1.25} />
          <span className="match-badge"><b>96</b>% MATCH</span>
        </div>
        <div className="match-copy">
          <small>BEST MATCH</small>
          <h3>GENESIS GV70</h3>
          <p>도심 주행 비율과 평소 운전 패턴에 잘 맞는 균형 잡힌 선택</p>
          <div className="tag-row"><span>도심 주행 72%</span><span>평균 주행거리</span><span>부드러운 제동</span></div>
        </div>
      </div>
      <div className="compare-row">
        <span><b>다른 추천 차량</b><small>주행패턴에 맞는 차량 12대</small></span>
        <span className="mini-car"><CarFront size={23} /></span>
        <span className="mini-car"><CarFront size={23} /></span>
        <button type="button" aria-label="다음 추천 차량 보기"><ArrowRight size={17} /></button>
      </div>
    </div>
  );
}

function FeatureVisual({ type }: { type: string }) {
  if (type === "warning") return <WarningPreview />;
  if (type === "care") return <CarePreview />;
  return <RecommendPreview />;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <main id="top">
      <header className="top-header">
        <div className="top-header-inner shell">
          <BrandMark />
          <nav aria-label="주요 메뉴">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-cta" href="#early-access">먼저 만나보기 <ArrowRight size={16} /></a>
        </div>
      </header>

      <section className="features shell" id="features">
        <div className="features-heading">
          <p className="section-label">WHAT BOGOTA DOES</p>
          <h2>내 차를 가장<br />잘 아는 앱.</h2>
          <p className="features-intro">보고타는 내 차의 주행데이터를 바탕으로, 자동차를 잘 몰라도 필요한 정보와 관리 시점을 놓치지 않게 도와드립니다.</p>
        </div>

        <div className="feature-overview" aria-label="보고타 주요 기능">
          <a className="overview-card dark" href="#feature-warning">
            <span className="overview-number">01</span>
            <span className="overview-icon"><TriangleAlert size={24} /></span>
            <div><h3>경고등 해석</h3><p>계기판 불빛의 뜻과 지금 해야 할 일을 알려드려요.</p></div>
            <ChevronRight size={19} className="overview-arrow" />
          </a>
          <a className="overview-card mint" href="#feature-care">
            <span className="overview-number">02</span>
            <span className="overview-icon"><Droplets size={24} /></span>
            <div><h3>소모품 관리</h3><p>내 주행거리에 맞춰 교체 시기를 먼저 알려드려요.</p></div>
            <ChevronRight size={19} className="overview-arrow" />
          </a>
          <a className="overview-card lime" href="#feature-recommend">
            <span className="overview-number">03</span>
            <span className="overview-icon"><CarFront size={24} /></span>
            <div><h3>차량 추천</h3><p>실제 주행 습관을 분석해 잘 맞는 차를 찾아드려요.</p></div>
            <ChevronRight size={19} className="overview-arrow" />
          </a>
        </div>

        {features.map((feature, index) => (
          <article className={`feature-row ${index % 2 === 1 ? "reverse" : ""}`} id={`feature-${feature.id}`} key={feature.number}>
            <div className="feature-copy">
              <span className="feature-number">{feature.number}</span>
              <p className="feature-eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
              <p className="feature-description">{feature.description}</p>
              <ul>
                {feature.points.map((point) => <li key={point}><span><Check size={14} /></span>{point}</li>)}
              </ul>
            </div>
            <FeatureVisual type={feature.visual} />
          </article>
        ))}
      </section>

      <section className="principles" id="promise">
        <div className="shell principle-grid">
          <div className="principle-lead"><p className="section-label light">BOGOTA PROMISE</p><h2>어렵지 않게.<br />놓치지 않게.<br /><span>내 차답게.</span></h2></div>
          <div className="principle-list">
            <div><span><Search size={24} /></span><div><strong>자동차 용어를 몰라도 쉽게</strong><p>처음 듣는 자동차 용어도 바로 이해할 수 있도록 풀어서 설명합니다.</p></div></div>
            <div><span><ShieldCheck size={24} /></span><div><strong>주행한 만큼 알맞게 관리</strong><p>내 차가 실제로 달린 거리와 관리 이력에 맞춰 교체 시기를 알려드립니다.</p></div></div>
            <div><span><Gauge size={24} /></span><div><strong>주행데이터로 찾는 다음 차</strong><p>실제 운전 습관과 차량 이용 패턴을 바탕으로 다음 선택을 도와드립니다.</p></div></div>
          </div>
        </div>
      </section>

      <section className="early-access" id="early-access">
        <div className="early-glow" />
        <div className="shell early-inner">
          <p className="eyebrow centered"><span /> BE THE FIRST TO DRIVE</p>
          <h2>보고타를 가장 먼저<br /><em>만나보세요.</em></h2>
          <p>이메일을 남겨주시면 출시 소식과 사전 체험 안내를 보내드릴게요.</p>
          {submitted ? (
            <div className="success-message" role="status"><span><Check size={22} /></span><div><strong>신청이 완료되었습니다.</strong><small>{email}로 가장 먼저 소식을 전해드릴게요.</small></div></div>
          ) : (
            <form className="email-form" onSubmit={handleSubmit}>
              <label htmlFor="email" className="sr-only">이메일 주소</label>
              <span><Mail size={20} /></span>
              <input id="email" name="email" type="email" autoComplete="email" required placeholder="이메일 주소를 입력해주세요" value={email} onChange={(event) => setEmail(event.target.value)} />
              <button type="submit">사전 체험 신청 <ArrowRight size={18} /></button>
            </form>
          )}
          <small className="privacy-note">입력하신 이메일은 보고타 출시 안내 외 용도로 사용하지 않습니다.</small>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner"><BrandMark /><p>주행데이터 기반 차량 관리 개인화 서비스</p><span>© 2026 BOGOTA. ALL RIGHTS RESERVED.</span></div>
      </footer>
    </main>
  );
}

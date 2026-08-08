"use client";

import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  Bell,
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
  Wrench,
} from "lucide-react";

const navigation = [
  { label: "서비스", href: "#features" },
  { label: "보고타 이야기", href: "#about" },
];

const features = [
  {
    number: "01",
    eyebrow: "WARNING LIGHT GUIDE",
    title: "낯선 경고등 앞에서,\n더 이상 당황하지 않도록.",
    description:
      "계기판에 켜진 경고등을 빠르게 찾고, 원인과 위험도, 지금 해야 할 행동까지 한눈에 확인하세요.",
    points: ["경고등별 원인과 위험도 안내", "상황에 맞는 즉시 대응 가이드"],
    visual: "warning",
  },
  {
    number: "02",
    eyebrow: "MY CAR CARE",
    title: "내 차의 모든 기록을,\n하나의 타임라인으로.",
    description:
      "소모품 교체부터 정기 점검까지 놓치기 쉬운 차량 일정을 보고타가 먼저 챙겨드려요.",
    points: ["차량별 맞춤 관리 주기", "정비·소모품 교체 기록 관리"],
    visual: "care",
  },
  {
    number: "03",
    eyebrow: "SMART RECOMMENDATION",
    title: "많이 팔린 차보다,\n나에게 맞는 차를.",
    description:
      "예산과 라이프스타일, 선호 조건을 분석해 수많은 선택지 중 가장 나다운 차량을 추천합니다.",
    points: ["조건별 차량 비교와 추천", "내 취향을 반영한 매치 스코어"],
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
          <span className="preview-kicker">FOR YOUR LIFESTYLE</span>
          <strong>민수님을 위한 추천</strong>
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
          <p>도심 주행과 주말 레저를 모두 만족하는 균형 잡힌 선택</p>
          <div className="tag-row"><span>패밀리 SUV</span><span>안전성</span><span>승차감</span></div>
        </div>
      </div>
      <div className="compare-row">
        <span><b>다른 추천 차량</b><small>조건에 맞는 차량 12대</small></span>
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
      <section className="hero">
        <header className="site-header shell">
          <BrandMark />
          <nav aria-label="주요 메뉴">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="nav-cta" href="#early-access">먼저 만나보기 <ArrowRight size={16} /></a>
        </header>

        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="eyebrow"><span /> YOUR CAR, CLEARLY</p>
            <h1>차를 아는 순간,<br /><em>운전이 가벼워집니다.</em></h1>
            <p className="hero-description">알쏭달쏭한 경고등부터 매일의 차량 관리,<br className="desktop-break" /> 다음 차를 고르는 일까지. 보고타가 더 쉬운 카라이프를 만듭니다.</p>
            <div className="hero-actions">
              <a className="button primary" href="#early-access">보고타 미리 만나보기 <ArrowRight size={18} /></a>
              <a className="text-link" href="#features">무엇이 달라지나요? <ChevronRight size={17} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>민</span><span>J</span><span>수</span></div>
              <p><strong>더 쉬운 자동차 생활</strong><br />보고타와 함께 시작하세요</p>
            </div>
          </div>

          <div className="hero-visual" aria-label="보고타 앱 차량 관리 대시보드 미리보기">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="float-card float-alert"><span><Bell size={17} /></span><div><small>관리 알림</small><strong>엔진오일 교체 D-18</strong></div></div>
            <div className="float-card float-match"><Sparkles size={18} /><div><small>나와 맞는 차량</small><strong>96% MATCH</strong></div></div>
            <div className="phone-shell">
              <div className="phone-speaker" />
              <div className="phone-screen">
                <div className="app-header"><div><small>안녕하세요, 민수님</small><strong>오늘도 안전운전하세요.</strong></div><span><Bell size={18} /></span></div>
                <div className="vehicle-hero-card">
                  <div className="vehicle-meta"><span>MY CAR</span><strong>GENESIS G80</strong><small>18,620 km</small></div>
                  <div className="car-stage"><span className="car-floor" /><CarFront size={118} strokeWidth={1.1} /></div>
                  <div className="vehicle-status"><span><i /> 차량 상태</span><strong>아주 좋아요</strong></div>
                </div>
                <div className="quick-title"><strong>빠른 메뉴</strong><span>전체보기</span></div>
                <div className="quick-grid">
                  <div><span><TriangleAlert size={20} /></span><small>경고등</small></div>
                  <div><span><Wrench size={20} /></span><small>차량 관리</small></div>
                  <div><span><CarFront size={20} /></span><small>차량 추천</small></div>
                </div>
                <div className="app-health"><div><span><Activity size={17} /></span><p><small>이번 달 카 리포트</small><strong>관리 점수 92점</strong></p></div><ChevronRight size={18} /></div>
                <div className="phone-home" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot shell"><span>SCROLL TO DISCOVER</span><i /></div>
      </section>

      <section className="intro" id="about">
        <div className="shell intro-grid">
          <p className="section-label">ABOUT BOGOTA</p>
          <div>
            <h2>자동차와 사람 사이의<br /><span>복잡함을 덜어냅니다.</span></h2>
            <p>차에 대해 잘 몰라도 괜찮도록. 보고타는 필요한 정보를 가장 쉬운 언어로 전달하고, 매 순간 더 나은 선택을 돕습니다.</p>
          </div>
        </div>
        <div className="marquee" aria-hidden="true"><span>KNOW YOUR CAR&nbsp;&nbsp;·&nbsp;&nbsp; ENJOY YOUR DRIVE&nbsp;&nbsp;·&nbsp;&nbsp; KNOW YOUR CAR&nbsp;&nbsp;·&nbsp;&nbsp; ENJOY YOUR DRIVE</span></div>
      </section>

      <section className="features shell" id="features">
        <div className="features-heading">
          <p className="section-label">WHAT BOGOTA DOES</p>
          <h2>차를 타는 모든 순간에<br />필요한 세 가지.</h2>
        </div>

        {features.map((feature, index) => (
          <article className={`feature-row ${index % 2 === 1 ? "reverse" : ""}`} key={feature.number}>
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

      <section className="principles">
        <div className="shell principle-grid">
          <div className="principle-lead"><p className="section-label light">BOGOTA PROMISE</p><h2>어렵지 않게.<br />놓치지 않게.<br /><span>내 차답게.</span></h2></div>
          <div className="principle-list">
            <div><span><Search size={24} /></span><div><strong>쉽고 정확한 정보</strong><p>어려운 자동차 용어를 누구나 이해하기 쉽게 설명합니다.</p></div></div>
            <div><span><ShieldCheck size={24} /></span><div><strong>놓치지 않는 관리</strong><p>내 차에 꼭 필요한 관리 시점을 먼저 알려드립니다.</p></div></div>
            <div><span><Gauge size={24} /></span><div><strong>나를 위한 선택</strong><p>유행보다 사용자의 생활과 취향을 먼저 생각합니다.</p></div></div>
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
        <div className="shell footer-inner"><BrandMark /><p>차를 아는 가장 쉬운 방법</p><span>© 2026 BOGOTA. ALL RIGHTS RESERVED.</span></div>
      </footer>
    </main>
  );
}

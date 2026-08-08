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
  { label: "기능 소개", href: "#features" },
  { label: "보고타의 약속", href: "#promise" },
];

const features = [
  {
    number: "01",
    eyebrow: "WARNING LIGHT GUIDE",
    title: "계기판에 켜진 불빛,\n무슨 뜻인지 바로 알게.",
    description:
      "처음 보는 표시가 켜져도 걱정하지 마세요. 지금 운전해도 되는지, 무엇을 확인해야 하는지 쉬운 말로 알려드립니다.",
    points: ["지금 운전해도 되는지 위험도 안내", "정비소에 가기 전 해야 할 일 안내"],
    visual: "warning",
  },
  {
    number: "02",
    eyebrow: "PERSONALIZED CAR CARE",
    title: "내 차 소모품,\n교체할 때를 놓치지 않게.",
    description:
      "차를 잘 몰라도 괜찮아요. 보고타가 내 차의 주행거리와 관리 이력을 살펴 엔진오일, 타이어 같은 소모품의 교체 시기를 알기 쉽게 알려드립니다.",
    points: ["내 차 주행거리 기준 교체 시기 안내", "엔진오일·타이어 등 소모품 한눈에 관리"],
    visual: "care",
  },
  {
    number: "03",
    eyebrow: "SMART RECOMMENDATION",
    title: "어떤 차가 맞는지,\n간단한 질문으로 알 수 있게.",
    description:
      "예산, 가족 수, 평소 이동 거리를 알려주세요. 어려운 자동차 용어 없이 나에게 잘 맞는 차량을 골라드립니다.",
    points: ["쉬운 질문으로 내게 맞는 차량 찾기", "추천 이유와 차량별 차이 한눈에 확인"],
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
            <p className="eyebrow hero-service-label"><span /> 주행데이터 기반 차량 관리 개인화 서비스</p>
            <h1>내 차를 잘 몰라도,<br /><em>보고타가 알아서 챙깁니다.</em></h1>
            <p className="hero-description">보고타는 내 차의 주행거리와 관리 이력을 바탕으로<br className="desktop-break" /> 필요한 소모품 교체 시기와 차량 정보를 쉬운 말로 알려드려요.</p>
            <div className="hero-actions">
              <a className="button primary" href="#early-access">보고타 미리 만나보기 <ArrowRight size={18} /></a>
              <a className="text-link" href="#features">어떻게 챙겨주나요? <ChevronRight size={17} /></a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack" aria-hidden="true"><span>민</span><span>J</span><span>수</span></div>
              <p><strong>자동차를 몰라도 쉬운 차량 관리</strong><br />보고타와 함께 시작하세요</p>
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

      <section className="features shell" id="features">
        <div className="features-heading">
          <p className="section-label">WHAT BOGOTA DOES</p>
          <h2>차를 잘 몰라도 괜찮은<br />세 가지 이유.</h2>
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

      <section className="principles" id="promise">
        <div className="shell principle-grid">
          <div className="principle-lead"><p className="section-label light">BOGOTA PROMISE</p><h2>어렵지 않게.<br />놓치지 않게.<br /><span>내 차답게.</span></h2></div>
          <div className="principle-list">
            <div><span><Search size={24} /></span><div><strong>자동차 용어를 몰라도 쉽게</strong><p>처음 듣는 자동차 용어도 바로 이해할 수 있도록 풀어서 설명합니다.</p></div></div>
            <div><span><ShieldCheck size={24} /></span><div><strong>주행한 만큼 알맞게 관리</strong><p>내 차가 실제로 달린 거리와 관리 이력에 맞춰 교체 시기를 알려드립니다.</p></div></div>
            <div><span><Gauge size={24} /></span><div><strong>내 생활에 맞는 차량 추천</strong><p>복잡한 제원 대신 예산과 생활 방식에 맞는 선택을 도와드립니다.</p></div></div>
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

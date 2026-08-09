"use client";

import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  Bluetooth,
  CarFront,
  Check,
  ChevronRight,
  Gauge,
  Mail,
  ReceiptText,
  Route,
  ScanLine,
  TriangleAlert,
  Wrench,
} from "lucide-react";

const navigation = [{ label: "기능 소개", href: "#features" }];

const emailDomains = ["gmail.com", "naver.com", "kakao.com", "daum.net", "hanmail.net", "outlook.com"];

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
    title: "내 주행습관에 맞춰,\n소모품을 더 알맞게.",
    description:
      "같은 거리를 달려도 차에 주는 부담은 운전마다 다릅니다. 보고타가 급가속, 고회전, 도심 주행 같은 실제 주행데이터를 분석해 소모품별 교체 주기를 내 차에 맞게 조정합니다.",
    points: ["괜찮은 소모품은 몇 % 더 사용 가능한지 안내", "부담이 큰 소모품은 교체 시기를 더 일찍 안내"],
    visual: "care",
  },
  {
    id: "recommend",
    number: "03",
    eyebrow: "SMART RECOMMENDATION",
    title: "내 주행데이터를 바탕으로,\n잘 맞는 차를 추천하게.",
    description:
      "보고타가 주행거리, 주로 달리는 도로, 가속과 감속 같은 실제 운전 패턴을 분석해 내 운전 습관에 잘 맞는 차량을 추천합니다. 별도의 설문은 필요하지 않아요.",
    points: ["추천 차량과 그 이유를 한눈에 확인", "주행데이터로 운전성향과 주행스타일 분석"],
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
        <strong>OBD 경고 진단</strong>
        <span className="preview-icon-button"><Bluetooth size={18} /></span>
      </div>

      <div className="warning-scan-strip">
        <span><ScanLine size={21} /></span>
        <strong>경고 3개를 발견했어요</strong>
        <em>진단 완료</em>
      </div>

      <div className="warning-selected">
        <span><img src="/engine-warning-icon.png" alt="" /></span>
        <strong>엔진 경고등</strong>
        <em>노란색 경고등 : 빠른 시일 내 점검</em>
      </div>

      <div className="warning-cause-list">
        <div className="warning-cause active">
          <span className="cause-rank">1순위</span>
          <div><small>가장 가능성 높은 원인</small><strong>점화 코일 성능 저하</strong></div>
          <div className="cause-estimate"><ReceiptText size={18} /><span>예상 수리비</span><b>20~30만원</b></div>
        </div>
        <div className="warning-cause compact">
          <span className="cause-rank">2순위</span>
          <strong>점화 플러그 마모</strong>
        </div>
        <div className="warning-cause compact">
          <span className="cause-rank">3순위</span>
          <strong>연료 인젝터 분사 불량</strong>
        </div>
      </div>
    </div>
  );
}

function CarePreview() {
  const careItems = [
    {
      name: "엔진오일",
      standard: "10,000km",
      personalized: "11,200km",
      adjustment: "+12% 더 사용",
      tone: "extend",
    },
    {
      name: "브레이크 패드",
      standard: "40,000km",
      personalized: "42,800km",
      adjustment: "+7% 더 사용",
      tone: "extend",
    },
    {
      name: "에어컨 필터",
      standard: "10,000km",
      personalized: "9,200km",
      adjustment: "8% 일찍 교체",
      tone: "sooner",
    },
  ];

  return (
    <div className="feature-preview care-preview" aria-label="주행데이터 기반 개인화 소모품 관리 화면 예시">
      <div className="care-personal-head">
        <div>
          <strong>내 주행스타일 분석 완료</strong>
          <small>최근 주행데이터 842km 반영</small>
        </div>
        <div className="care-profile-badge"><Activity size={18} /><b>안정형 운전</b></div>
      </div>

      <div className="care-style-result">
        <Gauge size={21} />
        <strong>차량 부담이 적은 주행이에요</strong>
      </div>

      <div className="personal-care-panel">
        <div className="personal-care-title">
          <div><Wrench size={18} /><strong>개인화된 소모품 교체 주기</strong></div>
        </div>
        <div className="personal-care-list">
          {careItems.map((item) => (
            <div className="personal-care-item" key={item.name}>
              <div className="care-item-top">
                <strong>{item.name}</strong>
                <span className={`care-adjustment ${item.tone}`}>{item.adjustment}</span>
              </div>
              <div className="care-cycle-row">
                <span>일반 <s>{item.standard}</s></span>
                <ArrowRight size={11} />
                <b>내 차 {item.personalized}</b>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RecommendPreview() {
  return (
    <div className="feature-preview recommend-preview" aria-label="차량 추천 화면 예시">
      <div className="recommend-head">
        <strong>주행데이터 맞춤 추천</strong>
      </div>

      <div className="recommend-best">
        <div className="recommend-car-visual">
          <img src="/kona-recommendation.png" alt="현대 코나 HEV" />
        </div>
        <div className="recommend-best-copy">
          <span>1위 추천</span>
          <div><strong>현대 코나 HEV</strong><b>91.4<small>점</small></b></div>
          <p>도심 연비 · 정차-출발 대응 · HEV 추천</p>
        </div>
      </div>

      <div className="recommend-insights">
        <div>
          <div className="recommend-insight-title"><Activity size={17} /><strong>운전자 성향</strong></div>
          <span>부드러운 가속 성향</span>
          <span>급가속·급제동 적음</span>
        </div>
        <div>
          <div className="recommend-insight-title"><Route size={17} /><strong>주행 스타일</strong></div>
          <span>도심·저속 주행 중심</span>
          <span>짧은 거리 이동</span>
        </div>
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
  const [emailId, setEmailId] = useState("");
  const [emailDomain, setEmailDomain] = useState("gmail.com");
  const [submitted, setSubmitted] = useState(false);
  const fullEmail = `${emailId.trim()}@${emailDomain.trim()}`;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailId.trim() || !emailDomain.trim()) return;
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
          <img className="features-logo" src="/bogota-logo.png" alt="BOGOTA" />
          <h2>내 차를 가장 잘 아는 앱.</h2>
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
            <span className="overview-icon"><Wrench size={23} /></span>
            <div><h3>개인화 소모품 관리</h3><p>주행습관을 분석해 소모품별 교체 주기를 맞춰드려요.</p></div>
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

      <section className="early-access" id="early-access">
        <div className="shell early-inner">
          <div className="early-copy">
            <p className="section-label">EARLY ACCESS</p>
            <h2>앱스토어 출시 전,<br /><em>먼저 사용해보기</em></h2>
            <p>출시 일정과 사전 체험 안내를 입력하신 이메일로 보내드릴게요.</p>
          </div>
          <div className="early-form-panel">
            {submitted ? (
              <div className="success-message" role="status"><span><Check size={22} /></span><div><strong>신청이 완료되었습니다.</strong><small>{fullEmail}로 가장 먼저 소식을 전해드릴게요.</small></div></div>
            ) : (
              <form className="email-form" onSubmit={handleSubmit}>
                <div className="email-entry">
                  <span className="email-icon"><Mail size={19} /></span>
                  <label htmlFor="email-id" className="sr-only">이메일 아이디</label>
                  <input id="email-id" name="email-id" type="text" autoComplete="username" required pattern="[A-Za-z0-9._%+-]+" placeholder="이메일 아이디" value={emailId} onChange={(event) => setEmailId(event.target.value)} />
                  <span className="email-at">@</span>
                  <label htmlFor="email-domain" className="sr-only">이메일 도메인</label>
                  <select id="email-domain" name="email-domain" className="email-domain-select" required value={emailDomain} onChange={(event) => setEmailDomain(event.target.value)}>
                    {emailDomains.map((domain) => (
                      <option value={domain} key={domain}>{domain}</option>
                    ))}
                  </select>
                </div>
                <button type="submit">사전 체험 신청 <ArrowRight size={18} /></button>
              </form>
            )}
            <small className="privacy-note">입력하신 이메일은 보고타 출시 안내 외 용도로 사용하지 않습니다.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-inner"><BrandMark /><p>주행데이터 기반 차량 관리 개인화 서비스</p><span>© 2026 BOGOTA. ALL RIGHTS RESERVED.</span></div>
      </footer>
    </main>
  );
}

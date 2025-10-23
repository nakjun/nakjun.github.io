// ======= Utility & Stateful Data =======
const state = {
  tag: 'all',
  year: 'all'
};
// publications.js에서 publications 변수를 가져와야 합니다.
// 아래와 같이 publications.js를 import(혹은 include)해야 publications 변수를 사용할 수 있습니다.

// 방법 1: <script> 태그로 publications.js를 먼저 불러오고 script.js를 나중에 불러오는 것이 가장 간단합니다.
// index.html에서
// <script src="publications.js"></script>
// <script src="script.js"></script>
// 순서로 추가되어야 합니다.

// 방법 2: 만약 publications.js가 이미 <script>로 불러와진 상태라면 별도 조치 필요 없습니다.

// 방법 3: 모듈 시스템을 쓴다면 아래처럼 import 해야 하지만, 브라우저 환경에서는 보통 위 방법 1을 사용합니다.
// import { publications } from './publications.js';

// publications 변수가 정상적으로 정의되어 있는지 확인하는 코드 (디버깅용)
if (typeof publications === 'undefined') {
  console.error('publications 변수가 정의되어 있지 않습니다. index.html에서 publications.js가 script.js보다 먼저 로드되어야 합니다.');
}


const projects = [
  {
    title: '암질환 의료영상과 판독문을 이용한 생성형 인공지능 모델 개발 연구',
    desc: '국립암센터, 2024.11.18 ~ 현재',
    links: {}
  },
  {
    title:'오픈 메타버스 플랫폼 활용을 통한 감염병 내용 교육 프로그램 콘텐츠 개발',
    desc: '순천향대학교 천안병원, 2024.06.25 ~ 2024.08.31',
    links: {}
  },
  {
    title: '현실감 있는 3D 콘텐츠 개발을 위한 딥러닝 기반 시뮬레이션 특성값 예측 연구',
    desc: '교육부, 2024.03.01 ~ 2024.08.31',
    links: {}
  },
  {
    title: '모듈러 음압병동 인공지능설계 솔루션 개발 및 실물 mock-up 실증 연구',
    desc: '보건복지부, 2023.01.01 ~ 2023.11.30',
    links: {}
  },
  {
    title: '환자 맞춤형 복부 수술 시뮬레이터',
    desc: '보건복지부, 2021.07.01 ~ 2021.12.31',
    links: {}
  },
  {
    title: '수술 환경 인지기반 반능동형 정밀 수술로봇 플랫폼 개발',
    desc: '범부처전주기의료기기연구개발사업단(과기정통부, 복지부, 산업부), 2020.09.01 ~ 2022.02.28',
    links: {}
  },
  {
    title: '변형물체 시뮬레이션과 공간 분석 기술을 접목한 실시간 상호작용 증강현실 연구',
    desc: '과학기술정보통신부, 2019.06.01 ~ 2020.03.31',
    links: {}
  },
  {
    title: '웰니스 삶을 위한 WellTEC 코칭 서비스 및 콘텐츠 개발',
    desc: '미래창조과학부, 2017.01.01 ~ 2019.12.31',
    links: {}
  },
  {
    title: '일회용 패치 기반의 환자 모니터링 시스템 개발',
    desc: '과학기술정보통신부, 2019.07.01 ~ 2020.03.31',
    links: {}
  },
  {
    title: '인공지능 기반 심혈관 질환 진단 연구',
    desc: '과학기술정보통신부, 2019.12.01 ~ 2020.03.31',
    links: {}
  },
  {
    title: 'HMD 디바이스를 활용한 다이내믹 시뮬레이션 플러그인 개발',
    desc: '과학기술정보통신부, 2017.03.01 ~ 2019.02.28',
    links: {}
  },
];
const career = [
  {org:'국립암센터 국제암대학원대학교, 보건AI학과', role:'산학조교수', period:'2025.03 — 현재', detail:'의료 인공지능 연구'},
  {org:'국립암센터 연구소, 암빅데이터인공지능연구과', role:'박사후연구원', period:'2024.11 — 현재', detail:'의료 인공지능 연구'},
  {org:'(주)텐일레븐 미래기술연구소, 엔진팀', role:'선임연구원, 팀장', period:'2022.03 — 2023.12', detail:'인공지능 건축설계 솔루션 연구 개발'},
  {org:'(주)휴톰 R&D센터, 그래픽스팀', role:'선임연구원, 파트리더', period:'2020.05 — 2022.02', detail:'디지털트윈 로봇 수술 내비게이션, 시뮬레이터 연구 개발'},
  {org:'(주)올포원', role:'대표이사', period:'2018.07 — 2019.03', detail:'가상현실 어지럼증 진단, 재활 솔루션 연구 개발'}
];
const teaching = [
  '[mentoring] 인턴십 프로그램, 2025.06 - 2024.08, 국립암센터 연구소',
  '[lecture] 파이썬 프로그래밍, 2024.03 - 2024.06, 순천향대학교 컴퓨터소프트웨어공학과',
  '[lecture] 웹 프로그래밍, 2024.03 - 2024.06, 순천향대학교 컴퓨터소프트웨어공학과',
  '[lecture] 자바 프로그래밍, 2024.03 - 2024.06, 순천향대학교 사물인터넷학과',
  '[lecture] 컴퓨터그래픽스, 2019.03 - 2019.06, 순천향대학교 컴퓨터소프트웨어공학과',
  '[lecture] 자료구조 실습, 2019.03 - 2019.06, 순천향대학교 컴퓨터소프트웨어공학과',
];
const awards = [
  '2025 한국데이터사이언스학회 장려논문상 (한국데이터사이언스학회). Title: 확산 모델을 활용한 유방촬영술 영상 생성',
  'ICONI 2017 Outstanding Paper Award (한국인터넷정보학회). Title: Coherent Behavior Level-of-detail in Mass-Spring Simulations',
  'ICT연구센터지원사업 창의인재평가 우수상 (정보통신기술진흥센터/정보통신기획평가원)',
  '2015 인터넷정보학회 추계학술대회 우수논문상 (한국인터넷정보학회). Title: 키넥트를 활용한 증강현실 시스템 구현'
];
const service = [
  'Reviewer: AAAI2026'
];

// ======= Rendering =======
const el = (sel)=>document.querySelector(sel);
const els = (sel)=>Array.from(document.querySelectorAll(sel));

function renderYearOptions(){
  
  const years = Array.from(new Set(publications.map(p=>p.year))).sort((a,b)=>b-a);
  const select = el('#yearSelect');
  years.forEach(y=>{
    const o = document.createElement('option'); o.value=String(y); o.textContent=String(y); select.appendChild(o);
  });
}
function renderPubs(){
  const list = el('#pubList'); list.innerHTML='';
  publications
    .filter(p=> state.tag==='all' || p.tags.includes(state.tag))
    .filter(p=> state.year==='all' || String(p.year)===String(state.year))
    .sort((a,b)=> b.year - a.year)
    .forEach((p,i)=>{
      // 저자 목록에서 "Nak-Jun Sung"만 진하게 표시
      const formattedAuthors = p.authors.map(author => 
        author === 'Nak-Jun Sung' ? `<strong>${author}</strong>` : author
      );
      
      const div = document.createElement('div'); div.className='pub';
      div.innerHTML = `
        <div>
          <div class="title">${p.title}</div>
          <div class="meta">${formattedAuthors.join(', ')} · <span class="mono">${p.venue}</span> · ${p.year}</div>
          <div class="chipset" style="margin-top:8px">${p.tags.map(t=>`<span class='tag'>${t}</span>`).join('')}</div>
          <div class="links" style="margin-top:10px">
            ${p.links.pdf?`<a href="${p.links.pdf}" target="_blank" rel="noopener">Link</a>`:''}
            ${p.links.project?`<a href="${p.links.project}" target="_blank" rel="noopener">Project</a>`:''}
            ${p.links.code?`<a href="${p.links.code}" target="_blank" rel="noopener">Code</a>`:''}
            <button class="mono tiny" data-bib="${encodeURIComponent(p.bibtex)}">Copy BibTeX</button>
          </div>
        </div>
        <div class="mono tiny muted" style="text-align:right">#${i+1}</div>
      `;
      list.appendChild(div);
    });
}
function renderProjects(){
  const grid = el('#projGrid'); grid.innerHTML='';
  projects.forEach(pr=>{
    const c = document.createElement('div'); c.className='card';
    c.innerHTML = `
      <div class="title">${pr.title}</div>
      <div class="muted">${pr.desc}</div>
      <div class="links" style="margin-top:10px">
        ${pr.links.demo?`<a href="${pr.links.demo}" target="_blank">Demo</a>`:''}
        ${pr.links.code?`<a href="${pr.links.code}" target="_blank">Code</a>`:''}
      </div>
    `;
    grid.appendChild(c);
  });
}
function renderCareer(){
  const holder = el('#careerTimeline'); holder.innerHTML='';
  career.forEach(e=>{
    const d = document.createElement('div'); d.className='titem';
    d.innerHTML = `<div><strong>${e.role}</strong> · ${e.org}<div class="muted tiny">${e.period}</div><div class="tiny">${e.detail||''}</div></div>`;
    holder.appendChild(d);
  })
}
function renderList(id, arr){
  const ul = el(id); ul.innerHTML=''; arr.forEach(x=>{const li=document.createElement('li'); li.textContent=x; ul.appendChild(li);});
}

// ======= Interactions =======
function mountFilters(){
  els('.pill').forEach(p=>p.addEventListener('click', e=>{
    els('.pill').forEach(x=>x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    state.tag = e.currentTarget.getAttribute('data-tag');
    renderPubs();
  }));
  el('#yearSelect').addEventListener('change', e=>{ state.year = e.target.value; renderPubs(); });
}
function mountCopy(){
  document.body.addEventListener('click', (ev)=>{
    const btn = ev.target.closest('button[data-bib]'); if(!btn) return;
    const bib = decodeURIComponent(btn.getAttribute('data-bib'));
    navigator.clipboard.writeText(bib).then(()=>toast('BibTeX가 복사되었습니다'));
  })
}
function toast(msg){
  const t = el('#toast'); t.textContent = msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 1400);
}
function mountPDF(){ el('#btn-download').addEventListener('click', ()=>window.print()); }
function mountTheme(){
  const key='cv-theme';
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved = localStorage.getItem(key);
  const initial = saved || (prefersDark? 'dark':'light');
  applyTheme(initial);
  el('#btn-theme').addEventListener('click', ()=>{
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur==='dark' ? 'light' : 'dark';
    applyTheme(next); localStorage.setItem(key,next);
  });
  function applyTheme(mode){
    document.documentElement.setAttribute('data-theme', mode);
    if(mode==='dark'){document.documentElement.classList.remove('light'); document.documentElement.classList.add('dark');}
    else {document.documentElement.classList.remove('dark'); document.documentElement.classList.add('light');}
  }
}
function mountScrollSpy(){
  const links = els('#nav a');
  const sections = links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
  
  // 메뉴 클릭 시 부드러운 스크롤 및 즉시 활성화
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        // 모든 메뉴에서 active 클래스 제거
        links.forEach(a => a.classList.remove('active'));
        // 클릭한 메뉴에 active 클래스 추가
        link.classList.add('active');
        
        // 부드러운 스크롤
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // 스크롤 위치에 따른 메뉴 활성화 함수
  function updateActiveMenu() {
    const scrollPos = window.scrollY + 100; // 약간의 오프셋 추가
    
    // About 섹션을 특별히 처리 (페이지 최상단)
    if (scrollPos < 200) {
      links.forEach(a => a.classList.remove('active'));
      const aboutLink = links.find(a => a.getAttribute('href') === '#about');
      if (aboutLink) aboutLink.classList.add('active');
      return;
    }
    
    // 다른 섹션들 처리
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPos >= sectionTop - 100 && scrollPos < sectionTop + sectionHeight - 100) {
        currentSection = '#' + section.id;
      }
    });
    
    // 활성 메뉴 업데이트
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === currentSection);
    });
  }
  
  // 스크롤 이벤트 리스너 추가
  window.addEventListener('scroll', updateActiveMenu);
  
  // 초기 상태 설정
  updateActiveMenu();
  
  // IntersectionObserver도 유지 (백업용)
  const io = new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        const id = '#'+ent.target.id;
        links.forEach(a=>a.classList.toggle('active', a.getAttribute('href')===id));
      }
    })
  }, {rootMargin:'-20% 0px -30% 0px', threshold:[0,0.1,0.5,1]});
  sections.forEach(sec=>io.observe(sec));
}
function lastUpdated(){
  const nowKR = new Date().toLocaleDateString('ko-KR', { timeZone:'Asia/Seoul', year:'numeric', month:'2-digit', day:'2-digit'});
  el('#lastUpdated').textContent = nowKR;
}

// ======= Boot =======
renderYearOptions();
renderPubs();
renderProjects();
renderCareer();
renderList('#teachList', teaching);
renderList('#awardList', awards);
renderList('#serviceList', service);
mountFilters();
mountCopy();
mountPDF();
mountTheme();
mountScrollSpy();
lastUpdated(); 
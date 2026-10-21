import './style.css';
import './redesign.css';

const phone = '+7 (920) 014-00-62';
const personal = `<a href="tel:+79200140062">${phone}</a>`;
const arrow = '<span aria-hidden="true">↗</span>';
const services = [
  { id: 'parts', path: '/', name: 'Автозапчасти', number: '01', title: 'Детали, которые<br>решают всё.', description: 'Подберём запчасти для грузовой и коммерческой техники. От расходников до сложных узлов.', action: 'Подобрать запчасть', label: 'Запчасти', tags: 'Двигатель · Трансмиссия · Ходовая', icon: '⚙', items: ['Детали для технического обслуживания', 'Двигатель и топливная система', 'Трансмиссия и сцепление', 'Тормоза и пневматическая система', 'Ходовая и рулевое управление', 'Электрика, охлаждение и детали кузова'] },
  { id: 'service', path: '/truckrepairs', name: 'Грузовой автосервис', number: '02', title: 'Вернём технику<br>в работу.', description: 'Техническое обслуживание, ремонт грузовых автомобилей и помощь на дороге в Арзамасе и районе.', action: 'Обсудить ремонт', label: 'Сервис', tags: 'ТО · Диагностика · Ремонт', icon: '↗', items: ['Техническое обслуживание грузовиков', 'Ремонт двигателей и коробок передач', 'Ремонт ходовой тягачей и полуприцепов', 'Автоэлектрик и сварочные работы', 'Грузовой шиномонтаж', 'Выездной ремонт в Арзамасе и районе'] },
  { id: 'cargo', path: '/cargotransportation', name: 'Перевозка грузов', number: '03', title: 'Ваш груз.<br>Наш маршрут.', description: 'Организуем перевозку по России и СНГ. Подберём транспорт и поможем с документами.', action: 'Запросить расчёт', label: 'Перевозки', tags: 'Россия и СНГ · Логистика', icon: '⇄', items: ['Междугородние грузоперевозки', 'Подбор транспорта и маршрута', 'Перевозки с температурным режимом', 'Организация страхования груза', 'Сопровождение и документы', 'Согласование оплаты с НДС и без НДС'] },
];
const base = import.meta.env.BASE_URL;
const path = base !== '/' ? (new URLSearchParams(location.search).get('page') ? '/' + new URLSearchParams(location.search).get('page') : '/') : location.pathname.replace(/\/$/, '') || '/';
const current = services.find(s => s.path === path);
const home = path === '/';
const nav = `<a href="/#directions">Направления</a><a href="/#approach">Как работаем</a><a href="/contacts">Контакты</a>`;
const brand = `<a class="brand" href="/" aria-label="КОМ-АВТО — главная"><span class="brand-symbol" aria-hidden="true">К<span>↗</span></span><span>КОМ-АВТО<small>В ДВИЖЕНИИ ВАШЕГО БИЗНЕСА</small></span></a>`;
const button = (text, id = 'parts', cls = 'button') => `<button class="${cls}" data-contact="${id}">${text}${arrow}</button>`;
const sectionHead = (label, title, desc = '') => `<div class="section-head"><div><p class="eyebrow"><span></span>${label}</p><h2>${title}</h2></div>${desc ? `<p class="section-description">${desc}</p>` : ''}</div>`;

function serviceArt(id) {
  const svgStart = `<svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="metal-${id}" x1="70" y1="10" x2="240" y2="195" gradientUnits="userSpaceOnUse"><stop stop-color="#eeeae3"/><stop offset=".35" stop-color="#93958f"/><stop offset=".58" stop-color="#303434"/><stop offset=".8" stop-color="#c6c5bc"/><stop offset="1" stop-color="#555a57"/></linearGradient></defs>`;
  if (id === 'parts') return svgStart + `<g transform="translate(160 100) rotate(-20)"><circle r="80" stroke="currentColor" opacity=".2" stroke-dasharray="3 6"/><circle r="67" fill="url(#metal-parts)" stroke="#b9bcb4" stroke-width="2"/><circle r="53" stroke="#373b37" stroke-width="5"/><circle r="46" stroke="#e5e5db" stroke-width="2"/><circle r="23" fill="#191c1a" stroke="#a3a99b" stroke-width="7"/>${Array.from({length:12},(_,i)=>`<g transform="rotate(${i*30})"><path d="M-7-57 -6-72 6-72 7-57" fill="url(#metal-parts)" stroke="#9a9f94"/><circle cx="0" cy="-35" r="4" fill="#343832"/></g>`).join('')}</g><path d="M35 40h35m-18-18v36M250 160h35m-18-18v36" stroke="currentColor" opacity=".4"/><path d="M30 177h260" stroke="currentColor" opacity=".2"/>` + '</svg>';
  if(id === 'service') return svgStart + `<g transform="translate(165 100) rotate(35)"><path d="M-28-76C-62-65-66-15-26 4L-22 71Q0 101 22 71L26 4C66-15 62-65 28-76V-35L0-18-28-35Z" fill="url(#metal-service)" stroke="#bdc0b6" stroke-width="2"/><path d="M0 11v49" stroke="#373d37" stroke-width="8" stroke-linecap="round"/><circle cy="70" r="8" fill="#242a24" stroke="#c5c7bd" stroke-width="2"/></g><circle cx="165" cy="100" r="86" stroke="currentColor" stroke-dasharray="3 6" opacity=".2"/><path d="M30 45h50m-25-25v50M250 155h40m-20-20v40" stroke="currentColor" opacity=".4"/>` + '</svg>';
  return svgStart + `<path d="M25 164h270M25 154l70-45 63 26 123-93" stroke="currentColor" opacity=".35" stroke-dasharray="3 5"/><g transform="translate(30 30)"><path d="M0 65h145V7H0Z" fill="url(#metal-cargo)"/><path d="M145 24h44l36 42v40h-80Z" fill="#ff5b29" stroke="#ff9b67"/><path d="M153 32h30l24 29h-54Z" fill="#272b29" stroke="#90988a"/><path d="M0 70h225v18H0Z" fill="#555b56"/>${[42,119,190].map(x=>`<circle cx="${x}" cy="91" r="20" fill="#101310" stroke="#565f54" stroke-width="5"/><circle cx="${x}" cy="91" r="9" fill="#b5b9b0"/>`).join('')}<path d="M16 20v37m15-37v37m15-37v37m15-37v37m15-37v37m15-37v37m15-37v37m15-37v37" stroke="#272e27" opacity=".45"/></g><circle cx="30" cy="164" r="5" fill="currentColor"/><circle cx="281" cy="42" r="5" fill="currentColor"/>` + '</svg>';
}

function homeContent() {
  return `<section class="hero cinematic-hero" aria-labelledby="hero-title">
    <div class="hero-grid" aria-hidden="true"></div>
    <div class="hero-vertical" aria-hidden="true">КОМ—АВТО / В ДВИЖЕНИИ</div>
    <img class="hero-image" src="${base}images/truck.webp" alt="Жёлтый грузовой тягач MAN" fetchpriority="high" width="1080" height="686">
    <div class="hero-shade"></div>
    <div class="container hero-content"><div class="hero-meta"><p class="eyebrow"><span></span>ГРУЗОВАЯ ТЕХНИКА. БОЛЬШИЕ ЗАДАЧИ.</p><span>АРЗАМАС / РОССИЯ И СНГ</span></div>
      <h1 id="hero-title"><span class="hero-word">СИЛА</span><span class="hero-word hero-word-outline">В ДВИЖЕНИИ<span class="title-dot">.</span></span></h1>
      <div class="hero-caption"><span class="caption-index">[ 01 — 03 ]</span><p class="hero-description">Пока вы строите бизнес,<br>мы заботимся о том,<br>что приводит его в движение.</p><div class="hero-actions"><a class="button" href="#directions">Выбрать направление ${arrow}</a><a class="hero-phone" href="tel:+79200140062">${phone} ${arrow}</a></div></div>
      <a class="hero-stamp" href="#directions" aria-label="Узнать о запчастях, сервисе и перевозках"><span>ЗАПЧАСТИ / СЕРВИС</span><strong>↗</strong><span>ПЕРЕВОЗКИ / КОМ-АВТО</span></a>
      <div class="hero-bottom"><span>ТРИ НАПРАВЛЕНИЯ. ОДНА КОМАНДА.</span><span class="scroll-prompt">ЛИСТАЙТЕ ДАЛЬШЕ <span aria-hidden="true">↓</span></span></div>
    </div>
  </section>
  <div class="motion-strip" aria-label="Запчасти. Сервис. Перевозки."><div class="motion-track" aria-hidden="true">${Array.from({length:4},()=>'<span>ЗАПЧАСТИ</span><i><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 1v22M1 12h22M4 4l16 16M20 4 4 20"/></svg></i><span>СЕРВИС</span><i><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 1v22M1 12h22M4 4l16 16M20 4 4 20"/></svg></i><span>ПЕРЕВОЗКИ</span><i><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 1v22M1 12h22M4 4l16 16M20 4 4 20"/></svg></i>').join('')}</div></div>
  <div class="brands"><div class="container"><span>РАБОТАЕМ С МАРКАМИ</span><div>MAN</div><div>VOLVO</div><div>SCANIA</div><div>DAF</div><div>IVECO</div><div class="brand-small">Mercedes-Benz</div><div class="brand-small">Renault Trucks</div></div></div>
  <section class="section container" id="directions">${sectionHead('01 / НАПРАВЛЕНИЯ', 'Большой технике —<br><em>сильная поддержка.</em>', 'От одной детали до целого маршрута.<br>Выберите, что нужно вашему бизнесу.')}
    <div class="service-grid">${services.map(s => `<article class="service-card ${s.id}"><div class="card-top"><span>${s.number} / ${s.label.toUpperCase()}</span><span class="card-icon" aria-hidden="true">${s.icon}</span></div><div class="service-art" aria-hidden="true">${serviceArt(s.id)}</div><h3>${s.title}</h3><p>${s.description}</p><p class="card-tags">${s.tags}</p>${s.id === 'parts' ? button(s.action, s.id, 'card-link') : `<a class="card-link" href="${s.path}">${s.action}${arrow}</a>`}</article>`).join('')}</div>
  </section>
  <section class="manifesto"><div class="container"><p class="eyebrow">НАША РАБОТА — ВАШЕ ДВИЖЕНИЕ</p><p class="manifesto-title">ГРУЗ ДОЛЖЕН<br><span>ЕХАТЬ.</span><br>БИЗНЕС — <em>РАСТИ.</em></p><div class="manifesto-bottom"><span class="manifesto-mark" aria-hidden="true">↗</span><p>Когда всё связано, всё работает.<br>Запчасти, ремонт и логистика —<br>в руках одной команды.</p></div></div><div class="manifesto-orbit" aria-hidden="true"></div></section>
  <section class="approach section" id="approach"><div class="container approach-grid"><div>${sectionHead('02 / ПОДХОД К ДЕЛУ', 'Меньше слов.<br><span class="muted">Больше дела.</span>')}<p class="approach-description">Не нужно искать разных подрядчиков для каждой задачи. Расскажите, что нужно, — вместе найдём решение.</p><a class="text-link" href="/contacts">Познакомимся ближе ${arrow}</a></div><div class="steps">${[['01','Разбираемся в задаче','Уточняем модель техники, нужную деталь, характер ремонта или маршрут перевозки.'],['02','Предлагаем решение','Обсуждаем варианты, стоимость и условия до начала работы.'],['03','Включаемся в работу','Согласовываем заказ и остаёмся на связи по вашему вопросу.']].map(([n,t,d])=>`<article><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div></div></section>
  <section class="section container parts-section">${sectionHead('ПОДБОР ПОД ВАШУ ТЕХНИКУ', 'Нужная деталь.<br>Без лишних поисков.', 'Знаете артикул? Отлично.<br>Не знаете? Поможем разобраться.')}<div class="parts-grid">${['Двигатель','Трансмиссия','Тормозная система','Ходовая часть','Электрооборудование','Детали для ТО'].map((n,i)=>`<button class="part" data-contact="parts" data-category="${n}"><span class="part-num">0${i+1}</span><h3>${n}</h3>${arrow}</button>`).join('')}</div></section>
  ${contactBanner()}`;
}

function contactBanner() { return `<section class="container contact-banner"><p class="eyebrow">ЕСТЬ ЗАДАЧА? ДАВАЙТЕ ОБСУДИМ.</p><div><h2>Движение начинается<br>с одного звонка.</h2><a href="tel:+79200140062" class="round-arrow" aria-label="Позвонить в КОМ-АВТО">↗</a></div><a class="banner-phone" href="tel:+79200140062">${phone}</a><p>Или напишите нам в <a href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Telegram ↗</a></p></section>`; }

function detailContent(s) { return `<section class="detail-hero container"><a class="back-link" href="/">← На главную</a><p class="eyebrow"><span></span>${s.name.toUpperCase()}</p><h1>${s.title}</h1><p>${s.description}</p>${button(s.action,s.id)}</section><section class="container section detail-services">${sectionHead('ЧЕМ ПОМОЖЕМ','Решение под вашу задачу.')}<div class="parts-grid">${s.items.map((item,i)=>`<button class="part" data-contact="${s.id}" data-category="${item}"><span class="part-num">0${i+1}</span><h3>${item}</h3>${arrow}</button>`).join('')}</div><p class="detail-note">Возможность выполнения, стоимость и сроки согласовываются с менеджером по вашей задаче.</p></section>${contactBanner()}`; }

function contactsContent() { return `<section class="container section contact-page"><p class="eyebrow"><span></span>ДАВАЙТЕ ОСТАВАТЬСЯ НА СВЯЗИ</p><h1>Хорошее дело<br>начинается с разговора.</h1><div class="contact-columns"><div class="contact-box"><p class="eyebrow">ЗАПЧАСТИ И СЕРВИС</p><a class="contact-number" href="tel:+79200140062">${phone}</a><p>Подбор деталей и обсуждение ремонта</p><p class="eyebrow">ПЕРЕВОЗКИ</p><a class="contact-number" href="tel:+79202933359">+7 (920) 293-33-59</a><p>Дополнительный контакт: ${personal}</p></div><div class="contact-box"><p class="eyebrow">НАШ ОФИС</p><h2>Арзамас,<br>ул. Калинина, 58</h2><p>Офис 108 · 607220, Нижегородская область</p><a class="text-link" href="https://yandex.ru/maps/?text=Арзамас%20Калинина%2058" target="_blank" rel="noopener noreferrer">Построить маршрут ↗</a><p class="eyebrow">НАПИСАТЬ</p><a href="mailto:Kom-avto52@yandex.ru">Kom-avto52@yandex.ru</a><p><a href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Telegram ↗</a></p></div></div><p class="detail-note">Перед визитом уточните время работы и место проведения ремонта по телефону.</p></section>`; }

function privacyContent() { return `<section class="container section legal"><p class="eyebrow">ИНФОРМАЦИЯ О ПРОЕКТЕ</p><h1>Конфиденциальность</h1><p>Это демонстрационная версия нового сайта КОМ-АВТО для обсуждения дизайна. На сайте нет формы отправки персональных данных и не подключена аналитика.</p><p>Кнопки телефона и электронной почты открывают приложения на вашем устройстве. Ссылки на Telegram и карты ведут на внешние сервисы, где действуют их собственные условия обработки данных.</p><p>Перед публикацией здесь необходимо разместить политику обработки персональных данных с актуальными реквизитами оператора и описанием подключённых сервисов.</p><a class="text-link" href="/">Вернуться на главную ↗</a></section>`; }

document.querySelector('#app').innerHTML = `<a class="skip-link" href="#main">Перейти к содержимому</a><div class="topline"><div class="container"><span><i></i> Арзамас · Работаем с задачами по всей России</span><span>Запчасти. Сервис. Перевозки.</span></div></div><header class="header"><div class="container header-inner">${brand}<nav class="desktop-nav" aria-label="Главная навигация">${nav}</nav><div class="header-contact">${personal}<span>На связи по вашему вопросу</span></div><button class="menu-toggle" aria-label="Открыть меню" aria-expanded="false" aria-controls="mobile-nav">☰</button></div><nav id="mobile-nav" class="mobile-nav" aria-label="Мобильная навигация" hidden>${nav}${personal}</nav></header><main id="main">${home ? homeContent() : current ? detailContent(current) : path === '/contacts' ? contactsContent() : path === '/privacy' ? privacyContent() : `<section class="container section"><h1>Страница не найдена</h1><a class="button" href="/">На главную ↗</a></section>`}</main><footer class="footer"><div class="container"><div class="footer-top">${brand}<p>Когда техника в порядке,<br>бизнес идёт вперёд.</p><a href="#" class="back-top" aria-label="Вернуться наверх">↑</a></div><div class="footer-grid"><div><p class="footer-label">НАПРАВЛЕНИЯ</p><a href="/#directions">Автозапчасти</a><a href="/truckrepairs">Грузовой автосервис</a><a href="/cargotransportation">Перевозка грузов</a></div><div><p class="footer-label">КОНТАКТЫ</p><a href="tel:+79202933359">Перевозки: +7 (920) 293-33-59</a>${personal}<a href="mailto:Kom-avto52@yandex.ru">Kom-avto52@yandex.ru</a></div><div><p class="footer-label">ПРИЕЗЖАЙТЕ</p><a href="/contacts">Арзамас, ул. Калинина, 58<br>офис 108</a><a href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Мы в Telegram ↗</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} КОМ-АВТО</span><span>Концепция нового сайта · Версия для обсуждения</span><a href="/privacy">Конфиденциальность</a></div></div></footer><dialog class="contact-dialog" aria-labelledby="dialog-title"><button class="dialog-close" aria-label="Закрыть окно">×</button><p class="eyebrow">КОМ-АВТО · НА СВЯЗИ</p><h2 id="dialog-title">Обсудим вашу задачу</h2><p id="dialog-description"></p><a id="dialog-phone" class="button" href="tel:+79200140062">${phone} ↗</a><p id="dialog-extra"></p><a class="dialog-telegram" href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Написать в Telegram ↗</a><p class="dialog-note">Для обсуждения заказа позвоните или напишите нам.</p></dialog>`;

document.title = home ? 'КОМ-АВТО — ваш бизнес в движении' : `${current?.name || (path === '/contacts' ? 'Контакты' : path === '/privacy' ? 'Конфиденциальность' : 'Страница не найдена')} | КОМ-АВТО`;
const dialog = document.querySelector('dialog');
document.querySelectorAll('[data-contact]').forEach(b => b.addEventListener('click', () => {
  const s = services.find(s => s.id === b.dataset.contact);
  document.querySelector('#dialog-title').textContent = s.action;
  document.querySelector('#dialog-description').textContent = b.dataset.category ? `Расскажите менеджеру о задаче: ${b.dataset.category.toLowerCase()}.` : s.id === 'parts' ? 'Подготовьте артикул, VIN или описание нужной детали — поможем с подбором.' : s.id === 'cargo' ? 'Подготовьте маршрут, дату, вес и описание груза. Стоимость уточнит менеджер.' : 'Расскажите, какая техника нуждается в ремонте и что произошло.';
  const cargo = s.id === 'cargo';
  document.querySelector('#dialog-phone').href = cargo ? 'tel:+79202933359' : 'tel:+79200140062';
  document.querySelector('#dialog-phone').textContent = `${cargo ? '+7 (920) 293-33-59' : phone} ↗`;
  document.querySelector('#dialog-extra').innerHTML = cargo ? `Дополнительный контакт: ${personal}` : '';
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{ if(e.target===dialog && (e.clientX<dialog.getBoundingClientRect().left || e.clientX>dialog.getBoundingClientRect().right || e.clientY<dialog.getBoundingClientRect().top || e.clientY>dialog.getBoundingClientRect().bottom)) dialog.close(); });
const toggle = document.querySelector('.menu-toggle');
const mobile = document.querySelector('#mobile-nav');
toggle.addEventListener('click',()=>{ const open=toggle.getAttribute('aria-expanded')!=='true'; toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню'); mobile.hidden=!open; toggle.textContent=open?'×':'☰'; });
mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ mobile.hidden=true; toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','Открыть меню'); toggle.textContent='☰'; }));
document.addEventListener('keydown',e=>{if(e.key==='Escape' && !mobile.hidden) toggle.click();});

// GitHub Pages serves static files without a route fallback. Query routes keep
// direct links and reloads working when the project is hosted under /sait/.
if (base !== '/') {
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    const target = link.getAttribute('href');
    if (target.startsWith('//')) return;
    const [route, anchor] = target.split('#');
    link.href = base + (route === '/' ? '' : '?page=' + encodeURIComponent(route.slice(1))) + (anchor ? '#' + anchor : '');
  });
}

// Inline icons keep the interface independent of system symbol fonts.
const walker = document.createTreeWalker(document.querySelector('#app'), NodeFilter.SHOW_TEXT);
const iconNodes = [];
while (walker.nextNode()) if (/[↗⚙⇄]/u.test(walker.currentNode.textContent)) iconNodes.push(walker.currentNode);
for (const node of iconNodes) {
  const fragment = document.createDocumentFragment();
  for (const chunk of node.textContent.split(/([↗⚙⇄])/u)) {
    if (!/[↗⚙⇄]/u.test(chunk)) { fragment.append(document.createTextNode(chunk)); continue; }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24'); svg.setAttribute('aria-hidden', 'true'); svg.classList.add('inline-icon');
    svg.innerHTML = chunk === '⚙' ? '<path d="M9 3h6l1 4 4 1v6l-4 1-1 5H9l-1-5-4-1V8l4-1z"/><circle cx="12" cy="11.5" r="3"/>' : chunk === '⇄' ? '<path d="M3 8h17m-5-5 5 5-5 5M21 17H4m5-5-5 5 5 5"/>' : '<path d="M5 19 19 5M5 5h14v14"/>';
    fragment.append(svg);
  }
  node.replaceWith(fragment);
}

// Keep motion optional and stop work once the hero leaves the viewport.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const animatedSections = [...document.querySelectorAll('.section-head, .service-card, .steps article, .parts-section .part, .contact-banner, .manifesto-title')];
const revealObserver = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
  for (const entry of entries) if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    revealObserver.unobserve(entry.target);
  }
}, { threshold: 0.08 }) : null;
function updateMotion() {
  document.documentElement.classList.toggle('reveal-enabled', !motionPreference.matches && !!revealObserver);
  animatedSections.forEach(section => {
    section.classList.add('reveal');
    if (motionPreference.matches || !revealObserver) section.classList.add('is-visible');
    else if (!section.classList.contains('is-visible')) revealObserver.observe(section);
  });
}
updateMotion();
motionPreference.addEventListener('change', updateMotion);
const cinematicHero = document.querySelector('.cinematic-hero');
if (cinematicHero) {
  let heroInView = true;
  let ticking = false;
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {heroInView = entries[0].isIntersecting;}).observe(cinematicHero);
  window.addEventListener('scroll', () => {
    if (!ticking && heroInView && !motionPreference.matches && window.innerWidth > 760) {
      ticking = true;
      requestAnimationFrame(() => {
        cinematicHero.style.setProperty('--truck-shift', `${Math.min(window.scrollY * 0.12, 75)}px`);
        ticking = false;
      });
    }
  }, { passive: true });
}

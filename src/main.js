import './style.css';

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

function homeContent() {
  return `<section class="hero" aria-labelledby="hero-title">
    <img class="hero-image" src="${base}images/truck.webp" alt="Жёлтый грузовой тягач MAN" fetchpriority="high" width="1080" height="686">
    <div class="hero-shade"></div>
    <div class="container hero-content"><p class="eyebrow"><span></span>АРЗАМАС · НИЖЕГОРОДСКАЯ ОБЛАСТЬ</p>
      <h1 id="hero-title">Чтобы бизнес<br>не сбавлял <em>ход.</em></h1>
      <p class="hero-description">Запчасти, сервис и грузоперевозки.<br>Всё, что нужно вашей технике, — в КОМ-АВТО.</p>
      <div class="hero-actions"><a class="button" href="#directions">Найти решение ${arrow}</a><a class="hero-phone" href="tel:+79200140062"><span class="phone-circle">↗</span> Связаться с нами</a></div>
      <div class="hero-bottom"><span>ТЕХНИКА РАБОТАЕТ. БИЗНЕС ДВИЖЕТСЯ.</span><a href="#directions" aria-label="Перейти к направлениям">↓</a></div>
    </div><div class="hero-side">НАДЁЖНОСТЬ В КАЖДОЙ ДЕТАЛИ</div>
  </section>
  <div class="brands"><div class="container"><span>РАБОТАЕМ С МАРКАМИ</span><div>MAN</div><div>VOLVO</div><div>SCANIA</div><div>DAF</div><div>IVECO</div><div class="brand-small">Mercedes-Benz</div><div class="brand-small">Renault Trucks</div></div></div>
  <section class="section container" id="directions">${sectionHead('ТРИ НАПРАВЛЕНИЯ. ОДНА КОМАНДА.', 'Всё для вашего<br>движения.', 'Знаем, как важно быть в пути.<br>Поможем с техникой, запчастями и грузом.')}
    <div class="service-grid">${services.map(s => `<article class="service-card ${s.id}"><div class="card-top"><span>${s.number} / ${s.label.toUpperCase()}</span><span class="card-icon" aria-hidden="true">${s.icon}</span></div><h3>${s.title}</h3><p>${s.description}</p><p class="card-tags">${s.tags}</p>${s.id === 'parts' ? button(s.action, s.id, 'card-link') : `<a class="card-link" href="${s.path}">${s.action}${arrow}</a>`}</article>`).join('')}</div>
  </section>
  <section class="approach section" id="approach"><div class="container approach-grid"><div>${sectionHead('ПО ДЕЛУ. БЕЗ ЛИШНЕГО.', 'Вы занимаетесь<br>бизнесом.<br><span class="muted">Мы — техникой.</span>')}<p class="approach-description">Не нужно искать разных подрядчиков для каждой задачи. Расскажите, что нужно, — вместе найдём решение.</p><a class="text-link" href="/contacts">Познакомимся ближе ${arrow}</a></div><div class="steps">${[['01','Сначала — ваша задача','Уточняем модель техники, нужную деталь, характер ремонта или маршрут перевозки.'],['02','Затем — понятное решение','Обсуждаем варианты, стоимость и условия до начала работы.'],['03','Дальше — за дело','Согласовываем заказ и остаёмся на связи по вашему вопросу.']].map(([n,t,d])=>`<article><span>${n}</span><div><h3>${t}</h3><p>${d}</p></div></article>`).join('')}</div></div></section>
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

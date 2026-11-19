import './premium.css';

const base = import.meta.env.BASE_URL;
const page = (name) => base === '/' ? '/' + name : base + '?page=' + name;
const services = [
  { id: 'parts', title: 'Запчасти', text: 'Подбираем детали для двигателя, трансмиссии, ходовой и тормозной системы грузовых автомобилей.', action: 'Подобрать запчасть', phone: '+79200140062' },
  { id: 'service', title: 'Грузовой сервис', text: 'Проводим диагностику и ТО, ремонтируем двигатели, коробки передач и ходовую в Арзамасе.', action: 'Записаться в сервис', phone: '+79200140062', details: 'truckrepairs' },
  { id: 'cargo', title: 'Грузоперевозки', text: 'Подбираем транспорт и маршрут по России и СНГ, помогаем с документами и согласуем условия доставки.', action: 'Рассчитать перевозку', phone: '+79202933359', details: 'cargotransportation' },
];

document.querySelector('#app').innerHTML = `
  <a class="skip" href="#main">Перейти к содержанию</a>
  <header class="header" id="top">
    <div class="wrap header-inner">
      <a class="brand" href="${base}"><img src="${base}images/logo-white.png" alt="КОМ-АВТО" width="110" height="70"></a>
      <button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span aria-hidden="true"></span>Меню</button>
      <nav id="site-nav" aria-label="Основная навигация"><a href="#x-directions">Направления</a><a href="#contacts">Контакты</a></nav>
      <a class="header-phone" href="tel:+79200140062">+7 (920) 014-00-62</a>
    </div>
  </header>
  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <picture class="hero-photo">
        <source srcset="${base}images/hero-truck.webp" type="image/webp">
        <img src="${base}images/hero-truck.png" width="1424" height="800" alt="" fetchpriority="high">
      </picture>
      <div class="wrap hero-inner">
        <div class="hero-copy">
          <p class="hero-brand">КОМ-АВТО</p>
          <h1 id="hero-title">Ваш бизнес<br>в движении</h1>
          <p>Запчасти, грузовой сервис и грузоперевозки по России и СНГ.</p>
          <div class="actions">${services.map(({ id, action }, index) => `<a class="button ${index === 0 ? 'primary' : 'secondary'}" href="#${id}">${action}</a>`).join('')}</div>
        </div>
      </div>
    </section>
    <section class="wrap directions" id="x-directions" aria-labelledby="directions-title">
      <h2 id="directions-title">Наши направления</h2>
      <div class="services">${services.map((service) => `
        <article class="service" id="${service.id}" data-reveal>
          <h3>${service.title}</h3><p>${service.text}</p>
          <div class="service-links"><a href="tel:${service.phone}">${service.action}</a>${service.details ? `<a href="${page(service.details)}">Подробнее</a>` : ''}</div>
        </article>`).join('')}
      </div>
    </section>
    <section class="advantages" aria-labelledby="advantages-title">
      <div class="wrap" data-reveal>
        <h2 id="advantages-title">Как мы работаем</h2>
        <dl>
          <div><dt>Подбор по технике</dt><dd>Уточняем модель и узел, для которого нужна деталь.</dd></div>
          <div><dt>Сервис в Арзамасе</dt><dd>Обсуждаем симптомы и согласуем, когда привезти машину.</dd></div>
          <div><dt>Перевозка под задачу</dt><dd>Учитываем тип груза, маршрут и температурный режим.</dd></div>
        </dl>
      </div>
    </section>
    <section class="contact" id="contacts" aria-labelledby="contact-title">
      <div class="wrap contact-inner" data-reveal>
        <div><h2 id="contact-title">Обсудим вашу задачу</h2><p>Арзамас, ул. Калинина, 58, офис 108</p></div>
        <div class="contact-links">
          <a href="tel:+79200140062"><span>Запчасти и сервис</span> +7 (920) 014-00-62</a>
          <a href="tel:+79202933359"><span>Грузоперевозки</span> +7 (920) 293-33-59</a>
          <a href="https://t.me/Kom_Avto">Написать в Telegram</a>
          <a href="mailto:Kom-avto52@yandex.ru">Kom-avto52@yandex.ru</a>
          <a href="${page('contacts')}">Все контакты</a>
        </div>
      </div>
    </section>
  </main>
  <footer class="wrap footer"><span>© ${new Date().getFullYear()} КОМ-АВТО</span><a href="${page('privacy')}">Конфиденциальность</a><a href="#top">Наверх</a></footer>
`;

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const initialAnchor = document.getElementById(location.hash.slice(1));
if (initialAnchor) initialAnchor.scrollIntoView({ behavior: 'instant' });
const setMenu = (open) => menu.setAttribute('aria-expanded', String(open));
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') === 'false'));
nav.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || getComputedStyle(menu).display === 'none') return;
  setMenu(false);
  const section = document.querySelector(link.hash);
  section.tabIndex = -1;
  section.focus({ preventScroll: true });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || menu.getAttribute('aria-expanded') !== 'true') return;
  setMenu(false);
  menu.focus();
});

const motion = matchMedia('(prefers-reduced-motion: no-preference) and (min-width: 901px)');
const hero = document.querySelector('.hero');
let frame = 0;
window.addEventListener('scroll', () => {
  if (!motion.matches || frame) return;
  frame = requestAnimationFrame(() => {
    hero.style.setProperty('--photo-shift', Math.min(window.scrollY * 0.065, 38) + 'px');
    frame = 0;
  });
}, { passive: true });

if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach((item) => {
    item.classList.add('reveal');
    observer.observe(item);
  });
}

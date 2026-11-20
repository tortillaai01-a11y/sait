import "./premium.css";

const base = import.meta.env.BASE_URL || "/";
const asset = (name) => base + "images/" + name;
const page = (name) => base === "/" ? "/" + name : base + "?page=" + name;
const partsPhoto = "https://unsplash.com/photos/CcN73HBXNkU/download?force=true&w=1800";
const repairPhoto = "https://unsplash.com/photos/erWc6mrOq_I/download?force=true&w=1800";

document.getElementById("app").innerHTML = [
  '<a class="skip" href="#story">Перейти к содержанию</a>',
  '<div class="page-progress" aria-hidden="true"><span></span></div>',
  '<header class="masthead"><a class="wordmark" href="#intro" aria-label="КОМ-АВТО — к началу">',
  '<img src="' + asset("logo-white.png") + '" alt="" width="68" height="46"><span>КОМ-АВТО</span></a>',
  '<nav class="topnav" id="main-nav" aria-label="Разделы сайта">',
  '<a href="#parts">01 / ЗАПЧАСТИ</a><a href="#service">02 / СЕРВИС</a><a href="#cargo">03 / ПЕРЕВОЗКИ</a>',
  '<a class="contact-nav" href="#contacts">КОНТАКТЫ ↗</a></nav>',
  '<button class="nav-toggle" type="button" aria-controls="main-nav" aria-expanded="false" aria-label="Открыть меню"><span></span><span></span><span></span></button></header>',
  '<main id="story">',
  '<section class="chapter intro" id="intro" data-scene="intro" aria-labelledby="intro-title">',
  '<div class="stage intro-stage">',
  '<div class="intro-glow" aria-hidden="true"></div><div class="intro-lines" aria-hidden="true"></div>',
  '<div class="intro-emblem" aria-hidden="true"><span class="outer-orbit"></span><span class="inner-orbit"></span>',
  '<img src="' + asset("logo-white.png") + '" alt=""></div>',
  '<div class="scene-index"><span>КОМ-АВТО / 00</span><span>ТЕХНИКА. ТОЧНОСТЬ. ДВИЖЕНИЕ.</span></div>',
  '<div class="intro-copy"><p class="eyebrow">ТРИ НАПРАВЛЕНИЯ. ОДНА КОМПАНИЯ.</p>',
  '<h1 id="intro-title">ОТ ДЕТАЛИ<span class="h1-second">ДО ДОРОГИ<span class="dot">.</span></span></h1>',
  '<p>Запчасти, грузовой сервис и грузоперевозки. Всё начинается с надёжной техники.</p>',
  '<a class="text-action" href="#parts">СМОТРЕТЬ ИСТОРИЮ <span>↘</span></a></div>',
  '<div class="scroll-hint" aria-hidden="true">ПРОКРУТИТЕ ВНИЗ <span>↓</span></div>',
  '</div></section>',
  '<section class="chapter parts" id="parts" data-scene="parts" aria-labelledby="parts-title">',
  '<div class="stage photo-stage"><div class="scene-image parts-image">',
  '<img src="' + partsPhoto + '" alt="Детали и механизмы грузового двигателя" loading="lazy" decoding="async">',
  '</div><div class="scene-fallback gear-a" aria-hidden="true">⚙</div>',
  '<div class="photo-shade"></div><div class="scanline" aria-hidden="true"></div>',
  '<div class="scene-index"><span>КОМ-АВТО / 01</span><span>ТОЧНОСТЬ В КАЖДОЙ ДЕТАЛИ</span></div>',
  '<div class="scene-content"><p class="eyebrow">01 / ЗАПЧАСТИ</p>',
  '<h2 id="parts-title">ВСЁ НАЧИНАЕТСЯ<br><em>С ДЕТАЛИ.</em></h2>',
  '<p>Двигатель, трансмиссия, тормоза, ходовая. Подберём то, что нужно именно вашей машине.</p>',
  '<a class="scene-cta" href="tel:+79200140062">ПОДОБРАТЬ ЗАПЧАСТЬ <span>↗</span></a></div>',
  '<div class="chapter-meter"><span>01</span><div><i></i></div><span>03</span></div>',
  '</div></section>',
  '<section class="chapter service" id="service" data-scene="service" aria-labelledby="service-title">',
  '<div class="stage photo-stage"><div class="scene-image service-image">',
  '<img src="' + repairPhoto + '" alt="Механик проводит диагностику двигателя в мастерской" loading="lazy" decoding="async">',
  '</div><div class="service-sparks" aria-hidden="true"></div>',
  '<div class="photo-shade"></div><div class="scanline" aria-hidden="true"></div>',
  '<div class="scene-index"><span>КОМ-АВТО / 02</span><span>ТЕХНИКА ДОЛЖНА РАБОТАТЬ</span></div>',
  '<div class="scene-content"><p class="eyebrow">02 / ГРУЗОВОЙ СЕРВИС</p>',
  '<h2 id="service-title">ОТ ДИАГНОСТИКИ<br><em>ДО РЕШЕНИЯ.</em></h2>',
  '<p>Профессиональный подход к обслуживанию и ремонту грузовой техники в Арзамасе.</p>',
  '<a class="scene-cta" href="tel:+79200140062">ЗАПИСАТЬСЯ В СЕРВИС <span>↗</span></a>',
  '<a class="secondary-link" href="' + page("truckrepairs") + '">УЗНАТЬ О СЕРВИСЕ ↗</a></div>',
  '<div class="chapter-meter"><span>02</span><div><i></i></div><span>03</span></div>',
  '</div></section>',
  '<section class="chapter cargo" id="cargo" data-scene="cargo" aria-labelledby="cargo-title">',
  '<div class="stage photo-stage"><div class="scene-image cargo-image">',
  '<picture><source srcset="' + asset("hero-truck.webp") + '" type="image/webp">',
  '<img src="' + asset("hero-truck.png") + '" alt="Фура КОМ-АВТО движется навстречу камере по мокрой трассе на закате" loading="eager" fetchpriority="high" width="1424" height="800"></picture>',
  '</div><div class="cargo-light" aria-hidden="true"></div>',
  '<div class="photo-shade"></div><div class="scene-index"><span>КОМ-АВТО / 03</span><span>ДОРОГА ПРОДОЛЖАЕТСЯ</span></div>',
  '<div class="scene-content"><p class="eyebrow">03 / ГРУЗОПЕРЕВОЗКИ</p>',
  '<h2 id="cargo-title">ТЕХНИКА ГОТОВА.<br><em>ВРЕМЯ В ПУТЬ.</em></h2>',
  '<p>Грузоперевозки по России и СНГ. Подбираем транспорт и маршрут под вашу задачу.</p>',
  '<a class="scene-cta" href="tel:+79202933359">РАССЧИТАТЬ ПЕРЕВОЗКУ <span>↗</span></a>',
  '<a class="secondary-link" href="' + page("cargotransportation") + '">О ПЕРЕВОЗКАХ ↗</a></div>',
  '<div class="chapter-meter"><span>03</span><div><i></i></div><span>03</span></div>',
  '</div></section>',
  '<section class="final-section" id="contacts">',
  '<div class="final-mark"><img src="' + asset("logo-white.png") + '" alt="Оригинальный логотип КОМ-АВТО"></div>',
  '<p class="eyebrow">КОМ-АВТО / ВСЕГДА НА СВЯЗИ</p><h2>ЕСТЬ ЗАДАЧА?<br><em>ОБСУДИМ.</em></h2>',
  '<div class="final-grid"><a href="tel:+79200140062"><span>ЗАПЧАСТИ / СЕРВИС</span><strong>+7 (920) 014-00-62</strong><i>↗</i></a>',
  '<a href="tel:+79202933359"><span>ГРУЗОПЕРЕВОЗКИ</span><strong>+7 (920) 293-33-59</strong><i>↗</i></a>',
  '<a href="https://t.me/Kom_Avto"><span>TELEGRAM</span><strong>НАПИСАТЬ НАМ</strong><i>↗</i></a></div>',
  '<footer><span>© ' + new Date().getFullYear() + ' КОМ-АВТО</span><span>АРЗАМАС · РОССИЯ</span>',
  '<a href="' + page("contacts") + '">ВСЕ КОНТАКТЫ</a><a href="' + page("privacy") + '">КОНФИДЕНЦИАЛЬНОСТЬ</a></footer>',
  '</section></main>'
].join("");

const chapters = Array.from(document.querySelectorAll(".chapter"));
const progressBar = document.querySelector(".page-progress span");
const menu = document.querySelector(".nav-toggle");
const nav = document.querySelector(".topnav");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let ticking = false;

function clamp(value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}
function mapRange(value, start, end) {
  return clamp((value - start) / (end - start));
}
function render() {
  ticking = false;
  const viewHeight = window.innerHeight;
  const allScroll = Math.max(1, document.documentElement.scrollHeight - viewHeight);
  progressBar.style.transform = "scaleX(" + clamp(window.scrollY / allScroll) + ")";
  for (const chapter of chapters) {
    const rect = chapter.getBoundingClientRect();
    const travel = Math.max(1, rect.height - viewHeight);
    const progress = clamp(-rect.top / travel);
    const visible = rect.bottom > 0 && rect.top < viewHeight;
    chapter.style.setProperty("--p", String(progress));
    chapter.style.setProperty("--enter", String(mapRange(progress, 0.07, 0.39)));
    chapter.style.setProperty("--exit", String(mapRange(progress, 0.71, 0.97)));
    chapter.style.setProperty("--light", String(mapRange(progress, 0.13, 0.86)));
    chapter.classList.toggle("is-visible", visible);
    chapter.classList.toggle("is-active", rect.top < viewHeight * 0.45 && rect.bottom > viewHeight * 0.55);
  }
  const current = chapters.find(c => c.classList.contains("is-active"));
  if (current) {
    document.querySelectorAll(".topnav a[href^='#']").forEach(link => {
      const selected = link.getAttribute("href") === "#" + current.id;
      if (selected) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }
}
function requestRender() {
  if (!ticking) {
    ticking = true;
    window.requestAnimationFrame(render);
  }
}
window.addEventListener("scroll", requestRender, { passive: true });
window.addEventListener("resize", requestRender);
window.addEventListener("load", requestRender);
requestRender();

menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
  document.body.classList.toggle("menu-open", open);
});
nav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Открыть меню");
    document.body.classList.remove("menu-open");
  }
});
window.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    menu.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }
});
document.querySelectorAll(".scene-image img").forEach(img => {
  img.addEventListener("error", () => img.parentElement.classList.add("photo-unavailable"));
});
if (reduceMotion.matches) {
  document.documentElement.classList.add("reduce-motion");
}

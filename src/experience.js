import './experience.css';

const base = import.meta.env.BASE_URL;
const link = (route) => base === '/' ? route : `${base}?page=${route.replace(/^\//,'')}`;
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const chapters = [
  {eyebrow:'КОМ-АВТО / ТЕХНИКА ВАШЕГО БИЗНЕСА', title:'Большое<br>начинается<br><em>с деталей.</em>', description:'Запчасти. Сервис. Перевозки. <br>Одна команда, которая знает технику изнутри.', button:'Исследовать', word:'ДВИЖЕНИЕ', label:'Всё связано', detail:'01 / ИНЖЕНЕРИЯ ДВИЖЕНИЯ'},
  {eyebrow:'01 / ЗАПЧАСТИ ДЛЯ ГРУЗОВОЙ ТЕХНИКИ', title:'У каждой<br>детали —<br><em>своя сила.</em>', description:'От расходников до сложных узлов. <br>Подбираем по артикулу, VIN или вашей задаче.', button:'Подобрать запчасть', word:'ИЗНУТРИ', label:'Сила деталей', detail:'02 / ОТ ЦЕЛОГО К ДЕТАЛЯМ'},
  {eyebrow:'02 / ГРУЗОВОЙ АВТОСЕРВИС', title:'Вернуть<br>в рабочий<br><em>ритм.</em>', description:'Техническое обслуживание, ремонт и помощь <br>на дороге в Арзамасе и районе.', button:'Обсудить ремонт', word:'ТОЧНОСТЬ', label:'В рабочем ритме', detail:'03 / ВНИМАНИЕ К КАЖДОМУ УЗЛУ'},
  {eyebrow:'03 / ГРУЗОПЕРЕВОЗКИ', title:'Расстояния<br>становятся<br><em>маршрутами.</em>', description:'Подбираем транспорт и организуем перевозку. <br>Из Арзамаса — по России и СНГ.', button:'Запросить расчёт', word:'ДАЛЬШЕ', label:'Впереди — маршрут', detail:'04 / ОТ ЗАДАЧИ ДО ТОЧКИ НАЗНАЧЕНИЯ'},
];
const logo = `<a class="x-logo" href="${base}" aria-label="КОМ-АВТО — главная"><img src="${base}images/logo-dark.png" alt="КОМ-АВТО. Грузоперевозки · Запчасти · Ремонт" width="210" height="134"></a>`;

document.querySelector('#app').innerHTML = `<div class="x-site">
<a class="x-skip" href="#x-content">К содержимому</a>
<main>
<section class="x-story" aria-label="Запчасти, сервис и перевозки КОМ-АВТО">
 <div class="x-stage">
  <header class="x-header">${logo}<nav aria-label="Навигация"><a href="#x-directions">Направления</a><a href="${link('/contacts')}">Контакты ${arrow}</a></nav><a class="x-header-phone" href="tel:+79200140062">+7 (920) 014-00-62</a></header>
  <div class="x-ghost" aria-hidden="true">ДВИЖЕНИЕ</div>
  <div class="x-coordinates" aria-hidden="true">55°23′ N / 43°50′ E<br>АРЗАМАС, РОССИЯ</div>
  <div class="x-canvas-wrap"><img class="x-fallback" src="${base}images/truck.webp" alt="Грузовой тягач" width="1080" height="686"><canvas class="x-canvas" tabindex="0" role="img" aria-label="Интерактивная стилизованная 3D-модель грузовика. Вращайте перетаскиванием или стрелками влево и вправо."></canvas><span class="x-loading">СОБИРАЕМ ДВИЖЕНИЕ<span></span></span></div>
  <div class="x-chapter-copy" id="x-content"><p class="x-eyebrow" id="x-eyebrow">${chapters[0].eyebrow}</p><h1 id="x-title">${chapters[0].title}</h1><p class="x-description" id="x-description">${chapters[0].description}</p><button class="x-primary" id="x-action">Исследовать ${arrow}</button></div>
  <div class="x-part-note" aria-hidden="true"><span></span><p id="x-technical-label">ШАССИ / СИЛОВОЙ КАРКАС</p><small>СВЯЗАНО В ОДНУ СИСТЕМУ</small></div>
  <button class="x-motion-toggle" aria-pressed="false" aria-label="Остановить автоматическое движение">Ⅱ ПАУЗА</button><div class="x-orbit-label"><span class="x-status-dot"></span><span id="x-interaction-hint">ВРАЩАЙТЕ МОДЕЛЬ МЫШЬЮ ИЛИ КАСАНИЕМ</span></div>
  <div class="x-route-note" hidden><span>АРЗАМАС</span><span>РОССИЯ И СНГ</span><small>СХЕМА МАРШРУТА · НЕ ТРЕКИНГ</small></div>
  <div class="x-chapter-footer"><div class="x-scroll"><span class="x-scroll-icon" aria-hidden="true"></span><span>ЛИСТАЙТЕ —<br>РАССКАЖЕМ ЧЕРЕЗ ДВИЖЕНИЕ</span></div><nav class="x-chapters" aria-label="Сцены"><button aria-label="Сцена 1: грузовик" aria-current="step" data-chapter="0"><span>00</span>Всё связано</button><button aria-label="Сцена 2: запчасти" data-chapter="1"><span>01</span>Детали</button><button aria-label="Сцена 3: сервис" data-chapter="2"><span>02</span>Сервис</button><button aria-label="Сцена 4: перевозки" data-chapter="3"><span>03</span>Маршруты</button></nav><span class="x-scene-number" aria-hidden="true">00<span>/03</span></span></div>
  <div class="x-progress" aria-hidden="true"><span></span></div>
 </div>
</section>
<section class="x-directions" id="x-directions"><div class="x-section-top"><p class="x-eyebrow">ПРАКТИЧЕСКАЯ СТОРОНА ДВИЖЕНИЯ</p><span>ТРИ НАПРАВЛЕНИЯ / ОДНА КОМАНДА</span></div><h2>Теперь —<br><em>к вашей задаче.</em></h2><div class="x-direction-list">${[
 ['01','Запчасти','Нужная деталь. Правильный подбор.','parts'],['02','Грузовой сервис','Обслуживание, ремонт, помощь в пути.','service'],['03','Перевозки','Транспорт и маршрут для вашего груза.','cargo']
].map(([n,t,d,id])=>`<button class="x-direction" data-contact="${id}"><span class="x-direction-number">${n}</span><span><strong>${t}</strong><small>${d}</small></span><span class="x-direction-arrow">${arrow}</span></button>`).join('')}</div></section>
<section class="x-contact"><div><p class="x-eyebrow">НА СВЯЗИ. ПО ДЕЛУ.</p><h2>Что будем<br><em>двигать?</em></h2></div><div class="x-contact-info"><a class="x-big-phone" href="tel:+79200140062">+7 (920) 014-00-62 ${arrow}</a><p>Запчасти, сервис и дополнительный контакт по перевозкам</p><a href="tel:+79202933359">Перевозки: +7 (920) 293-33-59</a><a href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Написать в Telegram ${arrow}</a><a href="mailto:Kom-avto52@yandex.ru">Kom-avto52@yandex.ru</a></div></section>
<footer class="x-footer">${logo}<span>Арзамас, ул. Калинина, 58, офис 108</span><div><a href="${link('/privacy')}">Конфиденциальность</a><small>Новая концепция · Для обсуждения</small></div></footer>
</main><dialog class="x-dialog" aria-labelledby="x-dialog-title"><button class="x-close" aria-label="Закрыть окно">×</button><p class="x-eyebrow">КОМ-АВТО / ВАША ЗАДАЧА</p><h2 id="x-dialog-title">Давайте обсудим</h2><p id="x-dialog-description"></p><a class="x-primary" id="x-dialog-phone" href="tel:+79200140062">+7 (920) 014-00-62 ${arrow}</a><p id="x-dialog-extra"></p><a class="x-telegram" href="https://t.me/Kom_Avto" target="_blank" rel="noopener noreferrer">Написать в Telegram ${arrow}</a></dialog></div>`;

document.title = 'КОМ-АВТО — большое начинается с деталей';
const story = document.querySelector('.x-story');
const stage = document.querySelector('.x-stage');
const canvas = document.querySelector('.x-canvas');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let motionPaused=reduce.matches;
const motionToggle=document.querySelector('.x-motion-toggle');
function updateMotionToggle(){motionToggle.setAttribute('aria-pressed',String(motionPaused));motionToggle.setAttribute('aria-label',motionPaused?'Включить автоматическое движение':'Остановить автоматическое движение');motionToggle.textContent=motionPaused?'▷ ДВИЖЕНИЕ':'Ⅱ ПАУЗА';}
updateMotionToggle();
motionToggle.addEventListener('click',()=>{motionPaused=!motionPaused;scene?.setReducedMotion(motionPaused);updateMotionToggle();});
let active = 0;
let scene;
let progress = 0;
let destroyed = false;
const sceneButtons = [...document.querySelectorAll('[data-chapter]')];
function goToChapter(index) {
 const top = story.offsetTop + (story.offsetHeight - stage.offsetHeight) * (index / 3);
 scrollTo({top, behavior:reduce.matches ? 'instant':'smooth'});
}
function showChapter(index) {
 if(active === index) return;
 active = index;
 const chapter=chapters[index];
 document.querySelector('#x-eyebrow').textContent=chapter.eyebrow;
 document.querySelector('#x-title').innerHTML=chapter.title;
 document.querySelector('#x-description').innerHTML=chapter.description;
 document.querySelector('#x-action').innerHTML=chapter.button+' '+arrow;
 document.querySelector('.x-ghost').textContent=chapter.word;
 document.querySelector('.x-scene-number').innerHTML=`0${index}<span>/03</span>`;
 document.querySelector('#x-technical-label').textContent=['ШАССИ / СИЛОВОЙ КАРКАС','ДВИГАТЕЛЬ / КАБИНА / ХОДОВАЯ','КОЛЕСО / ТОЧКА КОНТАКТА','МАРШРУТ / ОТ ТОЧКИ К ТОЧКЕ'][index];
 document.querySelector('.x-route-note').hidden=index!==3;
 document.querySelector('.x-part-note').hidden=index===3;
 stage.dataset.chapter=String(index);
 sceneButtons.forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
}
let pending = false;
function updateScroll() {
 pending=false;
 if(destroyed)return;
 const distance=story.offsetHeight-stage.offsetHeight;
 progress=distance>0?Math.max(0,Math.min(1,(scrollY-story.offsetTop)/distance)):0;
 showChapter(Math.min(3,Math.floor(progress*3+0.48)));
 document.querySelector('.x-progress span').style.transform=`scaleX(${progress})`;
 scene?.setProgress(progress);
}
window.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(updateScroll);}},{passive:true});
window.addEventListener('resize',updateScroll);
sceneButtons.forEach(button=>button.addEventListener('click',()=>goToChapter(Number(button.dataset.chapter))));
const dialog=document.querySelector('.x-dialog');
function contact(id){
 const cargo=id==='cargo';
 document.querySelector('#x-dialog-title').textContent=id==='parts'?'Подберём нужную деталь':cargo?'Обсудим ваш маршрут':'Вернём технику в работу';
 document.querySelector('#x-dialog-description').textContent=id==='parts'?'Подготовьте артикул, VIN или описание детали. Менеджер поможет с подбором.':cargo?'Расскажите, откуда и куда нужно доставить груз, его вес и желаемую дату. Стоимость уточнит менеджер.':'Расскажите, какая техника нуждается в ремонте и что произошло.';
 const phone=document.querySelector('#x-dialog-phone');phone.href=cargo?'tel:+79202933359':'tel:+79200140062';phone.innerHTML=(cargo?'+7 (920) 293-33-59':'+7 (920) 014-00-62')+arrow;
 document.querySelector('#x-dialog-extra').innerHTML=cargo?'Дополнительный контакт: <a href="tel:+79200140062">+7 (920) 014-00-62</a>':'';
 dialog.showModal();
}
 document.querySelector('#x-action').addEventListener('click',()=>active===0?goToChapter(1):contact(['','parts','service','cargo'][active]));
 document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>contact(button.dataset.contact)));
 document.querySelector('.x-close').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
async function initializeScene() {
try {
 const { createTruckScene } = await import('./experience/scene.js');
 if (destroyed) return;
 scene=createTruckScene(canvas,{reducedMotion:motionPaused});
 document.querySelector('.x-canvas-wrap').classList.add('is-ready');
 document.querySelector('.x-loading').remove();
 reduce.addEventListener('change',e=>{motionPaused=e.matches;scene.setReducedMotion(motionPaused);updateMotionToggle();});
 updateScroll();
} catch(error) {
 canvas.hidden=true;
 document.querySelector('.x-loading').remove();
 document.querySelector('#x-interaction-hint').textContent='3D НЕДОСТУПНО НА ЭТОМ УСТРОЙСТВЕ · НАПРАВЛЕНИЯ И КОНТАКТЫ РАБОТАЮТ';
 document.querySelector('.x-canvas-wrap').classList.add('is-fallback');
 console.info('3D unavailable; static fallback enabled.');
}
}
initializeScene();
if (['#x-directions', '#directions', '#approach'].includes(location.hash)) {
 requestAnimationFrame(()=>document.querySelector('#x-directions').scrollIntoView({behavior:'instant'}));
}
window.addEventListener('pagehide',event=>{if(!event.persisted){destroyed=true;scene?.dispose();}});
window.addEventListener('pageshow',event=>{if(event.persisted)updateScroll();});

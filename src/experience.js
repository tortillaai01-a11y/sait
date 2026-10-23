import './experience.css';
import { chapterPositions, getStoryState } from './experience/story-state.js';

const base = import.meta.env.BASE_URL;
const link = (route) => base === '/' ? route : `${base}?page=${route.replace(/^\//,'')}`;
const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const chapters = [
  {eyebrow:'01 / АВТОЗАПЧАСТИ', title:'Всё начинается<br><em>с нужной<br>детали.</em>', description:'Знаем, что приводит вашу технику в движение. <br>Подберём запчасти по артикулу, VIN или задаче.', button:'Подобрать запчасть', word:'ДЕТАЛИ', label:'Запчасти'},
  {eyebrow:'02 / ГРУЗОВОЙ АВТОСЕРВИС', title:'Каждый узел.<br>На своём<br><em>месте.</em>', description:'От отдельных деталей — к работающей машине. <br>Ремонт и обслуживание в Арзамасе и районе.', button:'Обсудить ремонт', word:'СОБИРАЕМ', label:'Ремонт'},
  {eyebrow:'03 / ГРУЗОПЕРЕВОЗКИ', title:'Машина готова.<br><em>Впереди —<br>ваш маршрут.</em>', description:'Техника в работе. Груз в пути. <br>Организуем перевозку по России и СНГ.', button:'Запросить расчёт', word:'В РЕЙС', label:'Перевозки'},
];
const logo = `<a class="x-logo" href="${base}" aria-label="КОМ-АВТО — главная"><img src="${base}images/logo-dark.png" alt="КОМ-АВТО. Грузоперевозки · Запчасти · Ремонт" width="210" height="134"></a>`;

document.querySelector('#app').innerHTML = `<div class="x-site">
<a class="x-skip" href="#x-content">К содержимому</a>
<main>
<section class="x-story" aria-label="Запчасти, сервис и перевозки КОМ-АВТО">
 <div class="x-stage">
  <header class="x-header">${logo}<nav aria-label="Навигация"><a href="#x-directions">Направления</a><a href="${link('/contacts')}">Контакты ${arrow}</a></nav><a class="x-header-phone" href="tel:+79200140062">+7 (920) 014-00-62</a></header>
  <div class="x-ghost" aria-hidden="true">ДЕТАЛИ</div>
  <div class="x-coordinates" aria-hidden="true">55°23′ N / 43°50′ E<br>АРЗАМАС, РОССИЯ</div>
  <div class="x-canvas-wrap"><img class="x-fallback" src="${base}images/truck.webp" alt="Грузовой тягач" width="1080" height="686"><canvas class="x-canvas" tabindex="0" role="img" aria-label="Интерактивная стилизованная 3D-модель грузовика. Вращайте перетаскиванием или стрелками влево и вправо."></canvas><span class="x-loading">СОБИРАЕМ ДВИЖЕНИЕ<span></span></span></div>
  <div class="x-chapter-copy" id="x-content"><p class="x-eyebrow" id="x-eyebrow">${chapters[0].eyebrow}</p><h1 id="x-title">${chapters[0].title}</h1><p class="x-description" id="x-description">${chapters[0].description}</p><button class="x-primary" id="x-action">${chapters[0].button} ${arrow}</button></div>
  <div class="x-part-note" aria-hidden="true"><span></span><p id="x-technical-label">КАБИНА / ДВИГАТЕЛЬ / ХОДОВАЯ</p><small>КАЖДАЯ ДЕТАЛЬ ИМЕЕТ ЗНАЧЕНИЕ</small></div>
  <button class="x-motion-toggle" aria-pressed="false" aria-label="Остановить автоматическое движение">Ⅱ ПАУЗА</button><div class="x-orbit-label"><span class="x-status-dot"></span><span id="x-interaction-hint">ВРАЩАЙТЕ МОДЕЛЬ МЫШЬЮ ИЛИ КАСАНИЕМ</span></div>
  <div class="x-route-note" hidden><span>ГОТОВА К РЕЙСУ</span><span>РОССИЯ И СНГ</span><small>ИЛЛЮСТРАЦИЯ ПЕРЕВОЗКИ · НЕ ТРЕКИНГ</small></div>
  <div class="x-chapter-footer"><div class="x-scroll"><span class="x-scroll-icon" aria-hidden="true"></span><span>ПРОКРУТИТЕ —<br>МАШИНА СОБЕРЁТСЯ И ОТПРАВИТСЯ В РЕЙС</span></div><nav class="x-chapters" aria-label="Сцены">${chapters.map((chapter,index)=>`<button aria-label="Сцена ${index+1}: ${chapter.label}" ${index===0?'aria-current="step"':''} data-chapter="${index}"><span>0${index+1}</span>${chapter.label}</button>`).join('')}</nav><span class="x-scene-number" aria-hidden="true">01<span>/03</span></span></div>
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
const sceneButtons = [...document.querySelectorAll('.x-chapters button')];
function goToChapter(index) {
 const top = story.offsetTop + (story.offsetHeight - stage.offsetHeight) * chapterPositions[index];
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
 document.querySelector('.x-scene-number').innerHTML=`0${index+1}<span>/03</span>`;
 document.querySelector('#x-technical-label').textContent=['КАБИНА / ДВИГАТЕЛЬ / ХОДОВАЯ','СОБИРАЕМ В ОДНУ СИСТЕМУ','ГОТОВАЯ МАШИНА / НОВЫЙ МАРШРУТ'][index];
 document.querySelector('.x-route-note').hidden=index!==2;
 document.querySelector('.x-part-note').hidden=index===2;
 stage.dataset.chapter=String(index);
 sceneButtons.forEach((button,i)=>{if(i===index)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
}
let pending = false;
function updateScroll() {
 pending=false;
 if(destroyed)return;
 const distance=story.offsetHeight-stage.offsetHeight;
 progress=distance>0?Math.max(0,Math.min(1,(scrollY-story.offsetTop)/distance)):0;
 showChapter(getStoryState(progress).chapter);
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
 document.querySelector('#x-action').addEventListener('click',()=>contact(['parts','service','cargo'][active]));
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

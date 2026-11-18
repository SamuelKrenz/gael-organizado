// GAEL — Aplicação educacional (JavaScript sem dependências)
(()=>{'use strict';

// ============================================================
// 01. Seletores e conteúdo educacional
// ============================================================
const $=s=>document.querySelector(s);const app=$('#app');const ABC='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');const vowels='AEIOU'.split('');
const wordBank=[['BOLA','⚽',['BO','LA']],['CASA','🏠',['CA','SA']],['GATO','🐱',['GA','TO']],['PATO','🦆',['PA','TO']],['SAPO','🐸',['SA','PO']],['BOLO','🎂',['BO','LO']],['MALA','🧳',['MA','LA']],['FADA','🧚',['FA','DA']],['LUA','🌙',['LU','A']],['UVA','🍇',['U','VA']],['RATO','🐭',['RA','TO']],['VACA','🐮',['VA','CA']],['DADO','🎲',['DA','DO']],['FOCA','🦭',['FO','CA']],['MOTO','🏍️',['MO','TO']],['PIPA','🪁',['PI','PA']],['CAMA','🛏️',['CA','MA']],['BOTA','🥾',['BO','TA']],['GALO','🐓',['GA','LO']],['PENA','🪶',['PE','NA']],['LATA','🥫',['LA','TA']],['SOL','☀️',['SOL']],['PÉ','🦶',['PÉ']],['BANANA','🍌',['BA','NA','NA']],['JANELA','🪟',['JA','NE','LA']],['CAVALO','🐴',['CA','VA','LO']],['TOMATE','🍅',['TO','MA','TE']],['BORBOLETA','🦋',['BOR','BO','LE','TA']]];
const families=['B','C','D','F','G','J','L','M','N','P','R','S','T','V','Z'];const extraFamilies={'X':['XA','XE','XI','XO','XU'],'BR':['BRA','BRE','BRI','BRO','BRU'],'CR':['CRA','CRE','CRI','CRO','CRU'],'DR':['DRA','DRE','DRI','DRO','DRU'],'FR':['FRA','FRE','FRI','FRO','FRU'],'GR':['GRA','GRE','GRI','GRO','GRU'],'PR':['PRA','PRE','PRI','PRO','PRU'],'TR':['TRA','TRE','TRI','TRO','TRU'],'BL':['BLA','BLE','BLI','BLO','BLU'],'CL':['CLA','CLE','CLI','CLO','CLU'],'FL':['FLA','FLE','FLI','FLO','FLU'],'GL':['GLA','GLE','GLI','GLO','GLU'],'PL':['PLA','PLE','PLI','PLO','PLU'],'CH':['CHA','CHE','CHI','CHO','CHU'],'LH':['LHA','LHE','LHI','LHO','LHU'],'NH':['NHA','NHE','NHI','NHO','NHU'],'QU':['QUA','QUE','QUI','QUO'],'GU':['GUA','GUE','GUI'],'Ç':['ÇA','ÇO','ÇU']};
const rhymeBank=[['GATO','PATO','BOLA','CASA'],['BOLA','MOLA','PATO','SAPO'],['PÃO','MÃO','GATO','UVA'],['FADA','NADA','MALA','FOCA'],['LUA','RUA','CAMA','BOLO'],['ANEL','PAPEL','MESA','VACA'],['SAPATO','GATO','CASA','UVA'],['JANELA','PANELA','PIPA','MOTO']];
const games=[{id:'hearletter',t:'Ouça e escolha a letra',d:'Escute primeiro, depois escolha',e:'🔊',cat:'Letras'},{id:'initial',t:'Letra inicial',d:'Descubra como a palavra começa',e:'🍎',cat:'Letras'},{id:'sequence',t:'Trilha do alfabeto',d:'Complete a sequência',e:'🚂',cat:'Letras'},{id:'hearsyll',t:'Que sílaba você ouviu?',d:'Reconheça sílabas pelo som',e:'👂',cat:'Sílabas'},{id:'syllbuild',t:'Junte as sílabas',d:'Monte palavras em pedaços',e:'🧩',cat:'Sílabas'},{id:'picture',t:'Imagem e palavra',d:'Encontre o nome do desenho',e:'🖼️',cat:'Palavras'},{id:'missing',t:'Complete a palavra',d:'Descubra a letra que falta',e:'🔎',cat:'Palavras'},{id:'build',t:'Monte com letras',d:'Escreva usando as peças',e:'🏗️',cat:'Escrita'},{id:'listenword',t:'Ouça e encontre',d:'Escute o nome e escolha o desenho',e:'🎧',cat:'Escuta'},{id:'memory',t:'Memória: imagem e palavra',d:'Combine o desenho com seu nome',e:'🃏',cat:'Memória'},{id:'hangman',t:'Palavra secreta',d:'Descubra letras com uma dica visual, como na forca adaptada',e:'🔐',cat:'Palavras'},{id:'countsyll',t:'Quantos pedacinhos?',d:'Conte as sílabas da palavra',e:'👏',cat:'Sílabas'},{id:'rhyme',t:'Palavras que rimam',d:'Encontre palavras com finais parecidos',e:'🎵',cat:'Sons'}];

const memoryModes = {
  memory: { title:'Desenho e palavra', rule:'Vire duas cartas e encontre o desenho e a palavra que o nomeia.' },
  memoryVowels: { title:'Pares de vogais', rule:'Encontre a mesma vogal em maiúscula e minúscula, como A e a.' },
  memoryInitial: { title:'Desenho e letra inicial', rule:'Vire duas cartas e combine o desenho com a primeira letra do seu nome.' }
};
const newGames = [
  {id:'memoryVowels', t:'Memória das vogais', d:'Combine maiúsculas e minúsculas', e:'🔠'},
  {id:'memoryInitial', t:'Memória da letra inicial', d:'Combine a figura com sua primeira letra', e:'🃏'},
  {id:'firstSyll', t:'Primeira sílaba', d:'Descubra como começa a palavra', e:'🧩'},
  {id:'lastSyll', t:'Última sílaba', d:'Complete o final da palavra', e:'🔎'},
  {id:'wordQuiz', t:'Quiz das palavras', d:'Leia pistas e veja quantas acertou de primeira', e:'💡'},
  {id:'lastLetter', t:'Última letra', d:'Escolha a letra que completa o final', e:'✏️'},
  {id:'spellQuiz', t:'Quiz da escrita', d:'Escolha a palavra escrita corretamente', e:'📝'}
];
games.push(...newGames);
const quizGames = new Set(['wordQuiz','spellQuiz']);
const isMemory = id => Object.hasOwn(memoryModes,id);
const wordQuiz = [
  ['Qual palavra dá nome a uma fruta?','UVA','MALA','PIPA'],
  ['O que usamos para levar roupas em uma viagem?','MALA','BOLO','BOLA'],
  ['Qual animal mia?','GATO','PATO','FOCA'],
  ['O que pode voar preso a uma linha?','PIPA','LATA','UVA'],
  ['O que abre para entrar luz na casa?','JANELA','BOTA','CAMA'],
  ['Qual animal nada e faz quá-quá?','PATO','GATO','CAVALO'],
  ['Em que você pode se deitar para dormir?','CAMA','LATA','MALA']
];

// ============================================================
// 02. Organização dos quatro módulos
// ============================================================
const modules=[
{id:'letras',e:'🔤',t:'Módulo 1 — Mundo das letras',d:'Conheça o alfabeto, escute e reconheça letras.',color:'#e8f2ff',refs:['alphabet'],games:['hearletter','initial','sequence','memoryVowels','memoryInitial']},
{id:'silabas',e:'🧩',t:'Módulo 2 — Mundo das sílabas',d:'Explore famílias silábicas, ouça e forme palavras.',color:'#fff0d7',refs:['syllables'],games:['hearsyll','syllbuild','countsyll','firstSyll','lastSyll']},
{id:'palavras',e:'🍎',t:'Módulo 3 — Mundo das palavras',d:'Descubra imagens, palavras, rimas e sons.',color:'#fceaf1',refs:[],games:['picture','listenword','memory','rhyme','wordQuiz']},
{id:'escrita',e:'✏️',t:'Módulo 4 — Mundo da escrita',d:'Complete, construa e descubra palavras.',color:'#e7f3e7',refs:[],games:['missing','build','hangman','lastLetter','spellQuiz']}];
const gameModule=id=>modules.find(m=>m.games.includes(id));

// ============================================================
// 03. Preferências e progresso local
// ============================================================
let settings={contrast:false,quiet:true,rate:.78,volume:.9,effects:false,list:false};let saved={stars:0,done:{},missions:{},checkpoints:{}};try{saved={...saved,...JSON.parse(localStorage.getItem('gael-v3')||'{}')};settings={...settings,...JSON.parse(localStorage.getItem('gael-settings-v3')||'{}')}}catch{};
saved.done ||= {};
saved.missions ||= {};
saved.checkpoints ||= {};
let activeMission=null, activePlace=null, lastPractice=null;
const previousPracticeDecks=new Map();
let activityGroup=null;
let currentModule=null;let page='home',game=null,round=0,deck=[],locked=false,selected=[],used=[],quizScore=0,quizMissed=false,refTab='alphabet',refLetter='A',refFamily='B',audioNotice='';

// ============================================================
// 04. Utilitários e persistência
// ============================================================
const persist=()=>{try{localStorage.setItem('gael-v3',JSON.stringify(saved));localStorage.setItem('gael-settings-v3',JSON.stringify(settings))}catch{}};
const shuffle=a=>{a=[...a];for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const letterName={A:'a',B:'bê',C:'cê',D:'dê',E:'é',F:'éfe',G:'gê',H:'agá',I:'i',J:'jóta',K:'cá',L:'éle',M:'ême',N:'êne',O:'ó',P:'pê',Q:'quê',R:'érre',S:'ésse',T:'tê',U:'u',V:'vê',W:'dáblio',X:'xis',Y:'ípsilon',Z:'zê'};

// ============================================================
// 05. Voz e acessibilidade auditiva
// ============================================================
function speak(t){if(!('speechSynthesis' in window)){audioNotice='Este navegador não oferece voz. Tente Chrome ou Edge.';notice(audioNotice);return}window.speechSynthesis.cancel();let utter=new SpeechSynthesisUtterance(t);utter.lang='pt-BR';utter.rate=settings.rate;utter.volume=settings.volume;const voices=window.speechSynthesis.getVoices();let br=voices.find(v=>v.lang.toLowerCase()==='pt-br');if(br)utter.voice=br;utter.onerror=e=>{if(!['canceled','interrupted'].includes(e.error))notice('O áudio não tocou. Confira se há uma voz em português nas configurações do aparelho.')};window.speechSynthesis.speak(utter)}
function notice(t){let f=$('#feedback');if(f){f.textContent=t;f.className='feedback retry'}else $('#live').textContent=t}
function sayLetter(l){speak(letterName[l]||l)}
const btnAudio=(text='Ouvir novamente')=>`<button class="sound" id="playAudio" aria-label="${text}">🔊 ${text}</button>`;
function bindAudio(f){const b=$('#playAudio');if(b)b.onclick=f}

// ============================================================
// 06. Navegação entre telas
// ============================================================
const completed=id=>saved.missions[id]===true;
const placeAvailable=index=>index===0||completed(villagePlaces[index-1].missions[0].id);
const missionAvailable=(place,index)=>placeAvailable(villagePlaces.indexOf(place)) &&
  (index===0||completed(place.missions[index-1].id));

function focusTitle() {
  const title=app.querySelector('h1');
  if(title){
    title.tabIndex=-1;
    title.focus({preventScroll:true});
    window.scrollTo(0,0);
  }
}
function nextMission() {
  // Prioriza a descoberta de novos lugares. As missões extras ficam no mapa.
  for(const place of villagePlaces){
    const mission=place.missions[0];
    if(!completed(mission.id))return {place,mission};
  }
  for(const place of villagePlaces){
    const mission=place.missions.find(item=>!completed(item.id));
    if(mission)return {place,mission};
  }
  return null;
}
function enterMission(place,mission) {
  if(!missionAvailable(place,place.missions.indexOf(mission)))return;
  activePlace=place;
  start(mission.game,mission);
}
function goHome(shouldFocus=true) {
  page='home';
  game=null;
  activeMission=null;
  activePlace=null;
  currentModule=null;
  lastPractice=false;
  activityGroup=null;
  window.speechSynthesis?.cancel();
  const next=nextMission();
  const total=villagePlaces.flatMap(place=>place.missions).length;
  const count=villagePlaces.flatMap(place=>place.missions).filter(m=>completed(m.id)).length;
  const started=count>0||Object.keys(saved.checkpoints).some(id=>saved.checkpoints[id]>0);
  app.innerHTML=`<section class="village-intro">
    <div><h1>Vila do GAEL</h1><p>Complete missões e descubra novos lugares.</p></div>
    <nav class="village-links" aria-label="Outras atividades">
      <button class="btn compact" id="practice">Modo prática</button>
      <button class="btn compact" id="librarySounds">Biblioteca de Sons</button>
    </nav>
  </section>
  <nav class="activity-shortcuts" aria-label="Jogos rápidos">
    <button class="btn" id="memoryShortcut"><span aria-hidden="true">🃏</span> Jogos de memória</button>
    <button class="btn" id="quizShortcut"><span aria-hidden="true">💡</span> Quizzes</button>
  </nav>
  <section class="village-map" aria-label="Mapa da vila" ${settings.list?'hidden':''}>
    <img class="village-landscape" src="assets/vila.webp" width="1536" height="646" alt="">
    ${villagePlaces.filter(place=>place.art).map((place,i)=>{
      const open=placeAvailable(i);
      const state=completed(place.missions[0].id)?'✓':open?'▶':'🔒';
      const style=`--x:${place.x}%;--y:${place.y}%;--accent:${place.color}`;
      return open
        ? `<button class="map-pin" style="${style}" data-visit="${place.id}" aria-label="Visitar ${place.name}"><span class="pin-symbol" aria-hidden="true">${state}</span><span class="pin-label">${place.name}</span></button>`
        : `<span class="map-pin is-locked" style="${style}" aria-hidden="true"><span class="pin-symbol">${state}</span><span class="pin-label">A descobrir</span></span>`;
    }).join('')}
  </section>
  <div class="village-toolbar">
    <div class="mission-meter">
      <progress aria-label="Missões concluídas" value="${count}" max="${total}"></progress>
      <p><strong>${count} de ${total}</strong> missões concluídas</p>
    </div>
    <button class="btn compact" id="toggleMap" aria-pressed="${!settings.list}">${settings.list?'Mostrar mapa':'Ocultar mapa'}</button>
  </div>
  <div class="places-heading">
    <h2 class="sectionTitle" id="placesTitle" tabindex="-1">Lugares da vila</h2>
    <button class="btn primary" id="continueVillage">${!started?'Começar aventura':next?'Continuar missão':'Revisitar a vila'} →</button>
  </div>
  <div class="place-grid village-cards">${villagePlaces.map((place,i)=>{
    const open=placeAvailable(i);
    const done=place.missions.filter(m=>completed(m.id)).length;
    return `<article class="place-card ${open?'':'is-locked'}" style="--accent:${place.color}">
      ${placeArtwork(place)}
      <div class="place-copy">
        <h3>${place.name}</h3>
        <p>${open?`${done} de ${place.missions.length} missões concluídas`:`Abre após a primeira missão em ${villagePlaces[i-1].name}.`}</p>
        ${open?`<button class="btn compact" data-visit="${place.id}" aria-label="Ver missões em ${place.name}">Ver missões →</button>`:'<span class="place-lock"><span aria-hidden="true">🔒</span> Bloqueado</span>'}
      </div>
    </article>`;
  }).join('')}</div>`;
  $('#toggleMap').onclick=()=>{
    settings.list=!settings.list;
    persist();
    goHome(false);
    $('#toggleMap').focus();
  };
  $('#continueVillage').onclick=()=>next?enterMission(next.place,next.mission):$('#placesTitle').focus();
  document.querySelectorAll('[data-visit]').forEach(button=>button.onclick=()=>showPlace(villagePlaces.find(place=>place.id===button.dataset.visit)));
  $('#memoryShortcut').onclick=()=>showActivityGroup('memory');
  $('#quizShortcut').onclick=()=>showActivityGroup('quiz');
  $('#practice').onclick=()=>{showPractice();focusTitle()};
  $('#librarySounds').onclick=()=>{reference('alphabet');focusTitle()};
  if(shouldFocus)focusTitle();
}
function placeArtwork(place) {
  return place.art
    ? `<img class="place-art" src="assets/${place.art}.webp" alt="" width="92" height="84">`
    : `<span class="place-icon" aria-hidden="true">${place.icon}</span>`;
}
function showPlace(place) {
  activePlace=place;
  activeMission=null;
  page='place';
  window.speechSynthesis?.cancel();
  app.innerHTML=`<section class="modulehero village-location" style="--accent:${place.color};--module-color:#fff2d7">
    <button class="btn" id="back">← Voltar à vila</button>
    <div class="modulehero-body">${placeArtwork(place)}
      <div><h1>${place.name}</h1><p>Escolha uma missão.</p></div>
    </div>
  </section>
  <div class="place-grid location-missions">${place.missions.map((mission,i)=>{
    const open=missionAvailable(place,i);
    const done=completed(mission.id);
    return `<article class="place-card" style="--accent:${place.color}">
      <h2>${mission.name}</h2>
      <p>${done?`Concluída · ${mission.deck.length} desafios ao repetir`:open?`${mission.deck.length} desafios`:'Disponível após a primeira missão.'}</p>
      ${open?`<button class="btn ${done?'':'primary'}" data-mission="${i}" aria-label="${done?'Repetir':'Jogar'}: ${mission.name}">${done?'Repetir':'Jogar'} →</button>`:''}
    </article>`;
  }).join('')}</div>`;
  $('#back').onclick=goHome;
  document.querySelectorAll('[data-mission]').forEach(button=>button.onclick=()=>enterMission(place,place.missions[Number(button.dataset.mission)]));
  focusTitle();
}

function showActivityGroup(group) {
  activityGroup=group;
  page='activities';
  game=null;
  currentModule=null;
  window.speechSynthesis?.cancel();
  const memoryGroup=group==='memory';
  const choices=games.filter(item=>memoryGroup?isMemory(item.id):quizGames.has(item.id));
  app.innerHTML=`<section class="referenceTop">
    <div><h1>${memoryGroup?'Jogos de memória':'Quizzes'}</h1><p>${memoryGroup?'Escolha os pares que quer encontrar.':'Escolha um quiz com cinco perguntas.'}</p></div>
    <button class="btn" id="back">← Voltar à vila</button>
  </section>
  <div class="cards">${choices.map(item=>`<button class="card" data-quick="${item.id}">
    <span class="art" aria-hidden="true">${item.e}</span><h3>${item.t}</h3><p>${item.d}</p>
  </button>`).join('')}</div>`;
  $('#back').onclick=goHome;
  document.querySelectorAll('[data-quick]').forEach(button=>{
    button.onclick=()=>start(button.dataset.quick);
  });
  focusTitle();
}

function showPractice(){page='practice';lastPractice=true;activeMission=null;activePlace=null;game=null;currentModule=null;window.speechSynthesis?.cancel();const done=games.filter(g=>saved.done[g.id]).length;app.innerHTML=`<section class="hero"><div><span class="eyebrow">🌟 APRENDER NO SEU RITMO</span><h1>Modo prática</h1><p>Escolha um módulo e pratique no seu ritmo.</p><button class="btn primary" id="learnNow">Voltar à vila</button></div><span class="mascot" aria-hidden="true">🐻</span></section><div class="banner"><div><strong>⭐ ${saved.stars} estrelas</strong><div class="muted">${done} de ${games.length} atividades concluídas ao menos uma vez</div></div><span class="muted">Sem pressa, sem competição</span></div><h2 class="sectionTitle">Escolha um módulo 📚</h2><div class="modulegrid">${modules.map((m,i)=>{const count=m.games.filter(id=>saved.done[id]).length;return `<button class="modulecard" data-module="${m.id}" style="--module-color:${m.color}"><div class="moduleart">${m.e}</div><span class="eyebrow">MUNDO ${i+1}</span><h3>${m.t.replace(/^Módulo \d+ — /,'')}</h3><p>${m.d}</p><div class="modprogress"><span>${count} de ${m.games.length} atividades realizadas</span><div class="progress"><div style="width:${100*count/m.games.length}%"></div></div></div><strong>Explorar mundo →</strong></button>`}).join('')}</div><p class="note">Os módulos são independentes: a criança pode voltar e repetir qualquer atividade. O progresso é salvo neste navegador.</p>`;$('#learnNow').onclick=goHome;document.querySelectorAll('[data-module]').forEach(b=>b.onclick=()=>showModule(b.dataset.module))}
function showModule(id){const m=modules.find(m=>m.id===id);if(!m)return;currentModule=id;page='module';game=null;window.speechSynthesis?.cancel();let count=m.games.filter(g=>saved.done[g]).length;app.innerHTML=`<section class="modulehero" style="--module-color:${m.color}"><button class="btn" id="backHome">← Modo prática</button><div class="modulehero-body"><span class="moduleart">${m.e}</span><div><span class="eyebrow">MEU MUNDO DE LETRAS</span><h1>${m.t}</h1><p>${m.d}</p><p class="muted">${count} de ${m.games.length} atividades realizadas • Você pode escolher a ordem.</p></div></div></section>${m.refs.length?`<h2 class="sectionTitle">Primeiro, vamos aprender 📖</h2><div class="cards">${m.refs.map(r=>`<button class="card" data-ref="${r}"><span class="art">${r==='alphabet'?'🔠':'🗣️'}</span><h3>${r==='alphabet'?'Alfabeto com sons':'Famílias silábicas'}</h3><p>${r==='alphabet'?'Ouça cada uma das 26 letras':'Ouça sílabas de várias famílias'}</p></button>`).join('')}</div>`:''}<h2 class="sectionTitle">Agora, vamos brincar 🎮</h2><div class="cards">${m.games.map(id=>{const g=games.find(x=>x.id===id);return `<button class="card" data-game="${id}"><span class="art">${g.e}</span><h3>${saved.done[id]?'✅ ':''}${g.t}</h3><p>${g.d}</p></button>`}).join('')}</div><div class="modulefooter"><button class="btn" id="moduleBack">← Escolher outro mundo</button></div>`;$('#backHome').onclick=showPractice;$('#moduleBack').onclick=showPractice;document.querySelectorAll('[data-ref]').forEach(b=>b.onclick=()=>reference(b.dataset.ref));document.querySelectorAll('[data-game]').forEach(b=>b.onclick=()=>start(b.dataset.game))}
function backToModule(){if(activityGroup)showActivityGroup(activityGroup);else if(activePlace)showPlace(activePlace);else if(currentModule)showModule(currentModule);else if(lastPractice)showPractice();else goHome()}
function reference(tab){page='reference';refTab=tab;renderReference()}
function renderReference(){window.speechSynthesis?.cancel();let alpha=refTab==='alphabet';app.innerHTML=`<section class="referenceTop"><div><h1>${alpha?'🔠 Alfabeto sonoro':'🗣️ Famílias silábicas'}</h1><p class="muted">Toque para ouvir. Pode repetir quantas vezes quiser.</p></div><button class="btn" id="back">← Voltar</button></section><div class="tabs"><button class="tab ${alpha?'active':''}" data-tab="alphabet">Letras A–Z</button><button class="tab ${!alpha?'active':''}" data-tab="syllables">Sílabas</button></div>${alpha?`<div class="lettergrid">${ABC.map(l=>`<button class="lettertile ${refLetter===l?'selected':''}" data-letter="${l}" aria-label="Ouvir letra ${l}">${l}<small>🔊 Ouvir</small></button>`).join('')}</div><section class="learnpanel"><span class="eyebrow">Letra escolhida</span><div class="selectedLetter">${refLetter}</div><p>Você está ouvindo o nome da letra: <strong>${letterName[refLetter].toUpperCase()}</strong></p><button class="btn primary" id="selectedSound">🔊 Ouvir a letra ${refLetter}</button></section><p class="note">Aqui você escuta o <b>nome da letra</b>. Nos jogos de escuta, a letra não aparece antes da escolha.</p>`:`<p class="note">Comece pelas famílias mais comuns. Toque na família e depois nas sílabas para ouvir cada uma. O som é gerado pelo navegador e pode variar; algumas sílabas isoladas não são pronunciadas com precisão.</p><div class="families">${[...families,...Object.keys(extraFamilies)].map(f=>`<button class="family ${refFamily===f?'active':''}" data-family="${f}">${f}</button>`).join('')}</div><section class="learnpanel"><span class="eyebrow">Família ${refFamily}</span><h2>${refFamily==='B'?'BA • BE • BI • BO • BU':`Vamos escutar!`}</h2><div class="syllgrid">${(extraFamilies[refFamily]||vowels.map(v=>refFamily+v)).map(s=>`<button class="lettertile" data-syll="${s}" aria-label="Ouvir sílaba ${s}">${s}<small>🔊 Ouvir</small></button>`).join('')}</div></section><p class="muted">Algumas combinações têm pronúncias ou regras próprias, como CE/CI, GE/GI, QU e GU. A área mostra famílias comuns, não todas as sílabas possíveis do português.</p>`}`;$('#back').onclick=backToModule;document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{reference(b.dataset.tab);focusTitle()});if(alpha){document.querySelectorAll('[data-letter]').forEach(b=>b.onclick=()=>{refLetter=b.dataset.letter;renderReference();document.querySelector(`[data-letter="${refLetter}"]`).focus();sayLetter(refLetter)});$('#selectedSound').onclick=()=>sayLetter(refLetter)}else{document.querySelectorAll('[data-family]').forEach(b=>b.onclick=()=>{refFamily=b.dataset.family;renderReference();document.querySelector(`[data-family="${refFamily}"]`).focus()});document.querySelectorAll('[data-syll]').forEach(b=>b.onclick=()=>speak(b.dataset.syll.toLowerCase()))}}

// ============================================================
// 07. Preparação dos desafios
// ============================================================
function makeDeck(id){let pool=shuffle(wordBank);if(id==='wordQuiz')return shuffle(wordQuiz).slice(0,5);if(['firstSyll','lastSyll','spellQuiz'].includes(id))return pool.filter(word=>word[2].length>1).slice(0,5);if(id==='countsyll'){let groups=[1,2,3,4].flatMap(n=>shuffle(wordBank.filter(w=>w[2].length===n)).slice(0,n===2?2:1));return shuffle(groups).slice(0,5)}if(['initial','picture','missing','syllbuild','build','listenword','hangman'].includes(id))return pool.slice(0,5);if(id==='hearletter')return shuffle(ABC).slice(0,5);if(id==='hearsyll')return shuffle(families.flatMap(f=>vowels.map(v=>f+v))).slice(0,5);if(id==='sequence')return shuffle(Array.from({length:23},(_,i)=>i+2)).slice(0,5);if(id==='rhyme')return shuffle(rhymeBank).slice(0,5);return shuffle(wordBank).slice(0,5)}
function nextPracticeDeck(id) {
  const previous=previousPracticeDecks.get(id)||[];
  const candidates=[...new Set([...makeDeck(id),...makeDeck(id),...makeDeck(id)])];
  const fresh=candidates.filter(item=>!previous.includes(item));
  const next=[...fresh,...candidates.filter(item=>previous.includes(item))].slice(0,5);
  previousPracticeDecks.set(id,next);
  return next;
}
function start(id, mission=null, resume=true) {
  activeMission=mission;
  currentModule=gameModule(id)?.id||null;
  page='game';
  game=id;
  round=mission&&resume&&!completed(mission.id)?(saved.checkpoints[mission.id]||0):0;
  locked=false;
  quizScore=0;
  deck=mission
    ? mission.deck.map(item=>['syllbuild','delivery','shopping','hangman'].includes(id)
        ? wordBank.find(word=>word[0]===item) : item)
    : isMemory(id)?[null]:nextPracticeDeck(id);
  renderGame();
}
function shell(inner) {
  window.speechSynthesis?.cancel();
  const g=[...games,...villageGames].find(item=>item.id===game);
  const total=deck.length;
  app.innerHTML=`<section class="board">
    <div class="gamehead"><button class="back" id="back">← ${activeMission?'Missões':activityGroup?(activityGroup==='memory'?'Memória':'Quizzes'):'Meu módulo'}</button>
    <span class="muted">Desafio ${round+1} de ${total}</span></div>
    <div class="progress" role="progressbar" aria-label="Desafios concluídos" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${round}"><div style="width:${100*round/total}%"></div></div>
    <div class="eyebrow">${activeMission?.name||g.t}</div>
    ${inner}
    <div id="feedback" class="feedback hide" role="status" aria-live="polite"></div>
    <div class="actions" id="actions"></div>
  </section>`;
  $('#back').onclick=backToModule;
  focusTitle();
}
const opt=(arr,klass='')=>`<div class="choices">${shuffle(arr).map((x,i)=>`<button class="choice ${klass}" data-opt="${i}" data-val="${x}">${x}</button>`).join('')}</div>`;
function bindChoice(correct, hint='Você pode tentar outra vez.') {
  document.querySelectorAll('[data-opt]').forEach(button=>button.onclick=()=>{
    if(locked)return;
    if(button.dataset.val===correct){
      if(quizGames.has(game)&&!quizMissed)quizScore++;
      button.classList.add('correct');
      win();
    }else{
      quizMissed=true;
      button.classList.add('wrong');
      button.disabled=true;
      notice(hint);
      document.querySelector('[data-opt]:not(:disabled)')?.focus();
    }
  });
}
function playReward() {
  if(!settings.effects || !window.AudioContext)return;
  try {
    const context=new AudioContext();
    const notes=[392,523.25];
    notes.forEach((note,i)=>{
      const oscillator=context.createOscillator();
      const gain=context.createGain();
      const time=context.currentTime+i*.13;
      oscillator.frequency.value=note;
      gain.gain.setValueAtTime(.025,time);
      gain.gain.exponentialRampToValueAtTime(.001,time+.2);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(time);
      oscillator.stop(time+.2);
      if(i===notes.length-1)oscillator.onended=()=>context.close();
    });
  }catch{/* Os efeitos são opcionais. */}
}
function win() {
  if(locked)return;
  locked=true;
  const correctButton=$('.choice.correct');
  const feedback=$('#feedback');
  feedback.className='feedback';
  feedback.textContent=correctButton && ['hearletter','hearsyll'].includes(game)
    ? `Você encontrou ${correctButton.textContent}!` : 'Muito bem! Você conseguiu!';
  document.querySelectorAll('[data-opt],[data-tile],[data-guess]').forEach(button=>button.disabled=true);
  const last=round===deck.length-1;
  $('#actions').innerHTML=`<button class="btn primary" id="next">${last?'Ver resultado':'Continuar'} →</button>`;
  $('#next').focus();
  $('#next').onclick=()=>{
    round++;
    if(last){finish();return;}
    if(activeMission&&!completed(activeMission.id)){
      saved.checkpoints[activeMission.id]=round;
      persist();
    }
    renderGame();
  };
}
function finish() {
  const mission=activeMission;
  const g=[...games,...villageGames].find(item=>item.id===game);
  const fresh=mission && !completed(mission.id);
  if(games.includes(g) && !saved.done[game]){
    saved.done[game]=true;
    saved.stars+=deck.length;
  }
  if(mission){
    saved.missions[mission.id]=true;
    delete saved.checkpoints[mission.id];
  }
  persist();
  if(fresh)playReward();
  page='finish';
  const next=nextMission();
  app.innerHTML=`<section class="board finish">
    <div class="reward-art" aria-hidden="true">${mission?placeArtwork(activePlace):'✦'}</div>
    <h1>${mission?'Missão concluída!':'Atividade concluída!'}</h1>
    <p>${fresh?mission.reward:`Você terminou ${mission?.name||g.t}.`}</p>
    ${quizGames.has(game)?`<p class="quiz-result"><strong>${quizScore} de ${deck.length}</strong> acertos na primeira tentativa</p>`:''}
    <div class="actions"><button class="btn" id="repeat">Jogar de novo</button>
      <button class="btn" id="back">${mission?'Voltar à vila':activityGroup?'Escolher outro jogo':'Voltar ao módulo'}</button>
      ${mission&&next?'<button class="btn primary" id="continue">Próxima missão →</button>':''}
    </div>
  </section>`;
  $('#repeat').onclick=()=>start(game,mission,false);
  $('#back').onclick=mission?goHome:backToModule;
  if(mission&&next)$('#continue').onclick=()=>enterMission(next.place,next.mission);
  focusTitle();
}
function distract(correct,pool,n=3){return [correct,...shuffle([...new Set(pool.filter(x=>x!==correct))]).slice(0,n-1)]}

// ============================================================
// 08. Atividades de alfabetização
// ============================================================
function renderMemory() {
  const {title,rule}=memoryModes[game];
  const pairs=game==='memoryVowels'
    ? shuffle(vowels).slice(0,3).map(letter=>[letter,letter.toLowerCase(),letter,letter])
    : game==='memoryInitial'
      ? [...new Map(shuffle(wordBank).map(([word,image])=>[word[0],[image,word[0],word,word[0]]])).values()].slice(0,3)
      : shuffle(wordBank).slice(0,3).map(([word,image])=>[image,word,word,word]);
  const cards=shuffle(pairs.flatMap(([left,right,leftSound,rightSound],pair)=>[
    {face:left,label:game==='memoryVowels'?`Maiúscula ${left}`:`Desenho de ${leftSound}`,sound:leftSound,pair},
    {face:right,label:game==='memoryVowels'?`Minúscula ${right}`:right,sound:rightSound,pair}
  ]));
  const open=[];
  const found=new Set();
  let selectedCard=null;
  shell(`<h1>${title}</h1><p class="instruction">${rule}</p>
    <p id="pairCount" role="status">0 de ${pairs.length} pares</p>
    <div class="memgrid" aria-label="Cartas da memória">${cards.map((_,i)=>`<button class="mem" data-card="${i}" aria-label="Carta ${i+1}, fechada">?</button>`).join('')}</div>
    <div class="memory-controls">${btnAudio('Ouvir última carta')}<button class="btn" id="closePair" hidden>Fechar cartas</button></div>`);
  const buttons=[...document.querySelectorAll('[data-card]')];
  const close=$('#closePair');
  const audio=$('#playAudio');
  audio.disabled=true;
  bindAudio(()=>{
    if(selectedCard===null)return;
    const sound=cards[selectedCard].sound;
    if(sound.length===1)sayLetter(sound);
    else speak(sound.toLowerCase());
  });
  function draw(){
    const waiting=open.length===2;
    buttons.forEach((button,i)=>{
      const matched=found.has(i);
      const visible=matched||open.includes(i);
      button.textContent=visible?cards[i].face:'?';
      button.classList.toggle('revealed',visible);
      button.classList.toggle('matched',matched);
      button.classList.toggle('word-face',visible&&game==='memory'&&cards[i].face===cards[i].sound);
      button.setAttribute('aria-label',`Carta ${i+1}, ${visible?cards[i].label:'fechada'}${matched?', par encontrado':''}`);
      button.setAttribute('aria-disabled',String(visible||waiting||locked));
    });
    close.hidden=!waiting;
    audio.disabled=selectedCard===null;
  }
  buttons.forEach((button,i)=>button.onclick=()=>{
    if(locked||open.length===2||open.includes(i)||found.has(i))return;
    selectedCard=i;
    open.push(i);
    if(open.length===2){
      if(cards[open[0]].pair===cards[open[1]].pair){
        open.splice(0).forEach(index=>found.add(index));
        $('#pairCount').textContent=`${found.size/2} de ${pairs.length} pares`;
        if(found.size===cards.length)win();
        else notice('Você encontrou um par!');
      }else{
        notice('Essas cartas não formam um par. Feche as cartas quando quiser.');
        draw();
        close.focus();
        return;
      }
    }
    draw();
  });
  close.onclick=()=>{
    const first=open[0];
    open.length=0;
    selectedCard=null;
    $('#feedback').className='feedback hide';
    draw();
    buttons[first]?.focus();
  };
}

function renderGame(){if(page!=='game')return;quizMissed=false;const w=deck[round];locked=false;selected=[];used=[];
if(game==='hearletter'){let options=distract(w,ABC,4);shell(`<h1>Ouça antes de escolher</h1><p class="instruction">Toque em Ouvir e escolha a letra.</p>${btnAudio('Ouvir nome da letra')}${opt(options)}`);bindChoice(w,'Ouça mais uma vez e tente de novo.');bindAudio(()=>sayLetter(w));return}
if(game==='hearsyll'){let opts=distract(w,families.flatMap(f=>vowels.map(v=>f+v)),4);shell(`<h1>Qual sílaba você ouviu?</h1><p class="instruction">Escute o som e toque na sílaba certa.</p>${btnAudio('Ouvir sílaba')}${opt(opts)}`);bindChoice(w);bindAudio(()=>speak(w.toLowerCase()));return}
if(game==='delivery'||game==='shopping'){
  const delivery=game==='delivery';
  const requests={UVA:'Pegue a uva', BOLO:'Coloque o bolo na cesta', BANANA:'Leve a banana para o caixa', TOMATE:'Coloque o tomate na cesta', BOTA:'Pegue a bota'};
  const options=distract(w[0],wordBank.filter(word=>word[0]!=='PÉ').map(word=>word[0]))
    .map(label=>wordBank.find(word=>word[0]===label));
  shell(`<h1>${delivery?'Encontre a casa da entrega':'Separe o pedido'}</h1>
    <p class="instruction">${delivery?'Leia a etiqueta e escolha a casa com o mesmo nome.':'Leia o pedido e escolha o produto certo.'}</p>
    <div class="mission-prompt"><span aria-hidden="true">${delivery?'📦':'🧺'}</span>
      <strong>${delivery?w[0]:requests[w[0]]}</strong></div>
    ${btnAudio(delivery?'Ouvir a etiqueta':'Ouvir o pedido')}
    <div class="choices">${shuffle(options).map(([label,icon])=>`<button class="choice word" data-opt data-val="${label}" aria-label="${label}">
      <span class="mission-option" aria-hidden="true">${delivery?'🏠':icon}</span>${delivery?label:''}</button>`).join('')}</div>`);
  bindAudio(()=>speak(delivery?w[0].toLowerCase():requests[w[0]]));
  bindChoice(w[0],delivery?'Compare a etiqueta com as placas das casas.':'Leia ou ouça o pedido de novo.');
  return;
}
if(game==='initial'){let a=w[0][0];shell(`<h1>Qual é a primeira letra?</h1><p class="instruction">Veja o desenho e escolha a letra inicial.</p><span class="big" role="img" aria-label="${w[0]}">${w[1]}</span>${btnAudio('Ouvir palavra')}${opt(distract(a,ABC))}`);bindChoice(a);bindAudio(()=>speak(w[0].toLowerCase()));return}
if(game==='sequence'){let i=w,answer=ABC[i];shell(`<h1>Qual letra vem depois?</h1><p class="instruction">Complete a sequência.</p><div class="big" style="font-size:54px">${ABC[i-2]} · ${ABC[i-1]} · ?</div>${opt(distract(answer,ABC))}`);bindChoice(answer);return}
if(game==='picture'){let opts=distract(w[0],wordBank.map(x=>x[0]));shell(`<h1>Qual é o nome do desenho?</h1><p class="instruction">Olhe e escolha a palavra escrita.</p><span class="big" role="img" aria-label="Desenho da atividade">${w[1]}</span>${opt(opts,'word')}`);bindChoice(w[0]);return}
if(game==='listenword'){let opts=distract(w[0],wordBank.map(x=>x[0])).map(s=>wordBank.find(z=>z[0]===s));shell(`<h1>Qual desenho você ouviu?</h1><p class="instruction">Escute a palavra e escolha o desenho.</p>${btnAudio('Ouvir palavra')}<div class="choices">${shuffle(opts).map((x,i)=>`<button class="choice emoji" data-opt="${i}" data-val="${x[0]}" aria-label="Opção ${i+1}, desenho">${x[1]}</button>`).join('')}</div>`);bindChoice(w[0]);bindAudio(()=>speak(w[0].toLowerCase()));return}
if(game==='missing'){const index=(round+1)%w[0].length,answer=w[0][index],partial=w[0].slice(0,index)+'_'+w[0].slice(index+1);shell(`<h1>Qual letra falta?</h1><p class="instruction">Complete a palavra do desenho.</p><span class="big" role="img" aria-label="${w[0]}">${w[1]}</span><div class="big" style="font-size:49px;letter-spacing:7px">${partial}</div>${opt(distract(answer,[...ABC,answer]))}${btnAudio('Ouvir palavra')}`);bindChoice(answer);bindAudio(()=>speak(w[0].toLowerCase()));return}
if(game==='syllbuild'||game==='build'){const parts=game==='syllbuild'?w[2]:w[0].split('');const pool=shuffle(parts.map((s,i)=>({s,i})));shell(`<h1>${game==='build'?'Monte a palavra com letras':'Junte as sílabas'}</h1><p class="instruction">Toque nas peças na ordem certa para escrever o nome do desenho.</p><span class="big" role="img" aria-label="${w[0]}">${w[1]}</span>${btnAudio('Ouvir palavra')}<div class="slots">${parts.map(()=>'<div class="slot">?</div>').join('')}</div><div class="tiles">${pool.map(p=>`<button class="tile" data-tile="${p.i}">${p.s}</button>`).join('')}</div><button class="btn" id="undo">↶ Desfazer</button>`);bindAudio(()=>speak(w[0].toLowerCase()));function draw(){document.querySelectorAll('.slot').forEach((s,i)=>{s.textContent=selected[i]||'?';s.classList.toggle('filled',!!selected[i])});document.querySelectorAll('[data-tile]').forEach(b=>b.disabled=used.includes(+b.dataset.tile));if(selected.length===parts.length){if(selected.join('')===w[0])win();else{notice('Ainda não ficou igual. Você pode desfazer e tentar novamente. 🌱')}}}document.querySelectorAll('[data-tile]').forEach(b=>b.onclick=()=>{if(locked||used.includes(+b.dataset.tile))return;selected.push(b.textContent);used.push(+b.dataset.tile);draw()});$('#undo').onclick=()=>{if(locked)return;selected.pop();used.pop();draw();$('#feedback').classList.add('hide')};return}
if(isMemory(game)){renderMemory();return}
if(game==='firstSyll'||game==='lastSyll'){
  const first=game==='firstSyll';
  const correct=first?w[2][0]:w[2].at(-1);
  const options=distract(correct,wordBank.flatMap(word=>word[2].filter(part=>part.length===correct.length)));
  shell(`<h1>Qual é a ${first?'primeira':'última'} sílaba?</h1>
  <p class="instruction">Leia a palavra ou escute. Depois escolha uma sílaba.</p>
  <div class="big memory-prompt">${w[0]}</div>${btnAudio('Ouvir palavra')}${opt(options)}`);
  bindAudio(()=>speak(w[0].toLowerCase()));bindChoice(correct);return;
}
if(game==='lastLetter'){
  const correct=w[0].at(-1);
  shell(`<h1>Qual é a última letra?</h1><p class="instruction">Veja o desenho e complete a palavra.</p>
  <div class="big" role="img" aria-label="${w[0]}">${w[1]}</div>
  <div class="big memory-prompt">${w[0].slice(0,-1)}_</div>${btnAudio('Ouvir palavra')}${opt(distract(correct,ABC))}`);
  bindAudio(()=>speak(w[0].toLowerCase()));bindChoice(correct);return;
}
if(game==='wordQuiz'){
  const [prompt,correct,...choices]=w;
  shell(`<h1>Quiz das palavras</h1><p class="instruction">${prompt}</p>${btnAudio('Ouvir pergunta')}${opt([correct,...choices],'word')}`);
  bindAudio(()=>speak(prompt));bindChoice(correct);return;
}
if(game==='spellQuiz'){
  const [word,image,syllables]=w;
  const reversed=[...syllables].reverse().join('');
  const missing=word.slice(0,-1);
  shell(`<h1>Como se escreve?</h1><p class="instruction">Veja o desenho e escolha como se escreve o nome dele.</p>
  <div class="big" role="img" aria-label="${word}">${image}</div>${btnAudio('Ouvir palavra')}
  ${opt([...new Set([word,reversed,missing])],'word')}`);
  bindAudio(()=>speak(word.toLowerCase()));bindChoice(word);return;
}
if(game==='hangman'){let secret=w[0],picked=new Set();shell(`<h1>Descubra a palavra secreta</h1><p class="instruction">Olhe o desenho e escolha letras. Aqui não existe limite de tentativas!</p><span class="big" aria-hidden="true">${w[1]}</span><div class="slots" id="secretSlots"></div><div class="choices" id="lettersToTry">${[...new Set([...ABC,...secret])].map(l=>`<button class="choice" style="font-size:25px;min-width:55px;min-height:55px;padding:8px" data-guess="${l}">${l}</button>`).join('')}</div>${btnAudio('Ouvir a dica')}`);bindAudio(()=>speak('Dica: é o nome do desenho.'));const draw=()=>{$('#secretSlots').innerHTML=secret.split('').map(l=>`<div class="slot">${picked.has(l)?l:'_'}</div>`).join('')};draw();document.querySelectorAll('[data-guess]').forEach(b=>b.onclick=()=>{if(locked)return;const l=b.dataset.guess;picked.add(l);b.disabled=true;if(secret.includes(l)){b.classList.add('correct');notice('Você encontrou uma letra!');draw();if([...new Set(secret)].every(c=>picked.has(c)))win()}else notice('Essa letra não está na palavra. Pode continuar tentando.')});return}
if(game==='countsyll'){const correct=String(w[2].length);shell(`<h1>Quantas sílabas tem?</h1><p class="instruction">Ouça a palavra e conte quantos pedacinhos ela tem.</p><span class="big" aria-hidden="true">${w[1]}</span>${btnAudio('Ouvir palavra')}<div class="choices">${[1,2,3,4].map(n=>`<button class="choice" data-opt="${n}" data-val="${n}">${n}</button>`).join('')}</div>`);bindAudio(()=>speak(w[0].toLowerCase()));bindChoice(correct);return}
if(game==='rhyme'){let [base,correct,...wrong]=w;shell(`<h1>Qual palavra rima?</h1><p class="instruction">Encontre a palavra que termina com um som parecido com ${base}.</p><span class="big" style="font-size:54px">${base}</span>${btnAudio('Ouvir palavra')} ${opt([correct,...wrong],'word')}`);bindAudio(()=>speak(base.toLowerCase()));bindChoice(correct);return}}

// ============================================================
// 09. Preferências de conforto sensorial
// ============================================================
function renderSettings(){
  const dialog=$('#comfort');
  const opener=document.activeElement;
  window.speechSynthesis?.cancel();
  dialog.innerHTML=`<form method="dialog" class="settings">
    <h2 id="comfortTitle">Ajustes de conforto</h2>
    <label class="settingrow"><span>Contraste mais alto</span><input id="contrast" type="checkbox" ${settings.contrast?'checked':''}></label>
    <label class="settingrow"><span>Reduzir movimentos</span><input id="quiet" type="checkbox" ${settings.quiet?'checked':''}></label>
    <label class="settingrow"><span>Efeitos sonoros nas conquistas</span><input id="effects" type="checkbox" ${settings.effects?'checked':''}></label>
    <label class="settingrow"><span>Velocidade da fala</span><select id="rate"><option value="0.65">Mais devagar</option><option value="0.78">Devagar</option><option value="0.95">Normal</option></select></label>
    <label class="settingrow"><span>Volume da fala</span><input id="volume" type="range" min="0" max="1" step=".1" value="${settings.volume}"></label>
    <p class="note">A fala começa quando você toca em Ouvir.</p>
    <div class="actions"><button type="button" class="btn" id="test">Testar áudio</button><button class="btn primary">Concluir ajustes</button></div>
  </form>`;
  $('#rate').value=String(settings.rate);
  for(const key of ['contrast','quiet','effects'])$('#'+key).onchange=e=>{
    settings[key]=e.target.checked;
    persist();
    applySettings();
  };
  for(const key of ['rate','volume'])$('#'+key).oninput=e=>{
    settings[key]=Number(e.target.value);
    persist();
  };
  $('#test').onclick=()=>speak('Olá! Vamos aprender juntos.');
  dialog.onclose=()=>{window.speechSynthesis?.cancel();opener?.focus()};
  dialog.showModal();
}
function applySettings(){document.body.classList.toggle('quiet',settings.quiet);document.body.classList.toggle('contrast',settings.contrast)}

// ============================================================
// 10. Inicialização do aplicativo
// ============================================================
$('#homeBtn').onclick=goHome;$('#settingsBtn').onclick=renderSettings;applySettings();goHome(false);
})();

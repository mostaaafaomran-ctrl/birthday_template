const THEMES={
  rose:{bg1:"#fff1f3",bg2:"#ffd9e2",card:"#ffffff",text:"#4a2c3a",accent:"#e0527a",accent2:"#f6a5bb"},
  lavender:{bg1:"#f5f0ff",bg2:"#e0d4fb",card:"#ffffff",text:"#3a2f55",accent:"#8a63d2",accent2:"#c3aef0"},
  romance:{bg1:"#2a0f1f",bg2:"#5a1f3d",card:"#3a1730",text:"#ffe9ef",accent:"#ff8fb1",accent2:"#d4a373"},
  night:{bg1:"#1b1730",bg2:"#2e2350",card:"#2a2347",text:"#f3e9ff",accent:"#ff7eb3",accent2:"#7a5fc4"}
};
const $=id=>document.getElementById(id);
const L={ar:{go:"افتحي 💖",bad:"الباسورد غلط، جربي تاني 🙈",g:"لحظات حلوة 📸",v:"فيديوهات 🎬",s:"قصتنا 💞",blow:"اطفي الشموع 🕯️",wait:"لسه مش ميعادها 💗",u:["يوم","ساعة","دقيقة","ثانية"],dir:"rtl"},
 en:{go:"Open 💖",bad:"Wrong password, try again 🙈",g:"Our moments 📸",v:"Videos 🎬",s:"Our story 💞",blow:"Blow the candles 🕯️",wait:"Not yet, my love 💗",u:["days","hrs","min","sec"],dir:"ltr"}}[CONFIG.lang||"ar"];
document.documentElement.lang=CONFIG.lang||"ar";document.documentElement.dir=L.dir;
if(CONFIG.lang==="en")document.body.style.fontFamily="Cairo,system-ui,sans-serif";
const t=CONFIG.theme==="custom"?CONFIG.customTheme:(THEMES[CONFIG.theme]||THEMES.romance);
Object.entries(t).forEach(([k,v])=>document.documentElement.style.setProperty("--"+k,v));
$("go").textContent=L.go;$("gT").textContent=L.g;$("vT").textContent=L.v;$("sT").textContent=L.s;
$("cT").textContent=CONFIG.cakeTitle;$("blow").textContent=L.blow;
document.title="🎂 "+CONFIG.name;
$("lockTitle").textContent=CONFIG.lockTitle;$("hint").textContent=CONFIG.passwordHint;
$("title").textContent=CONFIG.title;$("sub").textContent=CONFIG.subtitle;
$("lt").textContent=CONFIG.letterTitle;$("lp").textContent=CONFIG.letter;$("foot").textContent=CONFIG.footer;
// المعرض
CONFIG.photos.forEach(p=>{const d=document.createElement("div");d.className="pol";
  d.innerHTML=`<img src="${p.src}" alt="" loading="lazy">${p.caption?`<span>${p.caption}</span>`:""}`;
  d.onclick=()=>{$("lightbox").querySelector("img").src=p.src;$("lightbox").style.display="grid"};$("gallery").append(d)});
CONFIG.videos.forEach(v=>{const d=document.createElement("div");d.className="vid";
  d.innerHTML=`<video src="${v.src}" controls playsinline preload="metadata"></video>${v.caption?`<span>${v.caption}</span>`:""}`;$("videos").append(d)});
if(!CONFIG.story.length)$("sSec").remove();
CONFIG.story.forEach(e=>{const d=document.createElement("div");d.className="st";
  d.innerHTML=`<b>${e.date||""}</b><h4>${e.title||""}</h4><p>${e.text||""}</p>${e.photo?`<img src="${e.photo}" alt="" loading="lazy">`:""}`;$("story").append(d)});
if(!CONFIG.photos.length)$("gSec").remove();
if(!CONFIG.videos.length)$("vSec").remove();
$("lightbox").onclick=()=>$("lightbox").style.display="none";
// الباسورد
let target=CONFIG.birthdayDate?new Date(CONFIG.birthdayDate).getTime():0;
function tick(){if(!target)return;let d=target-Date.now();
  if(d<=0){$("cd").remove();target=0;return}
  const v=[d/864e5,d/36e5%24,d/6e4%60,d/1e3%60].map(Math.floor);
  $("cd").innerHTML=v.map((n,i)=>`<div>${n}<small>${L.u[i]}</small></div>`).join("")}
tick();setInterval(tick,1000);
function tryOpen(){
  if(target&&CONFIG.lockUntilDate){$("err").textContent=L.wait;return}
  if($("pw").value.trim()===CONFIG.password){
    $("lock").classList.add("hide");$("main").classList.add("show");
    startMusic();startHearts();startMessages();
  }else{
    $("err").textContent=L.bad;
    const b=document.querySelector(".lock-box");b.classList.remove("shake");void b.offsetWidth;b.classList.add("shake");
  }
}
$("go").onclick=tryOpen;$("pw").addEventListener("keydown",e=>e.key==="Enter"&&tryOpen());
// الموسيقى
function startMusic(){
  if(!CONFIG.music)return;const a=$("audio");a.src=CONFIG.music;
  a.play().then(()=>{$("mute").style.display="block"}).catch(()=>{});
  $("mute").onclick=()=>{a.muted=!a.muted;$("mute").textContent=a.muted?"🔇":"🔊"};
}
// القلوب
function startHearts(){
  const sy=["💖","💗","🤍","💕","🌸"];
  setInterval(()=>{const h=document.createElement("div");h.className="heart";h.textContent=sy[Math.floor(Math.random()*sy.length)];
    h.style.left=Math.random()*100+"vw";h.style.fontSize=14+Math.random()*22+"px";h.style.animationDuration=7+Math.random()*6+"s";
    $("hearts").append(h);setTimeout(()=>h.remove(),13000)},600);
}
// الرسائل الطايرة
function startMessages(){
  let i=0;
  const send=()=>{const m=document.createElement("div");m.className="msg "+(i%2?"r":"l");
    m.textContent=CONFIG.messages[i%CONFIG.messages.length]+" "+["💖","✨","🌹","💕"][i%4];
    m.style.top=(12+Math.random()*68)+"vh";$("fly").append(m);setTimeout(()=>m.remove(),9200);i++};
  send();setInterval(send,2600);
}

// التورتة والكونفيتي
function confetti(){const c=["#ff8fb1","#ffd166","#fff","#d4a373","#c3aef0"];
  for(let i=0;i<90;i++){const e=document.createElement("div");e.className="cf";e.textContent=["♥","●","✦"][i%3];
    e.style.cssText=`left:${Math.random()*100}vw;color:${c[i%5]};font-size:${10+Math.random()*16}px;animation-duration:${2.5+Math.random()*2.5}s;animation-delay:${Math.random()*.8}s`;
    $("confetti").append(e);setTimeout(()=>e.remove(),6500)}}
let blown=false;
function blow(){if(blown)return;blown=true;$("cake").classList.add("out");$("wish").textContent=CONFIG.wishText;$("wish").classList.add("on");confetti()}
$("blow").onclick=blow;
if(CONFIG.micBlow&&navigator.mediaDevices&&navigator.mediaDevices.getUserMedia){
  new IntersectionObserver((en,ob)=>{if(!en[0].isIntersecting)return;ob.disconnect();
    navigator.mediaDevices.getUserMedia({audio:true}).then(st=>{
      const ac=new (window.AudioContext||window.webkitAudioContext)(),an=ac.createAnalyser(),b=new Uint8Array(an.fftSize);
      ac.createMediaStreamSource(st).connect(an);let hit=0;
      (function loop(){if(blown){st.getTracks().forEach(t=>t.stop());return}
        an.getByteTimeDomainData(b);let m=0;b.forEach(x=>m=Math.max(m,Math.abs(x-128)));
        hit=m>70?hit+1:0;if(hit>8)blow();requestAnimationFrame(loop)})()
    }).catch(()=>{})},{threshold:.7}).observe($("cake"));
}

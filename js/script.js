document.getElementById('fb').addEventListener('submit',function(e){e.preventDefault();var f=e.target,n=f.n.value.trim(),m=f.m.value.trim(),em=f.e.value.trim();var u='mailto:vermaganesh753@gmail.com?subject='+encodeURIComponent('Portfolio feedback from '+n)+'&body='+encodeURIComponent(m+'\n\nFrom: '+n+' ('+em+')');var a=document.createElement('a');a.href=u;a.target='_blank';a.rel='noopener';document.body.appendChild(a);a.click();a.remove();document.getElementById('fbn').textContent='Your email app should open with the message ready. If nothing opens, write to vermaganesh753@gmail.com.';});
var lb=document.getElementById('lb');function closeLb(){lb.hidden=true;}document.querySelectorAll('.thumb,.ethumb').forEach(function(b){b.addEventListener('click',function(){lb.querySelector('img').src=b.querySelector('img').src;lb.hidden=false;lb.querySelector('button').focus();});});lb.addEventListener('click',closeLb);addEventListener('keydown',function(e){if(e.key==='Escape')closeLb();});
var vs=document.querySelectorAll('video.shot');if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var p=e.target.play();if(p&&p.catch)p.catch(function(){});}else{e.target.pause();}});},{threshold:.5});vs.forEach(function(v){io.observe(v);});}
(function(){var r=document.documentElement,k='gv-theme',t=null;try{t=localStorage.getItem(k);}catch(e){}if(t!=='light'&&t!=='dark')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';r.setAttribute('data-theme',t);var b=document.getElementById('th');function lab(){b.setAttribute('aria-label',r.getAttribute('data-theme')==='dark'?'Switch to light mode':'Switch to dark mode');}lab();b.addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem(k,n);}catch(e){}lab();dispatchEvent(new Event('themechange'));});})();
var pill=document.querySelector('.pill'),mb=document.getElementById('mb');mb.addEventListener('click',function(){var o=pill.classList.toggle('open');mb.setAttribute('aria-expanded',o?'true':'false');});addEventListener('keydown',function(e){if(e.key==='Escape')pill.classList.remove('open');});
(function(){var an=document.getElementById('anchor'),sw=document.getElementById('swing'),bd=document.getElementById('badge');if(!an||!sw||!bd)return;
var th=matchMedia('(prefers-reduced-motion: reduce)').matches?0:.5,w=0,dr=false,lt=0,la=0,v=0,pt=performance.now();
function ang(e){var r=an.getBoundingClientRect();return Math.max(-1.25,Math.min(1.25,-Math.atan2(e.clientX-(r.left+r.width/2),e.clientY-r.top)));}
bd.addEventListener('pointerdown',function(e){dr=true;try{bd.setPointerCapture(e.pointerId);}catch(x){}la=ang(e);lt=e.timeStamp;v=0;e.preventDefault();});
bd.addEventListener('pointermove',function(e){if(!dr)return;var a=ang(e),d=(e.timeStamp-lt)/1000;if(d>0)v=.6*v+.4*((a-la)/d);la=a;lt=e.timeStamp;th=a;});
function up(){if(!dr)return;dr=false;w=Math.max(-9,Math.min(9,v));}
bd.addEventListener('pointerup',up);bd.addEventListener('pointercancel',up);
function loop(n){var d=Math.min(.033,(n-pt)/1000);pt=n;if(!dr){w+=(-16*Math.sin(th)-1.1*w)*d;th+=w*d;if(Math.abs(th)<.0005&&Math.abs(w)<.002){th=0;w=0;}}sw.style.transform='rotate('+(th*57.2958).toFixed(2)+'deg)';requestAnimationFrame(loop);}
requestAnimationFrame(loop);})();
(function(){var el=document.getElementById('rot');if(!el)return;var R=['BTech CSE student','Full stack developer and learner','Fresher','Next up: cybersecurity'];
if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=R.slice(0,3).join(', ');return;}
var i=0,j=0,del=false;function tick(){var w=R[i];if(!del){j++;el.textContent=w.slice(0,j);if(j===w.length){del=true;setTimeout(tick,1700);return;}setTimeout(tick,60);return;}j--;el.textContent=w.slice(0,j);if(j===0){del=false;i=(i+1)%R.length;setTimeout(tick,350);return;}setTimeout(tick,30);}tick();})();
var tb=document.querySelectorAll('.tabs button');tb.forEach(function(b){b.addEventListener('click',function(){tb.forEach(function(x){var on=x===b;x.setAttribute('aria-selected',on?'true':'false');document.getElementById(x.dataset.p).hidden=!on;});});});
var tt=document.getElementById('totop');function tps(){tt.hidden=scrollY<500;}addEventListener('scroll',tps,{passive:true});tps();tt.addEventListener('click',function(){scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});});
var links=[].slice.call(document.querySelectorAll('#menu a[data-t]'));
var hdrEl=document.querySelector('header.top'),navLock=null,navAnim=0,secIds=['top','about','edu','work','skills','certs','contact'],spyT=false;
function setActive(id){links.forEach(function(l){l.classList.toggle('on',l.dataset.t===id);});}
function offY(){var r=hdrEl?hdrEl.getBoundingClientRect():null;return (r?Math.max(0,r.bottom):0)+16;}
function targetY(id){if(id==='top')return 0;var sc=document.getElementById(id);if(!sc)return scrollY;var el=sc.querySelector('.card')||sc;return Math.max(0,el.getBoundingClientRect().top+scrollY-offY());}
function spy(){spyT=false;if(navLock)return;var H=innerHeight,cur='top';for(var i=1;i<secIds.length;i++){var sc=document.getElementById(secIds[i]);if(!sc)continue;var el=sc.querySelector('.card')||sc;if(el.getBoundingClientRect().top<=H*.5)cur=secIds[i];}if(scrollY+H>=document.documentElement.scrollHeight-4)cur='contact';setActive(cur);}
function goTo(id){cancelAnimationFrame(navAnim);if(matchMedia('(prefers-reduced-motion: reduce)').matches){scrollTo(0,targetY(id));setActive(id);return;}
navLock=id;setActive(id);var y0=scrollY,t0=performance.now(),dur=Math.min(1100,Math.max(500,Math.abs(targetY(id)-y0)*.35));
function step(n){if(navLock!==id)return;var t=Math.min(1,(n-t0)/dur),e=t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;scrollTo(0,y0+(targetY(id)-y0)*e);if(t<1){navAnim=requestAnimationFrame(step);}else{navLock=null;spy();}}
navAnim=requestAnimationFrame(step);}
['wheel','touchstart','keydown'].forEach(function(ev){addEventListener(ev,function(){if(navLock){navLock=null;cancelAnimationFrame(navAnim);}},{passive:true});});
addEventListener('scroll',function(){if(!spyT){spyT=true;requestAnimationFrame(spy);}},{passive:true});addEventListener('resize',spy);spy();
document.querySelectorAll('[data-t]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();pill.classList.remove('open');mb.setAttribute('aria-expanded','false');goTo(a.dataset.t);});});
(function(){
if(!window.THREE){document.body.classList.add('nogl');return;}
var R;try{R=new THREE.WebGLRenderer({canvas:document.getElementById('gl'),alpha:true,antialias:true});}catch(e){document.body.classList.add('nogl');return;}
var N=5200,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
R.setPixelRatio(Math.min(devicePixelRatio,2));
var S=new THREE.Scene(),C=new THREE.PerspectiveCamera(50,1,.1,50),G=new THREE.Group();C.position.z=7;S.add(G);
function text(str){
var L=str.split('|'),w=1024,h=512,c=document.createElement('canvas');c.width=w;c.height=h;var x=c.getContext('2d'),fs=170,lh=h/L.length;
x.fillStyle='#fff';x.textAlign='center';x.textBaseline='middle';x.font='bold '+fs+'px Arial,Helvetica,sans-serif';
L.forEach(function(s){while(x.measureText(s).width>w*.9&&fs>40){fs-=10;x.font='bold '+fs+'px Arial,Helvetica,sans-serif';}});
L.forEach(function(s,k){x.fillText(s,w/2,(k+.5)*lh+8);});
var d=x.getImageData(0,0,w,h).data,pts=[];
for(var y=0;y<h;y+=2)for(var X=0;X<w;X+=2)if(d[(y*w+X)*4+3]>128)pts.push([(X/w-.5)*8,-(y/h-.5)*4]);
var a=new Float32Array(N*3);
for(var i=0;i<N;i++){var p=pts[(Math.random()*pts.length)|0];a[i*3]=p[0]+(Math.random()-.5)*.03;a[i*3+1]=p[1]+(Math.random()-.5)*.03;a[i*3+2]=(Math.random()-.5)*.25;}
return a;}
function sphere(){var a=new Float32Array(N*3),g=Math.PI*(3-Math.sqrt(5));for(var i=0;i<N;i++){var y=1-2*(i+.5)/N,r=Math.sqrt(1-y*y),t=g*i;a[i*3]=Math.cos(t)*r*2.6;a[i*3+1]=y*2.6;a[i*3+2]=Math.sin(t)*r*2.6;}return a;}
function helix(){var a=new Float32Array(N*3);for(var i=0;i<N;i++){var t=i/N,g=t*Math.PI*10+(i%2?Math.PI:0);a[i*3]=Math.cos(g)*1.5+(Math.random()-.5)*.1;a[i*3+1]=(t-.5)*6.4;a[i*3+2]=Math.sin(g)*1.5+(Math.random()-.5)*.1;}return a;}
function wave(){var a=new Float32Array(N*3),c=72;for(var i=0;i<N;i++){var x=((i%c)/c-.5)*9,z=(((i/c)|0)/(N/c)-.5)*6,w=Math.sin(x*1.3)*Math.cos(z*1.3)*.55;a[i*3]=x;a[i*3+1]=w+z*.4;a[i*3+2]=z*.8;}return a;}
function torus(){var a=new Float32Array(N*3);for(var i=0;i<N;i++){var u=Math.random()*6.2832,v=Math.random()*6.2832,r=2.2+.8*Math.cos(v);a[i*3]=r*Math.cos(u);a[i*3+1]=r*Math.sin(u);a[i*3+2]=.8*Math.sin(v);}return a;}
function cube(){var a=new Float32Array(N*3);for(var i=0;i<N;i++){var ax=i%3,sg=(i%2?1:-1)*1.7,p=[(Math.random()-.5)*3.4,(Math.random()-.5)*3.4,(Math.random()-.5)*3.4];p[ax]=sg;a[i*3]=p[0];a[i*3+1]=p[1];a[i*3+2]=p[2];}return a;}
function galaxy(){var a=new Float32Array(N*3);for(var i=0;i<N;i++){var r=Math.sqrt(Math.random())*3.4,g=r*1.6+(i%3)*2.094+(Math.random()-.5)*.5;a[i*3]=Math.cos(g)*r;a[i*3+1]=Math.sin(g)*r*.5+(Math.random()-.5)*.15;a[i*3+2]=Math.sin(g)*r*.87;}return a;}
var T=[sphere(),torus(),cube(),helix(),wave(),galaxy(),text('THANK|YOU')],TW=[0,0,0,0,0,0,1],OFF=[2.3,0,0,0,0,0,0];
var base=Float32Array.from(T[0]),ov=new Float32Array(N*3),of=new Float32Array(N*3),pos=new Float32Array(N*3);
var geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
var mat=new THREE.PointsMaterial({size:.045,transparent:true,opacity:.9,depthWrite:false});
G.add(new THREE.Points(geo,mat));
function col(){mat.color.set(getComputedStyle(document.documentElement).getPropertyValue('--p').trim()||'#8fd5ff');}
col();matchMedia('(prefers-color-scheme: dark)').addEventListener('change',col);addEventListener('themechange',col);
var mx=9e3,my=9e3,hH=Math.tan(25*Math.PI/180)*7,hW=hH;
function size(){var w=innerWidth,h=innerHeight;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix();hW=hH*C.aspect;G.scale.setScalar(Math.min(1,C.aspect/1.4));G.position.y=C.aspect<1?1.3:.5;}
size();addEventListener('resize',size);
addEventListener('pointermove',function(e){var s=G.scale.x;mx=((e.clientX/innerWidth*2-1)*hW-G.position.x)/s;my=((1-e.clientY/innerHeight*2)*hH-G.position.y)/s;});
document.addEventListener('pointerleave',function(){mx=my=9e3;});
var t=0;
function tick(){
requestAnimationFrame(tick);t+=.016;
var max=document.documentElement.scrollHeight-innerHeight,p=max>0?Math.min(1,Math.max(0,scrollY/max)):0;
var q=p*(T.length-1),i=Math.min(T.length-2,q|0),f=q-i;f=f*f*(3-2*f);
var A=T[i],B=T[i+1],k=rm?1:.07,tw=TW[i]*(1-f)+TW[i+1]*f;
G.rotation.y=rm?0:Math.sin(t*.4)*.5*(1-tw);G.position.x+=((C.aspect>1.25?(OFF[i]*(1-f)+OFF[i+1]*f):0)-G.position.x)*.08;
for(var j=0;j<N*3;j+=3){
for(var c=0;c<3;c++){var tg=A[j+c]+(B[j+c]-A[j+c])*f;base[j+c]+=(tg-base[j+c])*k;}
var dx=base[j]+of[j]-mx,dy=base[j+1]+of[j+1]-my,d2=dx*dx+dy*dy;
if(!rm&&d2<1.21){var d=Math.sqrt(d2)+.001,F=(1.1-d)/1.1*.12;ov[j]+=dx/d*F;ov[j+1]+=dy/d*F;ov[j+2]+=(Math.random()-.5)*F;}
for(var c=0;c<3;c++){ov[j+c]*=.9;of[j+c]=(of[j+c]+ov[j+c])*.95;pos[j+c]=base[j+c]+of[j+c];}
pos[j+1]+=Math.sin(t+j)*.004;
}
geo.attributes.position.needsUpdate=true;R.render(S,C);}
tick();
})();

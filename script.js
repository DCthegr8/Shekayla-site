var b=document.querySelector('.burger'),n=document.getElementById('nav');
b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Close menu':'Open menu')});
n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded','false')}});
var f=document.getElementById('f');if(f)f.addEventListener('submit',function(e){e.preventDefault();var v=document.getElementById('em').value.trim(),m=document.getElementById('m');
m.textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)?'Thanks. You\u2019re on the list.':'Enter a valid email address, like name@example.com.'});
var bf=document.getElementById('bf');if(bf)bf.addEventListener('submit',function(e){e.preventDefault();var m=document.getElementById('bm'),em=document.getElementById('be').value.trim();
m.textContent=/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)&&document.getElementById('bn').value.trim()?'Thanks. Your booking request was received.':'Enter your name and a valid email address so Shekayla can reply.'});
var bv=document.querySelector('.bgvid'),pb=document.querySelector('.vpause');
if(bv&&pb){var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
function sync(){var p=bv.paused;pb.setAttribute('aria-label',p?'Play background video':'Pause background video');pb.classList.toggle('is-paused',p)}
bv.addEventListener('play',sync);bv.addEventListener('pause',sync);
if(rm){bv.removeAttribute('autoplay');bv.pause()}
pb.addEventListener('click',function(){if(bv.paused){var r=bv.play();if(r&&r.catch)r.catch(function(){})}else bv.pause()});sync()}

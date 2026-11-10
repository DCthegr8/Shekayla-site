(function(){
var T={
H:{n:'Helper',tag:'You nurture people.',d:'You notice who needs support and you show up. People trust you because you listen first and care about how everyone is doing.',s:['Empathetic, loyal and dependable','Builds trust and a sense of belonging','Helps others feel seen and valued'],t:'On a team, you are the glue. You keep people connected and make it safe to speak up.',g:['Practice saying no without guilt','Give direct feedback, even when it is uncomfortable','Protect time for your own goals']},
A:{n:'Achiever',tag:'You drive results.',d:'You set goals and go after them. Clear targets and visible progress energize you, and you make decisions quickly.',s:['Focused, decisive and driven','Turns plans into action','Raises the standard for everyone'],t:'On a team, you are the engine. You keep momentum up and finish what was started.',g:['Slow down to hear how others see it','Celebrate wins along the way','Ask for input before you decide']},
T:{n:'Thinker',tag:'You analyze.',d:'You like to understand how things work before you act. You plan carefully, ask good questions and catch details others miss.',s:['Thoughtful, accurate and prepared','Spots risks early','Makes sound, well-researched choices'],t:'On a team, you are the strategist. You make sure the plan holds up.',g:['Decide when you have enough information','Share your thinking out loud sooner','Let good be good enough on small things']},
S:{n:'Socializer',tag:'You connect.',d:'You bring energy into the room and make it easy for people to talk. You see possibilities and you love bringing people together.',s:['Enthusiastic, expressive and inspiring','Builds networks and relationships fast','Keeps morale and creativity high'],t:'On a team, you are the spark. You get people excited and moving together.',g:['Follow through on the details','Leave space for quieter voices','Pick the few ideas that matter most']}};
var Q=[
['When your team gets a new project, you first…',[['H','Check how everyone feels about it'],['A','Set the goal and the deadline'],['T','Gather the facts and make a plan'],['S','Get everyone talking and excited']]],
['A friend would call you the one who…',[['H','always shows up'],['A','gets it done'],['T','has a plan for everything'],['S','lights up the room']]],
['When there is conflict, you tend to…',[['H','check on feelings and smooth things over'],['A','address it directly and move on'],['T','look at what actually happened'],['S','lighten the mood and bring people back together']]],
['Your ideal Saturday is…',[['H','helping someone or spending time with family'],['A','checking off a big goal'],['T','reading or learning something new'],['S','being out with a crowd']]],
['Under pressure, you…',[['H','put other people’s needs first'],['A','push harder'],['T','slow down and analyze'],['S','talk it through with someone']]],
['You make big decisions by asking…',[['H','What is best for the people involved?'],['A','What will get results fastest?'],['T','What do the facts support?'],['S','What feels right, and who is on board?']]],
['In meetings, you are most likely to…',[['H','make sure quieter voices get heard'],['A','keep us on track and on time'],['T','ask the detailed questions'],['S','bring new ideas and energy']]],
['What motivates you most?',[['H','Seeing someone grow because of you'],['A','Hitting a target'],['T','Getting it right'],['S','Connecting with people']]],
['People sometimes say you are too…',[['H','giving'],['A','intense'],['T','cautious'],['S','talkative']]],
['The compliment you like best is…',[['H','“You made me feel supported.”'],['A','“You delivered.”'],['T','“You thought of everything.”'],['S','“You made it fun.”']]],
['You learn best by…',[['H','working with a supportive partner'],['A','jumping in and trying it'],['T','studying first'],['S','joining a group class']]],
['The hardest part of teamwork for you is…',[['H','saying no'],['A','slowing down for others'],['T','deciding without all the information'],['S','staying on the details']]]];
var root=document.getElementById('q');if(!root)return;
var i=0,ans=[],order=[];
function shuf(a){a=a.slice();for(var k=a.length-1;k>0;k--){var j=Math.floor(Math.random()*(k+1)),t=a[k];a[k]=a[j];a[j]=t}return a}
function h(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;')}
function start(){i=0;ans=[];order=Q.map(function(q){return shuf(q[1])});show()}
function show(){
 var q=Q[i],o=order[i];
 root.innerHTML='<div class="qprog" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="'+Q.length+'" aria-valuenow="'+i+'"><i style="width:'+(i/Q.length*100)+'%"></i></div><p class="qcount">Question '+(i+1)+' of '+Q.length+'</p><form novalidate><fieldset><legend tabindex="-1">'+h(q[0])+'</legend>'+o.map(function(x,n){return '<label class="opt"><input type="radio" name="a" value="'+x[0]+'"'+(ans[i]===x[0]?' checked':'')+'><span>'+h(x[1])+'</span></label>'}).join('')+'</fieldset><div class="qnav"><button type="button" class="btn dark" id="bk"'+(i?'':' disabled')+'>Back</button><button type="submit" class="btn" id="nx"'+(ans[i]?'':' disabled')+'>'+(i===Q.length-1?'See my result':'Next')+'</button></div></form>';
 var f=root.querySelector('form'),nx=document.getElementById('nx');
 f.addEventListener('change',function(e){ans[i]=e.target.value;nx.disabled=false});
 f.addEventListener('submit',function(e){e.preventDefault();if(!ans[i])return;if(i<Q.length-1){i++;show()}else result()});
 document.getElementById('bk').addEventListener('click',function(){if(i){i--;show()}});
 root.querySelector('legend').focus({preventScroll:true});
}
function result(){
 var sc={H:0,A:0,T:0,S:0};ans.forEach(function(a){sc[a]++});
 var keys=Object.keys(sc).sort(function(a,b){return sc[b]-sc[a]}),top=sc[keys[0]];
 var tops=keys.filter(function(k){return sc[k]===top}),p=T[tops[0]];
 var name=tops.map(function(k){return T[k].n}).join(' + ');
 var html='<p class="qcount">Your result</p><h3 class="rname" tabindex="-1" id="rn">'+h(name)+'</h3><p class="rtag">'+(tops.length>1?'You blend '+tops.map(function(k){return T[k].n}).join(' and ')+' strengths.':h(p.tag))+'</p>';
 tops.forEach(function(k){var t=T[k];html+=(tops.length>1?'<h3 style="margin-top:1.5rem">'+t.n+'</h3>':'')+'<p>'+h(t.d)+'</p><div class="rgrid"><div><h3>Your strengths</h3><ul>'+t.s.map(function(x){return '<li>'+h(x)+'</li>'}).join('')+'</ul></div><div><h3>To grow</h3><ul>'+t.g.map(function(x){return '<li>'+h(x)+'</li>'}).join('')+'</ul></div></div><p><strong>'+h(t.t)+'</strong></p>'});
 html+='<h3 style="margin:2rem 0 .5rem">Your mix</h3>'+['H','A','T','S'].map(function(k){var pc=Math.round(sc[k]/Q.length*100);return '<div class="sc"><span>'+T[k].n+'</span><div><i style="width:'+pc+'%"></i></div><span>'+pc+'%</span></div>'}).join('');
 html+='<div class="rbtns"><a class="btn" href="speaking.html#book-event">Book a H.A.T.S. session</a><button type="button" class="btn dark" id="rt">Retake the quiz</button></div><p class="qnote">Your answers stay in your browser and are not saved or sent anywhere.</p>';
 root.innerHTML=html;
 document.getElementById('rt').addEventListener('click',start);
 var r=document.getElementById('rn');r.focus({preventScroll:true});root.scrollIntoView({behavior:'smooth',block:'start'});
}
start();
})();

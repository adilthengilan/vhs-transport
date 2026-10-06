const menu=document.querySelector('.menu');
const mobile=document.querySelector('.mobile-nav');
menu?.addEventListener('click',()=>mobile.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

const cards=[...document.querySelectorAll('.service-card')];
cards.forEach(card=>{
  card.addEventListener('mouseenter',()=>cards.forEach(c=>c.classList.remove('active')));
  card.addEventListener('mouseleave',()=>document.querySelector('.service-card')?.classList.add('active'));
});

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');revealObserver.unobserve(e.target)}})
},{threshold:.12});
document.querySelectorAll('.section,.service-card,.fleet-feature,.fleet-row article,.operation-grid article,.vision-card,.contact').forEach(el=>{
  el.classList.add('reveal'); revealObserver.observe(el);
});

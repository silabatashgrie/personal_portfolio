(() => {
const body=document.body, theme=document.querySelector('.theme'), menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
const saved=localStorage.getItem('theme'); if(saved==='light') body.classList.add('light');
if(theme) theme.addEventListener('click',()=>{body.classList.toggle('light');localStorage.setItem('theme',body.classList.contains('light')?'light':'dark');});
if(menu&&nav) menu.addEventListener('click',()=>{nav.classList.toggle('open');menu.textContent=nav.classList.contains('open')?'✕':'☰';});
})();

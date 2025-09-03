
document.addEventListener('DOMContentLoaded',()=>{
  const path=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.main-nav a').forEach(a=>{ if(a.getAttribute('href')===path){a.classList.add('active');} });
});
function showToast(msg){
  let t=document.querySelector('.toast');
  if(!t){ t=document.createElement('div'); t.className='toast'; document.body.appendChild(t); }
  t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'), 2500);
}
document.addEventListener('click', (e)=>{
  const a=e.target.closest('a');
  if(!a) return;
  if(a.textContent.trim().toLowerCase()==='email' || (a.href && a.href.startsWith('mailto:'))){
    const addr='sales@bw-east.com';
    if(navigator.clipboard && window.isSecureContext){
      navigator.clipboard.writeText(addr).then(()=>{
        showToast('Email copied: '+addr+'  (If no mail app opened, paste it)');
      }).catch(()=>{});
    }
  }
});

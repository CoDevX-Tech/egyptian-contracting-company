document.addEventListener('DOMContentLoaded',function(){
  var t=document.getElementById('navToggle'), u=document.getElementById('navList');
  if(t&&u){ t.addEventListener('click',function(){ u.classList.toggle('open'); }); }
});

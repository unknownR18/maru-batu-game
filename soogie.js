let total=0;
var state = 'start';

const form=document.querySelectorAll('.b');
 form.forEach(index=>{
   index.addEventListener('click',()=>{
     if(index.textContent==='〇'||index.textContent==='X'){
       return;
     }
     if(state==='maru'||state==='start'){
     index.innerHTML="〇";
     state='batu'
   }else if(state==='batu'){
     index.innerHTML="X";
     state='maru'
   }
 })
})









 //リセットするボタン//

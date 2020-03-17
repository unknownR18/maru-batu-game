let total=0;
var state = 'start';

const jyunban=document.querySelectorAll('.jyunban');
const form=document.querySelectorAll('.b');
 form.forEach(index=>{
   index.addEventListener('click',()=>{
     if(index.textContent==='〇'||index.textContent==='X'){
       return;
     }
     if(state==='maru'||state==='start'){
     index.innerHTML="〇";
     jyunban[0].textContent="Xの番です";
     state='batu'
      }else if(state==='batu'){
     index.innerHTML="X";
     jyunban[0].textContent="〇の番です";
     state='maru'
   }
 })
})











 //リセットするボタン//

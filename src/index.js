import './style.css';
import { home } from './home.js';
import { today, today_form,createToday } from './today.js';
import { week ,week_form, createWeek} from './week.js';
import { checkEmptyWeek,checkEmptyToday,cancel} from './file.js';

home();
document.querySelector('.mode').addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});



document.querySelector('#home').addEventListener('click',()=>{
    makeActive('home');
    home();
    
});
document.querySelector('#today').addEventListener('click',()=>{
    makeActive('today');
    today();
});
document.querySelector('#week').addEventListener('click',()=>{
    makeActive('week');
    week();
});

document.addEventListener('click',(e)=>{
    if(e.target.getAttribute('class') === 'add_today' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
        today_form();
    }
    if(e.target.getAttribute('class') === 'add_week' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
        week_form();
    }
   if(e.target.getAttribute('class') === 'add_week' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
    }
    if(e.target.getAttribute('id') === 'add_project' ){
        document.querySelector('.popUpContainer').style.display = 'flex';
    }
    if(e.target.getAttribute('id')=== 'cancel'){
        cancel();
        
  
    }
    
    if(e.target.getAttribute('id') === 'week_submit'){
        if(checkEmptyWeek()){
        createWeek();
        cancel();
        }
    }
    if(e.target.getAttribute('id') === 'today_submit'){
        if(checkEmptyToday()){
            createToday();
            cancel();
            }
    }
});

function makeActive(str){
    document.querySelectorAll('.menu').forEach(menu=>menu.classList.remove('active'));
     if(str === 'home'){
        document.querySelector('#home').classList.add('active');
     }else if(str === 'today'){
        document.querySelector('#today').classList.add('active');
    }else if(str === 'week'){
        document.querySelector('#week').classList.add('active');
    }
   
}
document.querySelectorAll('.checkbox').forEach(box=>box.addEventListener('click',(e)=>{
       e.target.parentElement.classList.toggle('checked');
      let key = e.target.getAttribute('id');
      changeTask(key);
}));

document.querySelectorAll('.delete').forEach(edit=>edit.addEventListener('click',(e)=>{
    let key = e.target.parentElement.getAttribute('id');
  localStorage.removeItem(key);
  e.target.parentElement.remove();
}));

function changeTask(k){
    let obj = JSON.parse(localStorage.getItem(localStorage.key(k)));
    localStorage.removeItem(k);
    if(obj.task === 'ND'){
        obj.task = 'done';
    }else{
        obj.task = 'ND';
    }
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}
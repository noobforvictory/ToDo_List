import './style.css';
import { home } from './home.js';
import { today, today_form,createToday } from './today.js';
import { week ,week_form, createWeek} from './week.js';
import { checkEmptyWeek,checkEmptyToday,cancel,editTodayForm,editWeekForm,editTaskToday, editTaskWeek } from './file.js';

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

    if(e.target.getAttribute('class') === 'checkbox'){
        
        e.target.parentElement.classList.toggle('checked');
       let key = e.target.parentElement.getAttribute('id');
       changeTask(key);
    }
    if(e.target.getAttribute('class') === 'material-symbols-rounded delete'){
        let key = e.target.parentElement.getAttribute('id');
         localStorage.removeItem(key);
         e.target.parentElement.remove();
    }

    if(e.target.getAttribute('class') === 'material-symbols-rounded edit'){
        document.querySelector('.popUpContainer').style.display = 'flex';
        let key = e.target.parentElement.getAttribute('id');
        
        editObj(key);
        
        
    }
    if(e.target.getAttribute('class') === 'btn2 edit_submit'){console.log('in')
        let key = e.target.getAttribute('id');console.log(e.target.getAttribute('id'))
        let obj = JSON.parse(localStorage.getItem(key));
        if (obj.belong === 'today'){
            editTaskToday(key);console.log("out")
            today();
            cancel();
            
        }else{
            editTaskWeek(key);
            week();
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




function changeTask(k){
    let obj = JSON.parse(localStorage.getItem(k));
    localStorage.removeItem(k);
    if(obj.task === 'ND'){
        obj.task = 'done';
    }else{
        obj.task = 'ND';
    }
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

function editObj(k){
    let obj = JSON.parse(localStorage.getItem(k));
    if (obj.belong === 'today'){
        editTodayForm(k);
       
        
        
    }else{
        editWeekForm(k);
       
    }
}


import './style.css';
import { home } from './home.js';
import { today, today_form } from './today.js';
import { week ,week_form} from './week.js';


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
        document.querySelector('.popUpContainer').style.display = 'none';
  
    }
    if(e.target.getAttribute('id') === 'today_submit'){

    }
    if(e.target.getAttribute('id') === 'week_submit'){

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
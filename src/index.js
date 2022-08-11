import './style.css';

document.querySelector('.mode').addEventListener('click',()=>{
    document.body.classList.toggle('dark');
});

document.querySelector('.cancel').addEventListener('click',()=>{
    document.querySelector('.popUpContainer').style.display = 'none';
});

document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('expand');
});

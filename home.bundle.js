"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["home"],{

/***/ "./src/file.js":
/*!*********************!*\
  !*** ./src/file.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "checkEmptyToday": () => (/* binding */ checkEmptyToday),
/* harmony export */   "checkEmptyWeek": () => (/* binding */ checkEmptyWeek),
/* harmony export */   "editTaskToday": () => (/* binding */ editTaskToday),
/* harmony export */   "editTaskWeek": () => (/* binding */ editTaskWeek),
/* harmony export */   "editTodayForm": () => (/* binding */ editTodayForm),
/* harmony export */   "editWeekForm": () => (/* binding */ editWeekForm),
/* harmony export */   "projPageRender": () => (/* binding */ projPageRender),
/* harmony export */   "projectList": () => (/* binding */ projectList)
/* harmony export */ });


function checkEmptyWeek(){
    let title = document.getElementById('week_title').value;
        let details = document.getElementById('week_details').value;
        let due_date = document.getElementById('due_date').value;
        let project_name = document.getElementById('project_name').value;
        if(!title || !details || !due_date || !project_name){
            return false;
        }else{
            return true;
        }
}
function checkEmptyToday(){
    let title = document.getElementById('today_title').value;
        let details = document.getElementById('today_details').value;
        let due_date = document.getElementById('due_date').value;
        let project_name = document.getElementById('project_name').value;
        if(!title || !details || !due_date || !project_name){
            return false;
        }else{
            return true;
        }
}

function cancel(){
   
        document.querySelector('.popUpContainer').style.display = 'none';
    
}

function editTodayForm(k){
    let obj = JSON.parse(localStorage.getItem(k));
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"today_title");
    title.value = obj.title;
    const details = document.createElement('textarea');
    details.setAttribute('id',"today_details");
    details.value = obj.details;
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    due_date.value = obj.due_date;
    
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.value = obj.project_name;
     const submit = document.createElement('button');
     
     submit.classList.add('btn2');
     submit.setAttribute('id',obj.project_name);
     submit.classList.add('edit_submit');
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
}
function editWeekForm(k){
    let obj = JSON.parse(localStorage.getItem(k));
   
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"week_title");
    title.value = obj.title;
    const details = document.createElement('textarea');
    details.setAttribute('id',"week_details");
    details.value = obj.details;
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    due_date.value = obj.due_date;
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.value = obj.project_name;
     const submit = document.createElement('button');
     submit.classList.add('btn2');
     submit.setAttribute('id',obj.project_name);
     submit.classList.add('edit_submit');
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
}

function editTaskToday(k){console.log('in')
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('today_title').value;
    obj.details = document.getElementById('today_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);console.log('still in')
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

function editTaskWeek(k){
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('week_title').value;
    obj.details = document.getElementById('week_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

function projectList(){
    let arr = [];
    for(let i = 0; i<localStorage.length; i++){
       arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))).project_name);
    }
    const projects = arr.reduce((obj,item)=>{
        if(!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    },{});
    renderProjects(projects);
}

function renderProjects(projects){
    document.querySelector('.proj_list').innerHTML = '';
   const result = Object.getOwnPropertyNames(projects);
   for(let i =0; i<result.length; i++){
    const project = document.createElement('div');
   
     project.setAttribute('class',result[i]);
     const name = document.createElement('div');
     name.classList.add('projPage');
     const num = document.createElement('div');
     name.textContent = result[i];
    num.textContent = projects[result[i]];
    project.append(name,num);
    document.querySelector('.proj_list').append(project);
    
   }
}

function projPageRender(cls){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const home_page = document.createElement('div');
    home_page.classList.add('home_page');
    content.append(home_page);
    const home1 = document.createElement('div');
    const home2 = document.createElement('div');
    home_page.append(home1,home2);
    
    
        const home_header = document.createElement('div');
        home_header.classList.add('home_header');
        const hh1 = document.createElement('div');
        hh1.textContent = cls;
        const hh2 = document.createElement('div');
        hh2.textContent = 'Due Date';
        home_header.append(hh1,hh2);
        home1.append(home_header);
    for(let i=0; i<localStorage.length; i++){
    
        let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(obj.project_name === cls){
            
        
                
                
               const todo = document.createElement('div');
               todo.classList.add('todo');
               todo.setAttribute('id',obj.project_name);
               const check_box = document.createElement('input');
               check_box.setAttribute('type',"checkbox");
               check_box.classList.add('checkbox');
               const title = document.createElement('div');
               title.textContent = obj.title;
               const due_date = document.createElement('div');
               due_date.classList.add('due_date');
               due_date.textContent = obj.due_date;
               const edit = document.createElement('span');
               edit.classList.add('material-symbols-rounded');
               edit.classList.add('edit');
               edit.textContent = 'edit';
               const del= document.createElement('span');
               del.classList.add('material-symbols-rounded');
               del.classList.add('delete');
               del.textContent = 'delete';
               if(obj.task === 'done'){
                   todo.classList.add('checked');
                  }
               todo.append(check_box,title,due_date,edit,del);
              
               document.querySelector('.content').append(todo);
                
               
           



            

        }
    }
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.js */ "./src/file.js");


function home(){
const content = document.querySelector('.content');
content.innerHTML = '';
const home_page = document.createElement('div');
home_page.classList.add('home_page');
content.append(home_page);
const home1 = document.createElement('div');
const home2 = document.createElement('div');
home_page.append(home1,home2);


    const home_header = document.createElement('div');
    home_header.classList.add('home_header');
    const hh1 = document.createElement('div');
    hh1.textContent = 'Home';
    const hh2 = document.createElement('div');
    hh2.textContent = 'Due Date';
    home_header.append(hh1,hh2);
    home1.append(home_header);

    displayHome();
    (0,_file_js__WEBPACK_IMPORTED_MODULE_0__.projectList)();
}

function displayHome(){
    for(let i=0; i<localStorage.length; i++){
        
     let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
     
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.setAttribute('id',obj.project_name);
    const check_box = document.createElement('input');
    check_box.setAttribute('type',"checkbox");
    check_box.classList.add('checkbox');
    const title = document.createElement('div');
    title.textContent = obj.title;
    const due_date = document.createElement('div');
    due_date.classList.add('due_date');
    due_date.textContent = obj.due_date;
    const edit = document.createElement('span');
    edit.classList.add('material-symbols-rounded');
    edit.classList.add('edit');
    edit.textContent = 'edit';
    const del= document.createElement('span');
    del.classList.add('material-symbols-rounded');
    del.classList.add('delete');
    del.textContent = 'delete';
    if(obj.task === 'done'){
        todo.classList.add('checked');
       }
    todo.append(check_box,title,due_date,edit,del);
   
    document.querySelector('.content').append(todo);
     
    }
 
 }



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/home.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLDBCQUEwQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsbUJBQW1CLHVCQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxHQUFHO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1TndDOztBQUVqQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFXO0FBQ2Y7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvZmlsZS5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW1wdHlXZWVrKCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla19kZXRhaWxzJykudmFsdWU7XG4gICAgICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlO1xuICAgICAgICBpZighdGl0bGUgfHwgIWRldGFpbHMgfHwgIWR1ZV9kYXRlIHx8ICFwcm9qZWN0X25hbWUpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gY2hlY2tFbXB0eVRvZGF5KCl7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X3RpdGxlJykudmFsdWU7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X2RldGFpbHMnKS52YWx1ZTtcbiAgICAgICAgbGV0IGR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7XG4gICAgICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgICAgIGlmKCF0aXRsZSB8fCAhZGV0YWlscyB8fCAhZHVlX2RhdGUgfHwgIXByb2plY3RfbmFtZSl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbCgpe1xuICAgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcENvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9kYXlGb3JtKGspe1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspKTtcbiAgICBjb25zdCBwb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpO1xuICAgIHBvcFVwLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcInRvZGF5X3RpdGxlXCIpO1xuICAgIHRpdGxlLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsXCJ0b2RheV9kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMudmFsdWUgPSBvYmouZGV0YWlscztcbiAgICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJkYXRlXCIpO1xuICAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLFwiZHVlX2RhdGVcIik7XG4gICAgZHVlX2RhdGUudmFsdWUgPSBvYmouZHVlX2RhdGU7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgnaWQnLFwicHJvamVjdF9uYW1lXCIpO1xuICAgIHByb2plY3RfbmFtZS52YWx1ZSA9IG9iai5wcm9qZWN0X25hbWU7XG4gICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICBcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLG9iai5wcm9qZWN0X25hbWUpO1xuICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnZWRpdF9zdWJtaXQnKTtcbiAgICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgaG9sZGVyLmFwcGVuZChkdWVfZGF0ZSxwcm9qZWN0X25hbWUpO1xuICAgIHBvcFVwLmFwcGVuZCh0aXRsZSxkZXRhaWxzLGhvbGRlcixzdWJtaXQpO1xuICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYW5jZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwnKTtcbiAgICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKS5hcHBlbmQoY2FuY2VsKTtcbiBcbn1cbmV4cG9ydCBmdW5jdGlvbiBlZGl0V2Vla0Zvcm0oayl7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpO1xuICAgXG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcbiAgICBwb3BVcC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsXCJ3ZWVrX3RpdGxlXCIpO1xuICAgIHRpdGxlLnZhbHVlID0gb2JqLnRpdGxlO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsXCJ3ZWVrX2RldGFpbHNcIik7XG4gICAgZGV0YWlscy52YWx1ZSA9IG9iai5kZXRhaWxzO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgICBkdWVfZGF0ZS52YWx1ZSA9IG9iai5kdWVfZGF0ZTtcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICAgcHJvamVjdF9uYW1lLnZhbHVlID0gb2JqLnByb2plY3RfbmFtZTtcbiAgICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XG4gICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJyxvYmoucHJvamVjdF9uYW1lKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2VkaXRfc3VibWl0Jyk7XG4gICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza1RvZGF5KGspe2NvbnNvbGUubG9nKCdpbicpXG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpO1xuICAgIFxuICAgIG9iai50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV90aXRsZScpLnZhbHVlO1xuICAgIG9iai5kZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X2RldGFpbHMnKS52YWx1ZTtcbiAgICBvYmouZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZTsgXG4gICAgb2JqLnByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrKTtjb25zb2xlLmxvZygnc3RpbGwgaW4nKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iai5wcm9qZWN0X25hbWUsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFza1dlZWsoayl7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oaykpO1xuICAgIFxuICAgIG9iai50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrX3RpdGxlJykudmFsdWU7XG4gICAgb2JqLmRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla19kZXRhaWxzJykudmFsdWU7XG4gICAgb2JqLmR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7IFxuICAgIG9iai5wcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oayk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ob2JqLnByb2plY3RfbmFtZSxKU09OLnN0cmluZ2lmeShvYmopKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RMaXN0KCl7XG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICBhcnIucHVzaChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKS5wcm9qZWN0X25hbWUpO1xuICAgIH1cbiAgICBjb25zdCBwcm9qZWN0cyA9IGFyci5yZWR1Y2UoKG9iaixpdGVtKT0+e1xuICAgICAgICBpZighb2JqW2l0ZW1dKSB7XG4gICAgICAgICAgICBvYmpbaXRlbV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIG9ialtpdGVtXSsrO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0se30pO1xuICAgIHJlbmRlclByb2plY3RzKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMocHJvamVjdHMpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qX2xpc3QnKS5pbm5lckhUTUwgPSAnJztcbiAgIGNvbnN0IHJlc3VsdCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHByb2plY3RzKTtcbiAgIGZvcihsZXQgaSA9MDsgaTxyZXN1bHQubGVuZ3RoOyBpKyspe1xuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIFxuICAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLHJlc3VsdFtpXSk7XG4gICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qUGFnZScpO1xuICAgICBjb25zdCBudW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgbmFtZS50ZXh0Q29udGVudCA9IHJlc3VsdFtpXTtcbiAgICBudW0udGV4dENvbnRlbnQgPSBwcm9qZWN0c1tyZXN1bHRbaV1dO1xuICAgIHByb2plY3QuYXBwZW5kKG5hbWUsbnVtKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9saXN0JykuYXBwZW5kKHByb2plY3QpO1xuICAgIFxuICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvalBhZ2VSZW5kZXIoY2xzKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IGhvbWVfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVfcGFnZS5jbGFzc0xpc3QuYWRkKCdob21lX3BhZ2UnKTtcbiAgICBjb250ZW50LmFwcGVuZChob21lX3BhZ2UpO1xuICAgIGNvbnN0IGhvbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lX3BhZ2UuYXBwZW5kKGhvbWUxLGhvbWUyKTtcbiAgICBcbiAgICBcbiAgICAgICAgY29uc3QgaG9tZV9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaG9tZV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG9tZV9oZWFkZXInKTtcbiAgICAgICAgY29uc3QgaGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhoMS50ZXh0Q29udGVudCA9IGNscztcbiAgICAgICAgY29uc3QgaGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhoMi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgICAgIGhvbWVfaGVhZGVyLmFwcGVuZChoaDEsaGgyKTtcbiAgICAgICAgaG9tZTEuYXBwZW5kKGhvbWVfaGVhZGVyKTtcbiAgICBmb3IobGV0IGk9MDsgaTxsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgIFxuICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgICAgIGlmKG9iai5wcm9qZWN0X25hbWUgPT09IGNscyl7XG4gICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ3RvZG8nKTtcbiAgICAgICAgICAgICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgICAgICAgICAgICBjb25zdCBjaGVja19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgY2hlY2tfYm94LnNldEF0dHJpYnV0ZSgndHlwZScsXCJjaGVja2JveFwiKTtcbiAgICAgICAgICAgICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICAgICAgICAgICAgICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZV9kYXRlJyk7XG4gICAgICAgICAgICAgICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVfZGF0ZTtcbiAgICAgICAgICAgICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICAgICAgICAgICAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgICAgICAgICAgICAgY29uc3QgZGVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICAgICAgICAgICAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgICAgICAgICBkZWwudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICAgICAgICAgICAgIGlmKG9iai50YXNrID09PSAnZG9uZScpe1xuICAgICAgICAgICAgICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgdG9kby5hcHBlbmQoY2hlY2tfYm94LHRpdGxlLGR1ZV9kYXRlLGVkaXQsZGVsKTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZCh0b2RvKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICBcblxuXG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9maWxlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBob21lKCl7XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG5jb25zdCBob21lX3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVfcGFnZS5jbGFzc0xpc3QuYWRkKCdob21lX3BhZ2UnKTtcbmNvbnRlbnQuYXBwZW5kKGhvbWVfcGFnZSk7XG5jb25zdCBob21lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgaG9tZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmhvbWVfcGFnZS5hcHBlbmQoaG9tZTEsaG9tZTIpO1xuXG5cbiAgICBjb25zdCBob21lX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfaGVhZGVyJyk7XG4gICAgY29uc3QgaGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGgxLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGNvbnN0IGhoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhoMi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgaG9tZV9oZWFkZXIuYXBwZW5kKGhoMSxoaDIpO1xuICAgIGhvbWUxLmFwcGVuZChob21lX2hlYWRlcik7XG5cbiAgICBkaXNwbGF5SG9tZSgpO1xuICAgIHByb2plY3RMaXN0KCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCl7XG4gICAgZm9yKGxldCBpPTA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG4gICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmQodG9kbyk7XG4gICAgIFxuICAgIH1cbiBcbiB9XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
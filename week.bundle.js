"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["week"],{

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

/***/ "./src/week.js":
/*!*********************!*\
  !*** ./src/week.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWeek": () => (/* binding */ createWeek),
/* harmony export */   "week": () => (/* binding */ week),
/* harmony export */   "week_form": () => (/* binding */ week_form)
/* harmony export */ });
/* harmony import */ var _file_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.js */ "./src/file.js");

function week(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const week_page = document.createElement('div');
    week_page.classList.add('week_page');
    content.append(week_page);
    const week1 = document.createElement('div');
    week1.classList.add('week1');
    const week2 = document.createElement('div');
    week_page.append(week1,week2);
    const add_week = document.createElement('button');
    add_week.textContent = '+ Add Tasks';
    add_week.classList.add('add_week');
    week2.append(add_week);
    const week_header = document.createElement('div');
    week_header.classList.add('week_header');
    const wh1 = document.createElement('div');
    wh1.textContent = 'Week';
    const wh2 = document.createElement('div');
    wh2.textContent = 'Due Date';
    week_header.append(wh1,wh2);
    week1.append(week_header);
    displayWeek();
    (0,_file_js__WEBPACK_IMPORTED_MODULE_0__.projectList)();
}



function week_form(){
    const popUp = document.querySelector('.popUp');
    popUp.innerHTML = '';
    const title = document.createElement('input');
    title.setAttribute('type',"text");
    title.setAttribute('id',"week_title");
    title.setAttribute('placeholder', "Title: Laundry");
    const details = document.createElement('textarea');
    details.setAttribute('id',"week_details");
    details.setAttribute('placeholder',"Details: eg.fold laundry at 8pm");
    const holder = document.createElement('div');
    const due_date = document.createElement('input');
    due_date.setAttribute('type', "date");
    due_date.setAttribute('id',"due_date");
    
    const project_name = document.createElement('input');
    project_name.setAttribute('type',"text");
    project_name.setAttribute('id',"project_name");
    project_name.setAttribute('placeholder',"Project name");
     const submit = document.createElement('button');
     submit.classList.add('btn2');
     submit.setAttribute('id',"week_submit");
     submit.textContent = 'Submit';
    holder.append(due_date,project_name);
    popUp.append(title,details,holder,submit);
    const cancel = document.createElement('span');
    cancel.classList.add('material-symbols-rounded');
    cancel.setAttribute('id','cancel');
    cancel.textContent = 'cancel';
    document.querySelector('.popUp').append(cancel);
 
 
 }    


 function createWeek(){
    let title = document.getElementById('week_title').value;
    let details = document.getElementById('week_details').value;
    let due_date = document.getElementById('due_date').value;
    let project_name = document.getElementById('project_name').value;
    let belong = 'week';
    let task = 'ND';
    let obj = createObj(title,details,due_date,project_name,belong,task);
    
    
    let obj_serialised = JSON.stringify(obj);
    localStorage.setItem(obj.project_name,obj_serialised);
    week();
}

function createObj(title,details,due_date,project_name,belong,task){
    return {
        title,
        details,
        due_date,
        project_name,
        belong,
        task
    }
}



 function displayWeek(){
    for(let i=0; i<localStorage.length; i++){
     
     let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
     if(obj.belong === 'week'){
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
    document.querySelector('.week1').append(todo);
     }
    }
    
 }

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/week.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2ZpbGUuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3dlZWsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0VtcHR5V2Vlaygpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrX3RpdGxlJykudmFsdWU7XG4gICAgICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfZGV0YWlscycpLnZhbHVlO1xuICAgICAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZTtcbiAgICAgICAgbGV0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0X25hbWUnKS52YWx1ZTtcbiAgICAgICAgaWYoIXRpdGxlIHx8ICFkZXRhaWxzIHx8ICFkdWVfZGF0ZSB8fCAhcHJvamVjdF9uYW1lKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRW1wdHlUb2RheSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV90aXRsZScpLnZhbHVlO1xuICAgICAgICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV9kZXRhaWxzJykudmFsdWU7XG4gICAgICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgICAgICBsZXQgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlO1xuICAgICAgICBpZighdGl0bGUgfHwgIWRldGFpbHMgfHwgIWR1ZV9kYXRlIHx8ICFwcm9qZWN0X25hbWUpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWwoKXtcbiAgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXBDb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvZGF5Rm9ybShrKXtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrKSk7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcbiAgICBwb3BVcC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsXCJ0b2RheV90aXRsZVwiKTtcbiAgICB0aXRsZS52YWx1ZSA9IG9iai50aXRsZTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwidG9kYXlfZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzLnZhbHVlID0gb2JqLmRldGFpbHM7XG4gICAgY29uc3QgaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiZGF0ZVwiKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcImR1ZV9kYXRlXCIpO1xuICAgIGR1ZV9kYXRlLnZhbHVlID0gb2JqLmR1ZV9kYXRlO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcInByb2plY3RfbmFtZVwiKTtcbiAgICBwcm9qZWN0X25hbWUudmFsdWUgPSBvYmoucHJvamVjdF9uYW1lO1xuICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgXG4gICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XG4gICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJyxvYmoucHJvamVjdF9uYW1lKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2VkaXRfc3VibWl0Jyk7XG4gICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG4gXG59XG5leHBvcnQgZnVuY3Rpb24gZWRpdFdlZWtGb3JtKGspe1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspKTtcbiAgIFxuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla190aXRsZVwiKTtcbiAgICB0aXRsZS52YWx1ZSA9IG9iai50aXRsZTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMudmFsdWUgPSBvYmouZGV0YWlscztcbiAgICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJkYXRlXCIpO1xuICAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLFwiZHVlX2RhdGVcIik7XG4gICAgZHVlX2RhdGUudmFsdWUgPSBvYmouZHVlX2RhdGU7XG4gICAgY29uc3QgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgnaWQnLFwicHJvamVjdF9uYW1lXCIpO1xuICAgIHByb2plY3RfbmFtZS52YWx1ZSA9IG9iai5wcm9qZWN0X25hbWU7XG4gICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICBzdWJtaXQuY2xhc3NMaXN0LmFkZCgnYnRuMicpO1xuICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdlZGl0X3N1Ym1pdCcpO1xuICAgICBzdWJtaXQudGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBob2xkZXIuYXBwZW5kKGR1ZV9kYXRlLHByb2plY3RfbmFtZSk7XG4gICAgcG9wVXAuYXBwZW5kKHRpdGxlLGRldGFpbHMsaG9sZGVyLHN1Ym1pdCk7XG4gICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbCcpO1xuICAgIGNhbmNlbC50ZXh0Q29udGVudCA9ICdjYW5jZWwnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpLmFwcGVuZChjYW5jZWwpO1xuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2tUb2RheShrKXtjb25zb2xlLmxvZygnaW4nKVxuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspKTtcbiAgICBcbiAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXlfdGl0bGUnKS52YWx1ZTtcbiAgICBvYmouZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV9kZXRhaWxzJykudmFsdWU7XG4gICAgb2JqLmR1ZV9kYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZV9kYXRlJykudmFsdWU7IFxuICAgIG9iai5wcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oayk7Y29uc29sZS5sb2coJ3N0aWxsIGluJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLEpTT04uc3RyaW5naWZ5KG9iaikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2tXZWVrKGspe1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGspKTtcbiAgICBcbiAgICBvYmoudGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgIG9iai5kZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfZGV0YWlscycpLnZhbHVlO1xuICAgIG9iai5kdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlOyBcbiAgICBvYmoucHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGspO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iai5wcm9qZWN0X25hbWUsSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0TGlzdCgpe1xuICAgIGxldCBhcnIgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgYXJyLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSkucHJvamVjdF9uYW1lKTtcbiAgICB9XG4gICAgY29uc3QgcHJvamVjdHMgPSBhcnIucmVkdWNlKChvYmosaXRlbSk9PntcbiAgICAgICAgaWYoIW9ialtpdGVtXSkge1xuICAgICAgICAgICAgb2JqW2l0ZW1dID0gMDtcbiAgICAgICAgfVxuICAgICAgICBvYmpbaXRlbV0rKztcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LHt9KTtcbiAgICByZW5kZXJQcm9qZWN0cyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKHByb2plY3RzKXtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJval9saXN0JykuaW5uZXJIVE1MID0gJyc7XG4gICBjb25zdCByZXN1bHQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhwcm9qZWN0cyk7XG4gICBmb3IobGV0IGkgPTA7IGk8cmVzdWx0Lmxlbmd0aDsgaSsrKXtcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICBcbiAgICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJyxyZXN1bHRbaV0pO1xuICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgIG5hbWUuY2xhc3NMaXN0LmFkZCgncHJvalBhZ2UnKTtcbiAgICAgY29uc3QgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgIG5hbWUudGV4dENvbnRlbnQgPSByZXN1bHRbaV07XG4gICAgbnVtLnRleHRDb250ZW50ID0gcHJvamVjdHNbcmVzdWx0W2ldXTtcbiAgICBwcm9qZWN0LmFwcGVuZChuYW1lLG51bSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pfbGlzdCcpLmFwcGVuZChwcm9qZWN0KTtcbiAgICBcbiAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2pQYWdlUmVuZGVyKGNscyl7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcbiAgICBjb25zdCBob21lX3BhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lX3BhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZV9wYWdlJyk7XG4gICAgY29udGVudC5hcHBlbmQoaG9tZV9wYWdlKTtcbiAgICBjb25zdCBob21lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhvbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZV9wYWdlLmFwcGVuZChob21lMSxob21lMik7XG4gICAgXG4gICAgXG4gICAgICAgIGNvbnN0IGhvbWVfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhvbWVfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVfaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGhoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaDEudGV4dENvbnRlbnQgPSBjbHM7XG4gICAgICAgIGNvbnN0IGhoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoaDIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgICAgICBob21lX2hlYWRlci5hcHBlbmQoaGgxLGhoMik7XG4gICAgICAgIGhvbWUxLmFwcGVuZChob21lX2hlYWRlcik7XG4gICAgZm9yKGxldCBpPTA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICBcbiAgICAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgICAgICBpZihvYmoucHJvamVjdF9uYW1lID09PSBjbHMpe1xuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLG9iai5wcm9qZWN0X25hbWUpO1xuICAgICAgICAgICAgICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgIGNoZWNrX2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwiY2hlY2tib3hcIik7XG4gICAgICAgICAgICAgICBjaGVja19ib3guY2xhc3NMaXN0LmFkZCgnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICAgICAgICAgICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgICAgICAgICAgICAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlX2RhdGU7XG4gICAgICAgICAgICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICAgICAgICAgICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgICAgICAgICAgICAgZWRpdC50ZXh0Q29udGVudCA9ICdlZGl0JztcbiAgICAgICAgICAgICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgICAgICAgICAgICAgZGVsLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpO1xuICAgICAgICAgICAgICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgICAgICAgICAgICBpZihvYmoudGFzayA9PT0gJ2RvbmUnKXtcbiAgICAgICAgICAgICAgICAgICB0b2RvLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHRvZG8uYXBwZW5kKGNoZWNrX2JveCx0aXRsZSxkdWVfZGF0ZSxlZGl0LGRlbCk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmQodG9kbyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgXG5cblxuXG4gICAgICAgICAgICBcblxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHByb2plY3RMaXN0IH0gZnJvbSBcIi4vZmlsZS5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHdlZWsoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IHdlZWtfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtfcGFnZS5jbGFzc0xpc3QuYWRkKCd3ZWVrX3BhZ2UnKTtcbiAgICBjb250ZW50LmFwcGVuZCh3ZWVrX3BhZ2UpO1xuICAgIGNvbnN0IHdlZWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2VlazEuY2xhc3NMaXN0LmFkZCgnd2VlazEnKTtcbiAgICBjb25zdCB3ZWVrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtfcGFnZS5hcHBlbmQod2VlazEsd2VlazIpO1xuICAgIGNvbnN0IGFkZF93ZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkX3dlZWsudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFza3MnO1xuICAgIGFkZF93ZWVrLmNsYXNzTGlzdC5hZGQoJ2FkZF93ZWVrJyk7XG4gICAgd2VlazIuYXBwZW5kKGFkZF93ZWVrKTtcbiAgICBjb25zdCB3ZWVrX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdlZWtfaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3dlZWtfaGVhZGVyJyk7XG4gICAgY29uc3Qgd2gxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2gxLnRleHRDb250ZW50ID0gJ1dlZWsnO1xuICAgIGNvbnN0IHdoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHdoMi50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gICAgd2Vla19oZWFkZXIuYXBwZW5kKHdoMSx3aDIpO1xuICAgIHdlZWsxLmFwcGVuZCh3ZWVrX2hlYWRlcik7XG4gICAgZGlzcGxheVdlZWsoKTtcbiAgICBwcm9qZWN0TGlzdCgpO1xufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtfZm9ybSgpe1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJyk7XG4gICAgcG9wVXAuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgndHlwZScsXCJ0ZXh0XCIpO1xuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla190aXRsZVwiKTtcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZTogTGF1bmRyeVwiKTtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBkZXRhaWxzLnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19kZXRhaWxzXCIpO1xuICAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJEZXRhaWxzOiBlZy5mb2xkIGxhdW5kcnkgYXQgOHBtXCIpO1xuICAgIGNvbnN0IGhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkdWVfZGF0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcImRhdGVcIik7XG4gICAgZHVlX2RhdGUuc2V0QXR0cmlidXRlKCdpZCcsXCJkdWVfZGF0ZVwiKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHByb2plY3RfbmFtZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwidGV4dFwiKTtcbiAgICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICAgcHJvamVjdF9uYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLFwiUHJvamVjdCBuYW1lXCIpO1xuICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgc3VibWl0LmNsYXNzTGlzdC5hZGQoJ2J0bjInKTtcbiAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLFwid2Vla19zdWJtaXRcIik7XG4gICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIGhvbGRlci5hcHBlbmQoZHVlX2RhdGUscHJvamVjdF9uYW1lKTtcbiAgICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgICBjb25zdCBjYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2FuY2VsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICAgY2FuY2VsLnRleHRDb250ZW50ID0gJ2NhbmNlbCc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcFVwJykuYXBwZW5kKGNhbmNlbCk7XG4gXG4gXG4gfSAgICBcblxuXG4gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdlZWsoKXtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vla190aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtfZGV0YWlscycpLnZhbHVlO1xuICAgIGxldCBkdWVfZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVfZGF0ZScpLnZhbHVlO1xuICAgIGxldCBwcm9qZWN0X25hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdF9uYW1lJykudmFsdWU7XG4gICAgbGV0IGJlbG9uZyA9ICd3ZWVrJztcbiAgICBsZXQgdGFzayA9ICdORCc7XG4gICAgbGV0IG9iaiA9IGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayk7XG4gICAgXG4gICAgXG4gICAgbGV0IG9ial9zZXJpYWxpc2VkID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvYmoucHJvamVjdF9uYW1lLG9ial9zZXJpYWxpc2VkKTtcbiAgICB3ZWVrKCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIGR1ZV9kYXRlLFxuICAgICAgICBwcm9qZWN0X25hbWUsXG4gICAgICAgIGJlbG9uZyxcbiAgICAgICAgdGFza1xuICAgIH1cbn1cblxuXG5cbiBmdW5jdGlvbiBkaXNwbGF5V2Vlaygpe1xuICAgIGZvcihsZXQgaT0wOyBpPGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgIFxuICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGkpKSk7XG4gICAgIGlmKG9iai5iZWxvbmcgPT09ICd3ZWVrJyl7XG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrMScpLmFwcGVuZCh0b2RvKTtcbiAgICAgfVxuICAgIH1cbiAgICBcbiB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
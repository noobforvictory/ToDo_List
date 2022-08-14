"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["today"],{

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToday": () => (/* binding */ createToday),
/* harmony export */   "today": () => (/* binding */ today),
/* harmony export */   "today_form": () => (/* binding */ today_form)
/* harmony export */ });
function today(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const today_page = document.createElement('div');
    today_page.classList.add('today_page');
    content.append(today_page);
    const today1 = document.createElement('div');
    today1.classList.add('today1');
    const today2 = document.createElement('div');
    today_page.append(today1,today2);
    const add_today = document.createElement('button');
    add_today.textContent = '+ Add Tasks';
    add_today.classList.add('add_today');

    today2.append(add_today);
    const today_header = document.createElement('div');
    today_header.classList.add('today_header');
    const th1 = document.createElement('div');
    th1.textContent = 'Today';
    const th2 = document.createElement('div');
    th2.textContent = 'Due Date';
    today_header.append(th1,th2);

    today1.append(today_header);
    displayToday();
    
    
    }

function today_form(){
   const popUp = document.querySelector('.popUp');
   popUp.innerHTML = '';
   const title = document.createElement('input');
   title.setAttribute('type',"text");
   title.setAttribute('id',"today_title");
   title.setAttribute('placeholder', "Title: Laundry");
   const details = document.createElement('textarea');
   details.setAttribute('id',"today_details");
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
    submit.setAttribute('id',"today_submit");
    submit.classList.add('btn2');
    submit.textContent = 'Submit';
   holder.append(due_date,project_name);
   popUp.append(title,details,holder,submit);
   const cancel = document.createElement('span');
   cancel.classList.add('material-symbols-rounded');
   cancel.setAttribute('id','cancel');
   cancel.textContent = 'cancel';
   document.querySelector('.popUp').append(cancel);


}    

function createToday(){
    let title = document.getElementById('today_title').value;
    let details = document.getElementById('today_details').value;
    let due_date = document.getElementById('due_date').value;
    let project_name = document.getElementById('project_name').value;
    let belong = 'today';
    let task = 'ND';
    let obj = createObj(title,details,due_date,project_name,belong,task);
    
    
    let obj_serialised = JSON.stringify(obj);
    localStorage.setItem(obj.project_name,obj_serialised);
    today();
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

function displayToday(){
   for(let i=0; i<localStorage.length; i++){
    
    let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if(obj.belong === 'today'){
   const todo = document.createElement('div');
   todo.classList.add('todo');
   todo.setAttribute('id',obj.title);
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
   document.querySelector('.today1').append(todo);
    }
   }
   
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/today.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3RvZGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b2RheSgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgdG9kYXlfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5X3BhZ2UuY2xhc3NMaXN0LmFkZCgndG9kYXlfcGFnZScpO1xuICAgIGNvbnRlbnQuYXBwZW5kKHRvZGF5X3BhZ2UpO1xuICAgIGNvbnN0IHRvZGF5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZGF5MS5jbGFzc0xpc3QuYWRkKCd0b2RheTEnKTtcbiAgICBjb25zdCB0b2RheTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheV9wYWdlLmFwcGVuZCh0b2RheTEsdG9kYXkyKTtcbiAgICBjb25zdCBhZGRfdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRfdG9kYXkudGV4dENvbnRlbnQgPSAnKyBBZGQgVGFza3MnO1xuICAgIGFkZF90b2RheS5jbGFzc0xpc3QuYWRkKCdhZGRfdG9kYXknKTtcblxuICAgIHRvZGF5Mi5hcHBlbmQoYWRkX3RvZGF5KTtcbiAgICBjb25zdCB0b2RheV9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RheV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgndG9kYXlfaGVhZGVyJyk7XG4gICAgY29uc3QgdGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGgxLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBjb25zdCB0aDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aDIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIHRvZGF5X2hlYWRlci5hcHBlbmQodGgxLHRoMik7XG5cbiAgICB0b2RheTEuYXBwZW5kKHRvZGF5X2hlYWRlcik7XG4gICAgZGlzcGxheVRvZGF5KCk7XG4gICAgXG4gICAgXG4gICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gdG9kYXlfZm9ybSgpe1xuICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wVXAnKTtcbiAgIHBvcFVwLmlubmVySFRNTCA9ICcnO1xuICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgdGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJyxcInRvZGF5X3RpdGxlXCIpO1xuICAgdGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiVGl0bGU6IExhdW5kcnlcIik7XG4gICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgIGRldGFpbHMuc2V0QXR0cmlidXRlKCdpZCcsXCJ0b2RheV9kZXRhaWxzXCIpO1xuICAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyxcIkRldGFpbHM6IGVnLmZvbGQgbGF1bmRyeSBhdCA4cG1cIik7XG4gICBjb25zdCBob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGNvbnN0IGR1ZV9kYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiZGF0ZVwiKTtcbiAgIGR1ZV9kYXRlLnNldEF0dHJpYnV0ZSgnaWQnLFwiZHVlX2RhdGVcIik7XG4gICBcbiAgIGNvbnN0IHByb2plY3RfbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCd0eXBlJyxcInRleHRcIik7XG4gICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdpZCcsXCJwcm9qZWN0X25hbWVcIik7XG4gICBwcm9qZWN0X25hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsXCJQcm9qZWN0IG5hbWVcIik7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLFwidG9kYXlfc3VibWl0XCIpO1xuICAgIHN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdidG4yJyk7XG4gICAgc3VibWl0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICBob2xkZXIuYXBwZW5kKGR1ZV9kYXRlLHByb2plY3RfbmFtZSk7XG4gICBwb3BVcC5hcHBlbmQodGl0bGUsZGV0YWlscyxob2xkZXIsc3VibWl0KTtcbiAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgIGNhbmNlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsJyk7XG4gICBjYW5jZWwudGV4dENvbnRlbnQgPSAnY2FuY2VsJztcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3BVcCcpLmFwcGVuZChjYW5jZWwpO1xuXG5cbn0gICAgXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RheSgpe1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheV90aXRsZScpLnZhbHVlO1xuICAgIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5X2RldGFpbHMnKS52YWx1ZTtcbiAgICBsZXQgZHVlX2RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlX2RhdGUnKS52YWx1ZTtcbiAgICBsZXQgcHJvamVjdF9uYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RfbmFtZScpLnZhbHVlO1xuICAgIGxldCBiZWxvbmcgPSAndG9kYXknO1xuICAgIGxldCB0YXNrID0gJ05EJztcbiAgICBsZXQgb2JqID0gY3JlYXRlT2JqKHRpdGxlLGRldGFpbHMsZHVlX2RhdGUscHJvamVjdF9uYW1lLGJlbG9uZyx0YXNrKTtcbiAgICBcbiAgICBcbiAgICBsZXQgb2JqX3NlcmlhbGlzZWQgPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG9iai5wcm9qZWN0X25hbWUsb2JqX3NlcmlhbGlzZWQpO1xuICAgIHRvZGF5KCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iaih0aXRsZSxkZXRhaWxzLGR1ZV9kYXRlLHByb2plY3RfbmFtZSxiZWxvbmcsdGFzayl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRldGFpbHMsXG4gICAgICAgIGR1ZV9kYXRlLFxuICAgICAgICBwcm9qZWN0X25hbWUsXG4gICAgICAgIGJlbG9uZyxcbiAgICAgICAgdGFza1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvZGF5KCl7XG4gICBmb3IobGV0IGk9MDsgaTxsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgIFxuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICBpZihvYmouYmVsb25nID09PSAndG9kYXknKXtcbiAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgdG9kby5zZXRBdHRyaWJ1dGUoJ2lkJyxvYmoudGl0bGUpO1xuICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIHRpdGxlLnRleHRDb250ZW50ID0gb2JqLnRpdGxlO1xuICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZV9kYXRlJyk7XG4gICBkdWVfZGF0ZS50ZXh0Q29udGVudCA9IG9iai5kdWVfZGF0ZTtcbiAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XG4gICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgY29uc3QgZGVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICBkZWwuY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkJyk7XG4gICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICBkZWwudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgIGlmKG9iai50YXNrID09PSAnZG9uZScpe1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgfVxuICAgdG9kby5hcHBlbmQoY2hlY2tfYm94LHRpdGxlLGR1ZV9kYXRlLGVkaXQsZGVsKTtcbiAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheTEnKS5hcHBlbmQodG9kbyk7XG4gICAgfVxuICAgfVxuICAgXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
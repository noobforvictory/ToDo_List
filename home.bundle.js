"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["home"],{

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home": () => (/* binding */ home)
/* harmony export */ });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhvbWUoKXtcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuY29udGVudC5pbm5lckhUTUwgPSAnJztcbmNvbnN0IGhvbWVfcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZV9wYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVfcGFnZScpO1xuY29udGVudC5hcHBlbmQoaG9tZV9wYWdlKTtcbmNvbnN0IGhvbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBob21lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaG9tZV9wYWdlLmFwcGVuZChob21lMSxob21lMik7XG5cblxuICAgIGNvbnN0IGhvbWVfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZV9oZWFkZXIuY2xhc3NMaXN0LmFkZCgnaG9tZV9oZWFkZXInKTtcbiAgICBjb25zdCBoaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaDEudGV4dENvbnRlbnQgPSAnSG9tZSc7XG4gICAgY29uc3QgaGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGgyLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgICBob21lX2hlYWRlci5hcHBlbmQoaGgxLGhoMik7XG4gICAgaG9tZTEuYXBwZW5kKGhvbWVfaGVhZGVyKTtcblxuICAgIGRpc3BsYXlIb21lKCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIb21lKCl7XG4gICAgZm9yKGxldCBpPTA7IGk8bG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgXG4gICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpKTtcbiAgICAgXG4gICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgndG9kbycpO1xuICAgIHRvZG8uc2V0QXR0cmlidXRlKCdpZCcsb2JqLnByb2plY3RfbmFtZSk7XG4gICAgY29uc3QgY2hlY2tfYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja19ib3guc2V0QXR0cmlidXRlKCd0eXBlJyxcImNoZWNrYm94XCIpO1xuICAgIGNoZWNrX2JveC5jbGFzc0xpc3QuYWRkKCdjaGVja2JveCcpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBvYmoudGl0bGU7XG4gICAgY29uc3QgZHVlX2RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkdWVfZGF0ZS5jbGFzc0xpc3QuYWRkKCdkdWVfZGF0ZScpO1xuICAgIGR1ZV9kYXRlLnRleHRDb250ZW50ID0gb2JqLmR1ZV9kYXRlO1xuICAgIGNvbnN0IGVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ2VkaXQnKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ2VkaXQnO1xuICAgIGNvbnN0IGRlbD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWQnKTtcbiAgICBkZWwuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgZGVsLnRleHRDb250ZW50ID0gJ2RlbGV0ZSc7XG4gICAgaWYob2JqLnRhc2sgPT09ICdkb25lJyl7XG4gICAgICAgIHRvZG8uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgIH1cbiAgICB0b2RvLmFwcGVuZChjaGVja19ib3gsdGl0bGUsZHVlX2RhdGUsZWRpdCxkZWwpO1xuICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5hcHBlbmQodG9kbyk7XG4gICAgIFxuICAgIH1cbiBcbiB9XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
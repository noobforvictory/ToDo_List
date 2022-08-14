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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS44OGZlZmMwNjQ5YmQ4NGU5ZTliOS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaG9tZSgpe1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG5jb250ZW50LmlubmVySFRNTCA9ICcnO1xuY29uc3QgaG9tZV9wYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lX3BhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZV9wYWdlJyk7XG5jb250ZW50LmFwcGVuZChob21lX3BhZ2UpO1xuY29uc3QgaG9tZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGhvbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5ob21lX3BhZ2UuYXBwZW5kKGhvbWUxLGhvbWUyKTtcblxuXG4gICAgY29uc3QgaG9tZV9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lX2hlYWRlci5jbGFzc0xpc3QuYWRkKCdob21lX2hlYWRlcicpO1xuICAgIGNvbnN0IGhoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhoMS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBjb25zdCBoaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoaDIudGV4dENvbnRlbnQgPSAnRHVlIERhdGUnO1xuICAgIGhvbWVfaGVhZGVyLmFwcGVuZChoaDEsaGgyKTtcbiAgICBob21lMS5hcHBlbmQoaG9tZV9oZWFkZXIpO1xuXG4gICAgZGlzcGxheUhvbWUoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKXtcbiAgICBmb3IobGV0IGk9MDsgaTxsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspe1xuICAgICAgICBcbiAgICAgbGV0IG9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlLmtleShpKSkpO1xuICAgICBcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kby5jbGFzc0xpc3QuYWRkKCd0b2RvJyk7XG4gICAgdG9kby5zZXRBdHRyaWJ1dGUoJ2lkJyxvYmoucHJvamVjdF9uYW1lKTtcbiAgICBjb25zdCBjaGVja19ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrX2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLFwiY2hlY2tib3hcIik7XG4gICAgY2hlY2tfYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IG9iai50aXRsZTtcbiAgICBjb25zdCBkdWVfZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGR1ZV9kYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZV9kYXRlJyk7XG4gICAgZHVlX2RhdGUudGV4dENvbnRlbnQgPSBvYmouZHVlX2RhdGU7XG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBlZGl0LmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnZWRpdCcpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnZWRpdCc7XG4gICAgY29uc3QgZGVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtcm91bmRlZCcpO1xuICAgIGRlbC5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKTtcbiAgICBkZWwudGV4dENvbnRlbnQgPSAnZGVsZXRlJztcbiAgICBpZihvYmoudGFzayA9PT0gJ2RvbmUnKXtcbiAgICAgICAgdG9kby5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgfVxuICAgIHRvZG8uYXBwZW5kKGNoZWNrX2JveCx0aXRsZSxkdWVfZGF0ZSxlZGl0LGRlbCk7XG4gICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpLmFwcGVuZCh0b2RvKTtcbiAgICAgXG4gICAgfVxuIFxuIH1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
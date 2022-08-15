

export function checkEmptyWeek(){
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
export function checkEmptyToday(){
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

export function cancel(){
   
        document.querySelector('.popUpContainer').style.display = 'none';
    
}

export function editTodayForm(k){
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
export function editWeekForm(k){
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

export function editTaskToday(k){console.log('in')
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('today_title').value;
    obj.details = document.getElementById('today_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);console.log('still in')
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

export function editTaskWeek(k){
    let obj = JSON.parse(localStorage.getItem(k));
    
    obj.title = document.getElementById('week_title').value;
    obj.details = document.getElementById('week_details').value;
    obj.due_date = document.getElementById('due_date').value; 
    obj.project_name = document.getElementById('project_name').value;
    localStorage.removeItem(k);
    localStorage.setItem(obj.project_name,JSON.stringify(obj));
}

export function projectList(){
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

export function projPageRender(cls){
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
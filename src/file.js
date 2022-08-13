export function checkEmpty(){
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

export function cancel(){
   
        document.querySelector('.popUpContainer').style.display = 'none';
    
}


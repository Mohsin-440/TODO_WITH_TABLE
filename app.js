window.addEventListener('load', ()=>{
    const form = document.querySelector('#task-input-form');
    const input = document.querySelector('#task-input');
    const list_el = document.querySelector('#tb');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
        if(!task){
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement('tr');
        task_el.classList.add('task');

        const task_data = document.createElement('td');
        task_data.classList.add('task-data');

        const task_data_input = document.createElement('input');
        task_data_input.classList.add('table_task_input');
        task_data_input.type= 'text';
        task_data_input.setAttribute('readonly', 'readonly');
        task_data_input.value=task
    

        task_data.appendChild(task_data_input);

        const edit = document.createElement('button');
        edit.classList.add('edit-btn');
        edit.innerText='Edit';

        const btn1 = document.createElement('td');
        btn1.classList.add('btn1');
        
        btn1.appendChild(edit);

        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete-btn');
        delete_btn.innerText='delete';
        const btn2 = document.createElement('td');
        btn2.classList.add('btn2');
        
        btn2.appendChild(delete_btn);

        task_el.appendChild(task_data);
        task_el.appendChild(btn1);
        task_el.appendChild(btn2);
        list_el.appendChild(task_el);
        input.value = "";

        delete_btn.addEventListener('click',()=>{
            list_el.removeChild(task_el);
        })
        edit.addEventListener('click', ()=>{
            if(edit.innerText.toLowerCase() == "edit"){
                task_data_input.removeAttribute('readonly');
                task_data_input.focus();
                edit.innerText = 'Save';
            }else{
                task_data_input.setAttribute('readonly','readonly');
                edit.innerText = 'Edit';
            }
    })
})
})
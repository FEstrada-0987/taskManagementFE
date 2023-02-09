
let allTask = []
 
 window.addEventListener("load", () => { 

    // Modal
     const $openModal = document.querySelector('#create-modal'); //bton id
     const $modalCreate = document.querySelector('.modal'); //contiene todo clase
     const $closeModalCreate = document.querySelector('#close-Modal'); //id boton cancel
    //-------> Formulario 
    const form = document.getElementById('formModal');
    const taskName = document.getElementById('task-Name');
    const selectState = document.getElementById('select-state');
    const descriptionT = document.getElementById('description');

    //----> MI section para mostrar las tareas

    let sectionAllTask = document.getElementById('taskTable');

    //-----> BOTONES

    const buttonCreateModal = document.querySelector('#createTask');

    //---> input buscar tarea
    const searchTask = document.querySelector('#search-Task');

    //const ids = uuidv4();

   
    // Modo oscuro variable
     const btnSwitch = document.querySelector('#switch');


     //-->Modo Oscuro funcion
     btnSwitch.addEventListener('click', () => {
         document.getElementById('darki').classList.toggle('dark');
         document.getElementById('nav').classList.toggle('dark'); 
         document.getElementById('tableFormat').classList.toggle('dark');

        btnSwitch.classList.toggle('active');  
     });


      ////---> Activar el modal
    $openModal.addEventListener('click', () => {
        $modalCreate.classList.add('is-active');
      });
    $closeModalCreate.addEventListener('click', () => {
        $modalCreate.classList.remove('is-active');
     });  
        
 
            
    form.addEventListener('submit', function (e) {
    //      console.log(e)
        e.preventDefault();
        allTask.push({
            title:taskName.value,
            state:selectState.value,
            description: descriptionT.value})
        sectionAllTask.innerHTML = ""
        allTask.forEach((info) => {
                sectionAllTask.innerHTML = `<table class="table" id="transactionTable">
                               <thead>
                                 <tr>
                                   <th>TASK Name😀</th>      
                                   <th>SELECT STATE</th>
                                   <th>DESCRIPTION</th> 
                                   <th>ACTIONS</th>   
                                 </tr>                
                                 <tr>
                                     <td>${taskName.value}</td>      
                                     <td>${selectState.value}</td>
                                     <td>${descriptionT.value}</td>   
                                    <td>
                                         <div class="buttons">
                                             <button class="button is-primary edit">Editar</button>
                                             <button class="button is-warning delete">Eliminar</button>
                                             <div class="file is-small is-info is-right"> <!--//upload button-->
                                                 <label class="file-label">
                                                   <input id="resume"class="file-input" type="file" name="resume"> <!--//upload button-->
                                                   <span class="file-cta">
                                                     <span class="file-icon">
                                                         <i class="fas fa-cloud-upload-alt"></i>
                                                     </span>
                                                     <span class="file-label">
                                                    upload file…
                                                     </span>
                                                   </span>
                                                 </label>
                                               </div>
                                           </div> 
                                     </td>   
                                   </tr>
                             </thead>
                             </table>`                 
         })          

        })


  })
         
        
      


   




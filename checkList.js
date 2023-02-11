
let allTask = []

 window.addEventListener("load", () => {

    // Modal
     const $openModal = document.querySelector('#create-modal'); //bton id noton submit
     const $modalCreate = document.querySelector('.modal'); //contenedor fl modal
     const $closeModalCreate = document.querySelector('#close-Modal'); //id boton cancel
    //-------> Formulario
    const form = document.getElementById('formModal'); // formulario
    const taskName = document.getElementById('task-Name'); // input html nombre de la tarea
    const selectState = document.getElementById('select-state'); // selct html estados de la tarea
    const descriptionT = document.getElementById('description');// inpuot html descripcion de la tarea

    //----> MI section para mostrar las tareas

    let sectionAllTask = document.getElementById('taskTable'); // section para pintar las tareas

    //-----> BOTONES

    // const buttonCreateModal = document.querySelector('#createTask');

    //---> input buscar tarea
    const searchTask = document.getElementById('search-Task'); //input del buscador en el navbar

  


    // Modo oscuro variable
     const btnSwitch = document.querySelector('#switch'); // modo oscuro


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
     function closeModal() {
      $modalCreate.classList.remove('is-active');

     }


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        allTask.push({
            id:crypto.randomUUID(),
            title:taskName.value,
            state:selectState.value,
            description: descriptionT.value})
        sectionAllTask.innerHTML = ""
        allTask.forEach((info) => {
                console.log(info)
                sectionAllTask.innerHTML += `<table class="table" id="transactionTable">
                               <thead>
                                 <tr>
                                   <th>TASK Name😀</th>
                                   <th>SELECT STATE</th>
                                   <th>DESCRIPTION</th>                                   
                                 </tr>
                                 <tr>                                
                                     <td>${info.title}</td>
                                     <td>${info.state}</td>
                                     <td>${info.description}</td>
                                    <td>
                                         <div class="buttons">
                                            <input type="date" id="iddate width="25px"></input>
                                             <button class="button is-primary" id=${info.id}>Edit</button>
                                             <button class="button is-warning" id=${info.id}>Delete</button>
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
            const deleteBtn = document.querySelector(".button is-warning")
            function deleteTask (element){
              element.parentNode.removeChild(element);
            }   
            deleteBtn.addEventListener("click", function (event){
              if( event.target.classList.contains("deleteBtn")){
                const parentElement = event.target.parentNode;

                const confirmDelete = window.confirm("Are you sure you want to delete this task?");
                if(confirmDelete){
                  deleteElement(parentElement);
                }
              }
            })   


      })// cierre subtmit
                //   ok cierres botn delete
                //  }

                 const buttonEdit = document.querySelectorAll('.modal-edit');
                 buttonDelete.forEach(edit => {
                              edit.addEventListener("click", (e) => {

                                       allTask = allTask.filter( taskis => taskis.id !== Number(e.target.id))

                              })
                            }) // ok cierres botn delete
                 

// cierra window load


//FILTER TASK INTENTADO
  searchTask = (str) => {
  const serching = allTask.filter(t => t.title.includes(str))
  return serching
}


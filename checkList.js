

    // Modal
     const $openModal = document.querySelector('#create-modal'); //bton id
     const $modalCreate = document.querySelector('.modal'); //contiene todo clase
     const $closeModalCreate = document.querySelector('#close-Modal'); //id boton cancel
    
    //--> Modo oscuro <---
     const btnSwitch = document.querySelector('#switch');


     //-->Modo Oscuro
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
        
 //-------> Formulario 
    const form = document.getElementById('formModal');
    const taskName = document.getElementById('task-Name');
    const selectState = document.getElementById('select-state');
    const descriptionT = document.getElementById('description');

//----> MI section para mostrar las tareas

    const sectionAllTask = document.getElementById('transactionTable');

 //-----> BOTONES
 
    const buttonCreateModal = document.querySelector('#createTask');
//---> input buscar tarea
    const searchTask = document.querySelector('#search-Task');

   let allTask = []
            
    form.addEventListener('submit', function (e) {
    //      console.log(e)
        e.preventDefault();
        
        const crearTarea = (title,state,description) =>{

          allTask.push({
            title:taskName.value,
            state:selectState.value,
            description: descriptionT.value,
          })
                  return allTask
        } 
               console.log(crearTarea("hola", "si", "probando"))
               console.log(allTask)
               sectionAllTask.innerHTML =""
    })



    //     let transactionFormData = new FormData(form);
    //     let transactionTableRef = document.getElementById("transactionTable");
    //     let newTransactionRow = transactionTableRef.insertRow(-1);
    //     let newTypeCellRef = newTransactionRow.insertCell(0);
    //     newTypeCellRef.textContent = "dfdsfdsf"
    // })
   


     // e.preventDefault(); //nuevo objeto para cada usuario
    //   const addTasks = {
    //     id: uuidv4(),
    //     nameTask: taskName.value,
    //     state: selectState.value,
    //     Description: description.nodeValue,

    //   };
    //   allTask.push(addTasks)
    //   nameTask = '';
    //   state ='';
    //   description.value ='';
    //   paint()
    // })

    // const paint = (nodo, array) => {
    //   nodo.innerHTML = ""
    //   array.forEach(element => {
    //       nodo.innerHTML += `<div>
    //           <p>${element.nameTask.value}</p>
    //           <p>${element.state.value}</p>
    //           <p>${element.description.value}</p>
    //           <button class="button is-primary" id=${element.id}>Eliminar</button>
    //           <button class="button is-warning delete" id=${element.id}>Editar</button>
    //       </div>`
    //   });
    // }
    





  //paint(sectionAllTask,allTask)

  //})
 



   






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
         document.getElementById('header').classList.toggle('dark');
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
    const description = document.getElementById('description');

//----> MI section para mostrar las tareas

    const sectionAllTask = document.getElementById('tableFormat');

 //-----> BOTONES
 
    const buttonCreateModal = document.querySelector('#createTask');


   let allTask = []
            
    form.addEventListener('submit', function (e) {
    //      console.log(e)
    //     e.preventDefault();
    //     let transactionFormData = new FormData(form);
    //     let transactionTableRef = document.getElementById("transactionTable");
    //     let newTransactionRow = transactionTableRef.insertRow(-1);
    //     let newTypeCellRef = newTransactionRow.insertCell(0);
    //     newTypeCellRef.textContent = "dfdsfdsf"
    // })
    buttonCreateModal.addEventListener('click', (e) => {
      e.preventDefault(); //nuevo objeto para cada usuario
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

    const paint = (nodo, array) => {
      nodo.innerHTML = ""
      array.forEach(element => {
          nodo.innerHTML += `<div>
              <p>${element.nameTask.value}</p>
              <p>${element.state.value}</p>
              <p>${element.description.value}</p>
              <button class="btn-delete" id=${element.id}>Eliminar</button>
              <button class="btn-edit" id=${element.id}>Editar</button>
          </div>`
      });
    }
    
  })
  paint(sectionAllTask, allTask)

  })
 



   




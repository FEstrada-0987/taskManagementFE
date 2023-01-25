                //Formulario + Boton crear

window.addEventListener('load', function() {

    let form = document.querySelector(".form");
    let formErrors = document.querySelector("#formError")

    let title = document.querySelector("#title")  
    let titleErrors = document.querySelector("#title-error")

    let state = document.querySelector("#state")
    let stateError = document.querySelector("#state-errors")
    
    const openModal = document.querySelector("#open-modal")
    const containModal = document.querySelector(".container-modal")
    const closeModal = document.querySelector("#close")
    const trashButton = document.querySelector("#trash")
    const editButton = document.querySelector("#edit")

    const toDo = document.getElementById("toDo")

    const btnSwitch = document.querySelector('#switch');

    const dateText = document.getElementById('dateTxt');

   ///Modo Oscuro
    btnSwitch.addEventListener('click', () => {
        document.getElementById('darki').classList.toggle('dark');
        document.getElementById('header').classList.toggle('dark');
        document.getElementById('nav').classList.toggle('dark');
              
        
        btnSwitch.classList.toggle('active');  
    });


    openModal.addEventListener("click", (event) =>{
        event.preventDefault();
        containModal.classList.add("show-modal")
    })
    
    closeModal.addEventListener("click", (event) =>{
        event.preventDefault();
        containModal.classList.remove("show-modal")
    })

    trashButton.addEventListener("click", (event) =>{
        event.preventDefault();
        containModal.classList.remove("show-modal")
    })
   
    editButton.addEventListener("click",(event)=> {
        event.preventDefault()

    })
   
    form.addEventListener("submit", (e) => {

        let errors = false
        e.preventDefault()

        if(title.value.length <+5){
            titleErrors.innerHTML = "Necesito un titulo mejor :)"
            errors = true
        }else{
            stateError.innerHTML = ""
        }

        if(!errors){
            console.log("submit paso correctamente!")
        }
    })

///FECHA del dia en NAV
    const setDate = () => {
        const date = new Date();  
        dateText.textContent = date.toLocaleString('es', {day: 'numeric',weekday: 'long',month: 'short', year: 'numeric'});                                                        
    };
    setDate();

    


    // const createTask = document.getElementById('create-button');
    // const toDoTask = document.getElementById('toDo');
    
    // createTask.addEventListener('click', (event) =>{
    //     const pulsando = event.target.value;
    //     toDoTask.innerHTML = pulsando;
    // })


// const taskContainer = document.getElementById('divTask')

    //  const addNewTask = event => {
    //  event.preventDefault();
    //      const { value } = event.target.taskText;
    //      if(!value) return;

    //     // const task = document.createElement('div');
    //      task.classList.add('task', roundBorder);
    //      task.addEventListener('click')
    //      task.textContent = value;
    //      taskContainer.prepend(task);
    //      event.target.reset();
    //  };

    // const changeTask= event => {
    //     event.target.classList.toggle('done');
    // }

    // const order = () => {
    //     const done = [];
    //     const toDo = [];
    //     tasksContainer.childNodes.forEach( e =>{
    //                 e.classList.contains('done') ? done.push(e) : toDo.push(e)
    // })
    //}
})
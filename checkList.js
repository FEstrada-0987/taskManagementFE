                //Formulario + Boton crear

const tareas =[]

function $(elementByHtml){
    return document.querySelector(elementByHtml)
}

window.addEventListener('load', function() {
            //--> Formulario <---
    let $form = document.querySelector(".form");
    let $formErrors = document.querySelector("#formError")

            //--> Input Titulos <---
    let $title = document.querySelector("#title")  
    let $titleErrors = document.querySelector("#title-error")

           //--> Select Estados <---
    let $state = document.querySelector("#state")
    let $stateErrors = document.querySelector("#state-errors")

          //--> Abre y cierra modal <---
    const openModal = document.querySelector("#open-modal")
    const containModal = document.querySelector(".container-modal")
    const closeModal = document.querySelector("#close")

         //--> Abre y cierra modal <---
    const trashButton = document.querySelector("#trash")
    const editButton = document.querySelector("#edit")
   
         //--> Modo oscuro <---
    const btnSwitch = document.querySelector('#switch');
    
        //--> Array de tareas
    // const tareas = []

    // const dateText = document.getElementById('dateTxt');
    // const $regExpAlpha = /^[a-zA-Z0-9-\sñáéíóúüª!:?'¡].{5,20}$/
         // --> Constantes de columnas html
         const TareaToDo = document.querySelector("#toDo")
         const TareainProgress = document.querySelector("#inProgress")
         const Tareacomplete = document.querySelector("#complete")
        //-->Modo Oscuro
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
   
    $form.addEventListener("submit", (e) => {

        let errors = false
        e.preventDefault()
       

        if($title.value.length <+5){
            $titleErrors.innerHTML = "Necesito un titulo mejor :)"
            errors = true
        }else{
            $titleErrors.innerHTML = ""
        }

        if(!errors){
            console.log("submit paso correctamente!")
        } 
        
        if($state.value.length = " "){
            $stateErrors.innerHTML = "Seleccione una opcion para su tarea"
            errors = true
        }else{
            $stateErrors.innertext = ""
        }

        if(!errors){
            console.log("submit paso correctamente!")
        } 
        
        // paint($containTareas, tareas)

        //  function paint (nodo,datos){
        //     nodo.innerHTML = "";
        //     datos.forEach(tarea => {
        //         nodo.innerHTML +=
        $title.addEventListener('input', (event) => {
            const textoIngresado = event.target.value;
            TareaToDo.innerHTML = textoIngresado;
        })
        $state.addEventListener('select', (event) => {
            const selectIngresado = event.target.value;
            TareaToDo.innerHTML = selectIngresado;
        })
        // TareaToDo.innerHTML +=
        //         `<div class="">
        //         <p>${$title} </p>
        //         <p>${$state} </p>
        //         <button> EDIT</button>
        //         <button> DELETE</button>
        //     </div>`                
        //     });
        // }
        
     })
})

const openModal = document.querySelector("#open-modal")
const containModal = document.querySelector(".container-modal")
const closeModal = document.querySelector("#close")
const btnSwitch = document.querySelector('#switch');
            // Boton Modal

openModal.addEventListener("click", (event) =>{
    event.preventDefault();
    containModal.classList.add("show-modal")
})

closeModal.addEventListener("click", (event) =>{
    event.preventDefault();
    containModal.classList.remove("show-modal")
})

            // Boton Modo Oscuroo


btnSwitch.addEventListener('click', () => {
    document.getElementById('darki').classList.toggle('dark');
    document.getElementById('header').classList.toggle('dark');
    document.getElementById('nav').classList.toggle('dark');      
    btnSwitch.classList.toggle('active');  
});

                //Formulario + Boton crear

window.addEventListener('load', function() {
    let form = document.querySelector(".form");
    let formErrors = document.querySelector("#formError")
})
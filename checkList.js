window.addEventListener('load', function() {
    // Modal
     const $openModal = document.querySelector('#create-modal'); //bton id
     const $modalCreate = document.querySelector('.modal'); //contiene todo clase
     //const $modalBackg = document.querySelector('.modal-background')//el backgroud clase
     const $closeModalCreate = document.querySelector('#close-Modal');
    
    //--> Modo oscuro <---
     const btnSwitch = document.querySelector('#switch');
            
     
     //-->Modo Oscuro
     btnSwitch.addEventListener('click', () => {
         document.getElementById('darki').classList.toggle('dark');
         document.getElementById('nav').classList.toggle('dark'); 
         document.getElementById('header').classList.toggle('dark');         
        btnSwitch.classList.toggle('active');  
     });
      ////---> Activar el modal
      $openModal.addEventListener('click', () => {
   
        $modalCreate.classList.add('is-active');
      });
    $closeModalCreate.addEventListener('click', () => {
        $modalCreate.classList.remove('is-active');
     });    
})

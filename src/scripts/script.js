/* ------------------------------- Coloque sua lógica aqui ------------------------------- */

function showModal (){
    const buttonHeaderModal = document.querySelector('.button__header')
    const modalContainer = document.querySelector('.modal__container')
    const buttonMainModal = document.querySelector('.button__ingress')
    buttonHeaderModal.addEventListener('click', function(){
        modalContainer.showModal()
    })
    buttonMainModal.addEventListener('click', function(){
        modalContainer.showModal()
    })
    closeModal()
}
function closeModal (){
    const buttonCloseModal = document.querySelector('.modal__close')
    const modalContainer = document.querySelector('.modal__container')

    buttonCloseModal.addEventListener('click', function(){
        modalContainer.close()
    })
}
showModal()

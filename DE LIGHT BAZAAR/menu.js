const burGer = document.getElementById('hamburger')
const ham = document.getElementById('ham')
const overLay = document.getElementById('overlay')
function Menu() {
    ham.classList.toggle('active')
    overLay.classList.toggle('active')
}

burGer.addEventListener('click', Menu)
overLay.addEventListener('click', Menu)


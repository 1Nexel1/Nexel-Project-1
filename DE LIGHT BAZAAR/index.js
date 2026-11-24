
const counT = document.getElementById('countcart')
const adDed = document.querySelectorAll('.add')
const page = document.body.dataset.page
let bcart = Number(localStorage.getItem('bcart')) || 0
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

function shopCart() {
if (counT) {
    counT.textContent = bcart
    }
}
adDed.forEach(function(button, index){
    const key = page + 'Added' + index
    if(localStorage.getItem(key)){
        button.textContent = "Added"
    }
    button.addEventListener('click', () => {
        if (localStorage.getItem(key) ) {
            return
        }
        localStorage.setItem(key, 'yes')
        
        const card = button.closest('.prdcard')
        cartItems.push({
            name: card.querySelector('.prdname').textContent.trim(),
            image: card.querySelector('img').getAttribute('src'),
            price: card.querySelector('.order p').textContent.trim()
        })
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        
        bcart++
        localStorage.setItem('bcart', bcart)
        button.textContent = "Added"
        shopCart()
        }
     )
})

const order = document.querySelectorAll('.order .buy')

function getProduct(button){
    const card = button.closest('.prdcard')
    return {
        name: card.querySelector('.prdname').textContent.trim(),
        image: card.querySelector('img').getAttribute('src'),
        price: card.querySelector('.order p').textContent.trim()
    }
}


function addCart(){
    bcart++
    localStorage.setItem('bcart', bcart)
    shopCart()
}

order.forEach(function (info) {
    info.addEventListener('click', () => {localStorage.setItem('selectedproduct', JSON.stringify(getProduct(info))
        )}
    )}
)


shopCart()

const reSet = document.getElementById('reset')

function reset() {
    localStorage.clear()
    location.reload()
}
if (reSet){
reSet.addEventListener('click', reset)
}
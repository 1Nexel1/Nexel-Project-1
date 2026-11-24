const cartList = document.getElementById('cartlist')
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

if (cartItems.length === 0){
  cartList.textContent = 'You Have No Item in Your Cart'
}

cartItems.forEach(function(item){
  const cart = `<div class="prdcard">
      <div class="prdimg">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <p class="prdname">
        ${item.name}
      </p>
      <div class="order">
      <p>${item.price}</p>
      <p> In Stock </p>
      <a href="product.html"><button class="buy"> Order </button></a>
      </div>
      
    </div>
    
    <div class="line"></div>`
  
  cartList.insertAdjacentHTML('beforeend', cart)
  const orderbtn = cartList.firstElementChild.querySelector('.buy')
    orderbtn.addEventListener('click',()=>{
    localStorage.setItem('selectedproduct', JSON.stringify(item))
})

})

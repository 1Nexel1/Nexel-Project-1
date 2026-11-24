const inPut = document.getElementById('input')
const buTTon = document.getElementById('but')
const boDy = document.getElementById('bdy')


function uPDate(){ 
  const text = inPut.value
  const product = `<div class="prdcard">
      <div class="prdimg">
        <img src="images/${text}.jpg" alt="images/${text}.jpg">
      </div>
      
      <div class="order">
      <p>Price: N8000</p>
      <p> In Stock </p>
      <button class="buy"><a href="product.html"> Order </a>
      </button>
      <button class="add">Add to cart</button>
      </div>
      
    </div>
    <p class="prdname">
      Portable Mini Air Humidifier, 7-Colour LED Light, Quiet, Dry-Burn Protection
    </p>
    <div class="line"></div>`
boDy.insertAdjacentHTML('afterbegin', product)
}
    
buTTon.addEventListener('click', uPDate)
  
  
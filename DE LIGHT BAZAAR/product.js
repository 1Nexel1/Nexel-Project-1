const unitPlus = document.getElementById('plus')
const count = document.getElementById('count')
const unitMinus = document.getElementById('minus')
const addtoCart = document.getElementById('add')


let unit = 0

function addOne() {
    
    unit++
    count.textContent = unit
    console.log(add)
}

function minusOne() {
    if(unit>0){
        unit--
        count.textContent = unit
    }
}

unitPlus.addEventListener('click', addOne )
unitMinus.addEventListener('click', minusOne )
addtoCart.addEventListener('click', () => {
    let added = "Added"
    addtoCart.textContent = added
}
)

const toCart = document.getElementById('add')
toCart.addEventListener('click', addCart)



const pName = document.getElementById('pname')
const pImg = document.getElementById('pimg')
const pPrice = document.getElementById('pprice')

const selected = JSON.parse(localStorage.getItem('selectedproduct'))

if (selected) {
    pImg.alt = selected.name
    pImg.src = selected.image
    pName.textContent = selected.name
    pPrice.textContent = selected.price
} else {
    pName.textContent = "No products selected "
}




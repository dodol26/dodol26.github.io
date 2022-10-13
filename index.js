let dbItem = [
    {namaItem: "Hack Americano", harga: 10000, img: "#", promo: false}
]

let dbUser = {
    dodol: {password: "rahasia", email: "tonni.lius26@gmail.com",type: "admin"}
}
function hide(param) {
  document.getElementById(param).style.display = 'none'
}

function show(param) {
  if (document.getElementById(param).tagName === 'div') {
    document.getElementById(param).style.display = 'flex'
  } else if (document.getElementById(param).tagName === 'button') {
    document.getElementById(param).style.display = 'block'
  }
}

function addToPromoCart(){
  let addToCartPromo = document.createElement('div')
  let pictureProduct = document.createElement('div')
  dbItem.map((item) =>{
    const {nama,harga,img,promo} = item
    pictureProduct.setAttribute('width','100%')
    pictureProduct.style.background = `${img}`
    addToCartPromo.appendChild(pictureProduct)
    addToCartPromo.innerHTML = `<div>${nama}</div>`  
    addToCartPromo.innerHTML = `<div>${harga}</div>`  
  })

}
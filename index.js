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

let inputUser = document.getElementById(user-input)
let inputPassword = document.getElementById(password-input)
let inputEmail = document.getElementById(email-input)

function signUp(inputUser, inputPassword, inputEmail){
    if (dbUser[inputUser]){
        alert("User sudah ada, mohon gunakan user lain")
    }else {
        dbUser[inputUser] = {
            password: inputPassword,
            email: inputEmail,
            type: "member",
        }
    }
}

let namaItemInput = document.getElementById(nama-item-input)
let hargaInput = document.getElementById(harga-input)
let imgInput = document.getElementById(img-input)

function addItem(namaItemInput, hargaInput, imgInput){
    dbItem.push({namaItem: namaItemInput, harga: hargaInput, img: imgInput, promo: false})
}

function addPromo(namaItemInput){
    dbItem.map((item)=>{
        const {name, harga, image, promo} = item
        if (namaItemInput === name){
            promo = true
            item["hargaPromo"] = (50/100)*harga
        }

    })
}

function removePromo(namaItemInput){
    dbItem.map((item)=>{
        const {name, harga, image, promo, hargaPromo} = item
        if (namaItemInput === name){
            promo = false
            delete hargaPromo
        }
    })
}

function editItem(namaItemInput, hargaInput, imgInput){
    dbItem.map((item)=>{
        const {name, harga, image, promo} = item
        if (namaItemInput === name){
            name = namaItemInput
            harga = hargaInput
            image = imgInput
        }        
    })
}

function deleteItem(namaItemInput){
    dbItem.map((item)=>{
        const {name, harga, image, promo} = item
        if (namaItemInput === name){
            delete item
        }        
    })
}
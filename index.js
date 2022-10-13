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

let inputUser = document.getElementById(user-input)
let inputPassword = document.getElementById(password-input)
let inputEmail = document.getElementById(email-input)

function signUp(inputUser, inputPassword, inputEmail){
    dbUser[inputUser] = {
        password: inputPassword,
        email: inputEmail,
        type: "member",
    }
}

let namaItem = document.getElementById(nama-item-input)
let harga = document.getElementById(harga-input)
let img = document.getElementById(img-input)

function addItem(namaItem, harga, img){
    dbItem.push({namaItem: namaItem, harga: harga, img: img, promo: false})
}

function addPromo(namaItem){
    for(let i = 0; i < dbItem.length; i++){
        if (namaItem === dbItem[i].namaItem){
            dbItem[i].promo = true
            dbItem[i]["hargaPromo"] = (50/100)*dbItem[i].harga
        }
    }
}

function removePromo(namaItem){
    for(let i = 0; i < dbItem.length; i++){
        if (namaItem === dbItem[i].namaItem){
            dbItem[i].promo = false
            delete dbItem[i].hargaPromo
        }
    }
}

function editItem(namaItem, harga, img){
    for(let i = 0; i < dbItem.length; i++){
        if (namaItem === dbItem[i].namaItem){
            dbItem[i].namaItem = namaItem
            dbItem[i].harga = harga
            dbItem[i].img = img
        }        
    }
}

function deleteItem(namaItem){
    for(let i = 0; i < dbItem.length; i++){
        if (namaItem === dbItem[i].namaItem){
            delete dbItem[i]
        }        
    }
}
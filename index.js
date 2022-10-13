let dbItem = [
    {id:1, namaItem: "Hack Americano", harga: 10000, img: "#", promo: false}
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

let inputUser = document.getElementById("user-input")
let inputPassword = document.getElementById("password-input")
let inputEmail = document.getElementById("email-input")

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

let selectedId = document.getElementById("selected-id")
let namaItemInput = document.getElementById("nama-item-input")
let hargaInput = document.getElementById("harga-input")
let imgInput = document.getElementById("img-input")

function addItem(namaItemInput, hargaInput, imgInput){
    dbItem.push({id: dbItem.length+1, namaItem: namaItemInput, harga: hargaInput, img: imgInput, promo: false})
}

function addPromo(selectedId){
    dbItem.map((item)=>{
        const {id, name, harga, image, promo} = item
        if (selectedId === id){
            promo = true
            item["hargaPromo"] = (50/100)*harga
        }

    })
}

function removePromo(selectedId){
    dbItem.map((item)=>{
      const {id, name, harga, image, promo, hargaPromo} = item
        if (selectedId === id){
            promo = false
            delete hargaPromo
        }
    })
}

function editItem(selectedId, namaItemInput, hargaInput, imgInput){
    dbItem.map((item)=>{
      const {id, name, harga, image, promo} = item
        if (selectedId === id){
            name = namaItemInput
            harga = hargaInput
            image = imgInput
        }        
    })
}

function deleteItem(selectedId){
    dbItem.map((item)=>{
      const {id, name, harga, image, promo} = item
        if (selectedId === id){
            delete item
        }        
    })
}
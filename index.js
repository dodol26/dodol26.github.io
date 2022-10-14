
let dbItem = [
  { id: 1, namaItem: "Hack Americano", harga: 10000, img: "./Produk-unggulan/cup-20_1.png", promo: false, desc: 'kopi yang berasa kopi',quantity:0 },
  { id: 2, namaItem: "item2", harga: 15000, img: "./Produk-unggulan/cup-20_2.png", promo: false, desc: 'kopi yang berasa kopi',quantity:0 },
  { id: 3, namaItem: "item3", harga: 20000, img: "./Produk-unggulan/slider_part_1.png", promo: false, desc: 'kopi yang berasa kopi',quantity:0 },
  { id: 4, namaItem: "item4", harga: 25000, img: "./Produk-unggulan/slider_part_2.png", promo: false, desc: 'kopi yang berasa kopi',quantity:0 },
  { id: 5, namaItem: "item5 ", harga: 25000, img: "./Produk-unggulan/slider_part_2.png", promo: false, desc: 'kopi yang berasa kopi',quantity:0 },
]

dbItem.map((item) => {
  const { id, namaItem, harga, img, promo, desc } = item

  let productCard = document.createElement('div')
  productCard.classList.add('card')
  productCard.classList.add('shadow')
  productCard.style.width = "18rem"
  productCard.style.margin = "0 5px"
  productCard.style.borderRadius = "10px"
  productCard.innerHTML =
    `<img src="${img}" class="card-img-top" style="height:250px;" alt="...">
  <div class="card-body d-flex align-items-center" id="${id}" style="flex-direction:column;">
      <h5 class="card-title">${namaItem}</h5> 
      <p class="card-text" style="font-weight:700;">Rp ${harga}</p>
      <p class="card-text">${desc}</p>
      <a class="btn btn-outline-info" style="float:right" id="add-cart" onclick="addToCart(${id})"> Add to cart <i class="fa fa-cart-plus"
              aria-hidden="true"></i></a>
  </div>
`
  document.getElementById('card-wrapper').appendChild(productCard)

})

let dbUser = {
  dodol: { password: "rahasia", email: "tonni.lius26@gmail.com", type: "admin" },
}
function hide(param) {
  document.getElementById(param).style.display = 'none'
}

function show(param) {
  document.getElementById(param).style.display = 'flex'
}

let inputPassword = document.getElementById("password-input").value
let inputEmail = document.getElementById("email-input").value

function signUp(inputUser, inputPassword, inputEmail) {
  if (!inputPassword) {
    alert("Mohon masukan password")
  } else if (!inputEmail) {
    alert("Mohon masukan email")
  }

  if (dbUser[inputUser]) {
    alert("User sudah ada, mohon gunakan user lain")
  } else {
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

function addItem(namaItemInput, hargaInput, imgInput) {
  dbItem.push({ id: dbItem.length + 1, namaItem: namaItemInput, harga: hargaInput, img: imgInput, promo: false })
}

function addPromo(selectedId) {
  dbItem.map((item) => {
    const { id, name, harga, image, promo } = item
    if (selectedId === id) {
      promo = true
      item["hargaPromo"] = (50 / 100) * harga
    }

  })
}

function removePromo(selectedId) {
  dbItem.map((item) => {
    const { id, name, harga, image, promo, hargaPromo } = item
    if (selectedId === id) {
      promo = false
      delete hargaPromo
    }
  })
}

function editItem(selectedId, namaItemInput, hargaInput, imgInput) {
  dbItem.map((item) => {
    const { id, name, harga, image, promo } = item
    if (selectedId === id) {
      name = namaItemInput
      harga = hargaInput
      image = imgInput
    }
  })
}

function deleteItem(selectedId) {
  dbItem.map((item) => {
    const { id, name, harga, image, promo } = item
    if (selectedId === id) {
      delete item
    }
  })
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});


let klik = 0
function addToCart(param) {
  let totalBill = 0
  let quantity = 0
  let bill = document.createElement('div')
  bill.classList.add('list-bill')
  bill.style.display = 'flex'
  function deleteFromBills(param) {
    let quantity = addToCart(param)
    quantity--
  }
  
  function addToBills(param) {
    let quantity = addToCart(param)
    quantity++
  }
  bill.style.marginTop = '15px'
  dbItem.map((item) => {
    const { id, namaItem, harga, img, promo, desc } = item
    if (id === param) {
      bill.innerHTML =
        `<p style="margin-right:auto;font-weight:700;" class="nama-item">${namaItem}</p>
    <a class="btn btn-danger" style="font-size:0.75rem;height:25px;" onclick="deleteFromBills(${namaItem})">-</a>
    <a class="btn btn-success" style="font-size:0.75rem;height:25px;"  onclick="addToBills(${namaItem})">+</a>`
      document.querySelector('.container-checkout').appendChild(bill)
      totalBill += harga
      quantity++
    }

    return quantity
  })
  let total = document.createElement('div')
  total.style.display = 'flex'
  total.innerHTML = `<div style="margin-right:25px;color:blue;fontw-weight:700;">Price</div>
<span class="price" style="color:black;margin-right:150px;"><b>Rp${totalBill}</b></span>
<span class="price" style="color:black;font-size:1rem;"><b>${quantity}</b></span>`
  document.querySelector('.container-checkout').appendChild(total)
  klik++

  if(klik === 5) {
    let checkout = document.createElement('button')
    checkout.style.width = "100px"
    checkout.style.margin = "35px 0"
    checkout.style.height = "50px"
    checkout.style.backgroundColor = "pink"
    checkout.innerText = 'CHECKOUT'

    document.querySelector('.container-checkout').appendChild(checkout)
  }
}
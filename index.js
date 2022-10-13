<<<<<<< HEAD

=======
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
>>>>>>> a41dedf5ade8a3aad449d08aa723d58e782da866

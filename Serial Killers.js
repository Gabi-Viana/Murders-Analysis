let menu = document.querySelector(".icon-menu")
menu.addEventListener("click", abrirMenu)
                      

function abrirMenu(){


  let itensMenu = document.querySelector("#itens-menu")

   itensMenu.style.display = 'block' 
 
}
 
function fecharMenu() {
   let itensMenu = document.querySelector("#itens-menu")

   itensMenu.style.display = 'none'
   
}
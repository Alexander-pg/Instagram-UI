var hamburguesa = document.getElementById("hamburger_icon")
var various = document.getElementsByClassName("op")
var geta = document.getElementById('hamburger')

function cambiar(){
    geta.classList.toggle("hamburger-pressed")
    const mine = [...various]

    mine.forEach((element)=>{
        element.classList.toggle("opa")
    })
   
}

hamburguesa.addEventListener("click",cambiar)
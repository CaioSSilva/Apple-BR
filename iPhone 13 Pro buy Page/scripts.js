const imagem = document.getElementById("iphone-image");
const tipos = [document.getElementById("iphone-13-pro"),document.getElementById("iphone-13-pro-max")]
const cores = [document.getElementById("green"),document.getElementById("silver"),document.getElementById("gold"),document.getElementById("graphite")]
const arm = [document.getElementById("arm1"),document.getElementById("arm2"),document.getElementById("arm3"),document.getElementById("arm4")]
const finalizeBox = document.getElementById("final-content") 
const OkayButton = document.getElementById("ok")



function trezeProActive(){
    tipos[0].style.outline = "4px solid rgba(0,125,250,.6)"
    tipos[1].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645811022162"
    cores[0].style.outline = "none"
    cores[1].style.outline = "none"
    cores[2].style.outline = "none"
    cores[3].style.outline = "none"
    arm[0].style.outline = "none"
    arm[1].style.outline = "none"
    arm[2].style.outline = "none"
    arm[3].style.outline = "none"
    imagem.classList.remove('maxActive')
    imagem.classList.add('maxNotActive')
}
function trezeProMaxActive(){
    tipos[1].style.outline = "4px solid rgba(0,125,250,.6)"
    tipos[0].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-family-select?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=90&amp;.v=1645811023243"
    cores[0].style.outline = "none"
    cores[1].style.outline = "none"
    cores[2].style.outline = "none"
    cores[3].style.outline = "none"
    arm[0].style.outline = "none"
    arm[1].style.outline = "none"
    arm[2].style.outline = "none"
    arm[3].style.outline = "none"
    imagem.classList.add('maxActive')
    imagem.classList.remove('maxNotActive')
}



function greenActive(){
    cores[0].style.outline = "4px solid rgba(0,125,250,.6)"
    cores[1].style.outline = "none"
    cores[2].style.outline = "none"
    cores[3].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-green-select?wid=470&hei=556&fmt=png-alpha&.v=1644969385505"
}
function silverActive(){
    cores[1].style.outline = "4px solid rgba(0,125,250,.6)"
    cores[0].style.outline = "none"
    cores[2].style.outline = "none"
    cores[3].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345849"
}
function goldActive(){
    cores[2].style.outline = "4px solid rgba(0,125,250,.6)"
    cores[0].style.outline = "none"
    cores[1].style.outline = "none"
    cores[3].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1645552345862"
}
function graphiteActive(){
    cores[3].style.outline = "4px solid rgba(0,125,250,.6)"
    cores[0].style.outline = "none"
    cores[2].style.outline = "none"
    cores[1].style.outline = "none"
    imagem.src = "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1645552346276"
}



function arm1Active(){
    arm[0].style.outline = "4px solid rgba(0,125,250,.6)"
    arm[1].style.outline = "none"
    arm[2].style.outline = "none"
    arm[3].style.outline = "none"
}
function arm2Active(){
    arm[1].style.outline = "4px solid rgba(0,125,250,.6)"
    arm[0].style.outline = "none"
    arm[2].style.outline = "none"
    arm[3].style.outline = "none"
}
function arm3Active(){
    arm[2].style.outline = "4px solid rgba(0,125,250,.6)"
    arm[0].style.outline = "none"
    arm[1].style.outline = "none"
    arm[3].style.outline = "none"
}
function arm4Active(){
    arm[3].style.outline = "4px solid rgba(0,125,250,.6)"
    arm[0].style.outline = "none"
    arm[2].style.outline = "none"
    arm[1].style.outline = "none"
}


function finalizarCompra(){
    finalizeBox.style.display = "flex"
}
function esconderFinal(){
    finalizeBox.style.display = "none"
}
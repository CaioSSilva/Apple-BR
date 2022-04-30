const targets = document.querySelectorAll('[data-animation]')
const classAnimateName = "animate";

function animar(){
    const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
    targets.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(classAnimateName);
        }else{
            element.classList.remove(classAnimateName);
        }
    })
}
window.addEventListener('scroll', function(){
    animar();
})
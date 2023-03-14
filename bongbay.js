
let imgn = document.getElementById("anhnobi");
function init(){
   
    imgn.style.marginLeft = '0px';
    
}
function moveRight(){
    console.log(parseInt(imgn.style.left));
    imgn.style.marginLeft = parseInt(imgn.style.marginLeft)  + 10 + 'px'
}
function quaylai(){
    console.log(parseInt(imgn.style.left));
    imgn.style.marginLeft = parseInt(imgn.style.marginLeft)  - 10 + 'px'
}
window.onload = init()

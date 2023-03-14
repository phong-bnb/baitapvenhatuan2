function init(){
    document.getElementById("no").style.top = "0px";
    document.getElementById("no").style.left = "0px";
}
function clicktrue(){
    alert("<3 làm người yêu anh nhé")
}
function loaibo(){
    document.getElementById("no").style.marginLeft = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random()*100))+'px'
    document.getElementById("no").style.marginTop = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random()*100))+'px'
    console.log( document.getElementById("no"));
    document.getElementById("no").style.marginTop = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random()*100))+'px'
    document.getElementById("no").style.marginRight = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random()*100))+'px'
}
window.onload = init();
// document.getElementById("no").style.marginTop = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random() * 500)) + 'px'
//          document.getElementById("no").style.marginTop = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random() * 500)) + 'px'
//          document.getElementById("no").style.marginLeft = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random() * 400)) + 'px'
//         document.getElementById("no").style.marginRight = parseInt(document.getElementById("no").style.top) + parseInt(Math.floor(Math.random() * 400)) + 'px'
//         console.log(document.getElementById("no"));
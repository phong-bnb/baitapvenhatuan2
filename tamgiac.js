let a = +prompt("Chiều dài canh thứ nhất");
let b = +prompt("Chiều dài cạnh thứ hai");
let c = +prompt("chieu dài cạnh thứ ba");


if ((a + b) > c && (a + c) > b && (b + c) > a) {
    if (
        Math.pow(a, 2) == Math.pow(c, 2) + Math.pow(b, 2) ||
        Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) ||
        Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
        alert("đây là tam giác vuông");
    } else {
        if (a == b && a !== c || a == c && a !== b || b == c && b !== a) {
            alert("đây là tam giác cân")
        }
        else {
            if (a === b === c) {

            } else {
                alert("Tam giác đều")
            }
        }
    }
}
else {
    alert("không là tam giác")
}




// function checkTamGiac(a, b, c) {
//     if ((a + b) > c && (a + c) > b && (b + c) > a) return true;
//     else {
//         return false;
//     }
// }
// function typeOfcheckTamGiac(a, b, c) {
//     if (
//         Math.pow(a, 2) == Math.pow(c, 2) + Math.pow(b, 2) ||
//         Math.pow(b, 2) == Math.pow(a, 2) + Math.pow(c, 2) ||
//         Math.pow(c, 2) == Math.pow(a, 2) + Math.pow(b, 2)) {
//         alert("Day la tam giac Vuong");
//     }
//     if (a === b === c) {
//         alert("Day la tam giac Deu");
//     }
// }
// //     if (a == b) {
// //         console.log("Day la tam giac Deu");
// //     }
// // }


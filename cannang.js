let canNang = +prompt("Nhập số cân nặng")
let chieuCao = +prompt("Nhập chiều cao (đơn vị:cm)")
let BMI = canNang/(chieuCao*chieuCao)
if (BMI<18.5) {
    alert("Under");
}else{
    if (BMI<25){
        alert("Normal")
    }else{
        if (BMI<30) {
            alert("Over")
            
        } else {
            alert("obese")
            
        }
    }
}
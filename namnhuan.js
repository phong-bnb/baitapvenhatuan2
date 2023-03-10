let year = +prompt("Nhập năm vào đây đi con đỗn lì ");
if(year % 4 == 0 ){
    if(year % 100 == 0){
        if(year % 400 == 0){
        alert("Nhuận mẹ rồi");
        }else(alert("Nhuận cái loz má mày "))
    } else{alert("Nhuận mẹ rồi")}
}else{alert("Nhuận cái loz má mày" )}
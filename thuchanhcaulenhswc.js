function tinh() {
    let inra = document.getElementById("thang").value;
    switch (inra) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
            document.getElementById("djtme").innerHTML = "tháng này có 31 ngày"
            break;
case "6":
    case "4":

    case "9":

    case "11":

    document.getElementById("djtme").innerHTML = "tháng này có 30 ngày"
break;
default:
    document.getElementById("djtme").innerHTML = "tháng này có 29 or 28 ngày"
}
 

}

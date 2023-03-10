let browser = prompt("Nhập cái gì cũng được")
switch(browser){
    case "edge":
        alert("You've got the Edge!");
        break;
        case "chrome":
        case "firefox":
            case "Safari":
                case "Opera":
                    alert('Okay we support these browsers too'); 
                    break;
                    default:
                   alert('We hope that this page looks ok!');
                     break;
}

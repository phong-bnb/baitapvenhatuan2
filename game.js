function play() {
    let top = +prompt("Nhập số lớn nhất bạn muốn");
    let tuyChon = +Math.floor(Math.random() * top);

    do {
        console.log(tuyChon);
        let win = +prompt("Nhập số bạn chọn");
        if (win == tuyChon) {
            alert("Bạn đã đúng");
            break;
        } else {
            alert("Bạn đã saiii");
        }

    } while ("random" != "bu");
}

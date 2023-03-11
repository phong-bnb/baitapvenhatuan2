function tamHop(namSinhNam, namSinhNu) {
    // Tính tam hợp
    let hop = (namSinhNam.getFullYear() + namSinhNu.getFullYear()) % 10;
    if (hop > 1 ) {
      hop = 10;
    }
    return hop;
  }
  
  function tamTai(namSinh) {
    // Tính tam tai
    let tai = (namSinh.getFullYear() - 4) % 12;
    return tai;
  }
  
  // Nhập ngày tháng năm sinh của 2 bạn Nam và Nữ
  const namSinhNam = new Date(prompt("Nhập ngày tháng năm sinh của Nam (dạng dd/mm/yyyy): "));
  const namSinhNu = new Date(prompt("Nhập ngày tháng năm sinh của Nữ (dạng dd/mm/yyyy): "));
  
  // Tính tam hợp của 2 bạn
  const tamHopNamNu = tamHop(namSinhNam, namSinhNu);
  
  // Tính tam tai của 2 bạn
  const tamTaiNam = tamTai(namSinhNam);
  const tamTaiNu = tamTai(namSinhNu);
  
  // Kiểm tra xem tam hợp của 2 bạn có giống nhau không
  if (tamHopNamNu === tamTaiNam || tamHopNamNu === tamTaiNu) {
    console.log("Hợp nhau");
  } else {
    console.log("Chưa hợp nhau");
  }
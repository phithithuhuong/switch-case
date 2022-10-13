// lấy giá trị (value) của input
// search gg: get value input js

// Cách 1: sử dụng onclick
// function checkMonth(){
//     let month = +document.getElementById("now").value;
//     switch (month){
//         case 1:
//             alert("Tháng 1 có 31 ngày")
//             break;
//         case 2:
//             alert('Tháng 2 có 28 hoặc 29 ngày')
//             break;
//         case 3:
//             alert('Tháng 3 có 31 ngày')
//             break;
//         case 4:
//             alert('Tháng 4 có 30 ngày')
//             break;
//         case 5:
//             alert('Tháng 5 có 31 ngày')
//             break;
//     }
// }

// Cách 2: sử dụng addEventListener()
let btnCheck = document.getElementById("check");
// addEventListener('click' : xem người dùng nhập gì để xử lý funtion, nếu nhập đúng case sẽ in ra kết quả tương đương
btnCheck.addEventListener('click', function() {
    let month = +document.getElementById("now").value;
    switch (month){
        // document.write : hiển thị ra màn hình
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            // truy xuất đến thẻ p hiển thị kết quả
            document.getElementById("result").innerHTML =`Tháng ${month} có 31 ngày`
            break;
        case 2:
            document.write('Tháng 2 có 28 hoặc 29 ngày')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML =`Tháng ${month} có 30 ngày`// ${month} đưa số vào trong chuỗi
            break;
        default:
            document.write('Số bạn nhâp chưa đúng')
    }
})


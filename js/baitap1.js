/**
 * Author: Nguyễn Minh Quân
 * Function: Bài tập 1 : sắp xếp 3 số theo thứ tự tăng dần
 * Release: 16/07/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 * num1, num2 , num3 
 * 
 *? Khối 2:Các bước xử lý code
 * B1: Tạo giá trị cho ba biến number
 * B2: cho người dùng nhập vào 3 biến number
 * B3: tạo mệnh đề if else  
 *      if(số thứ nhất > số thứ hai ){
 *          if(số thứ hai > số thứ ba){
 *              số thứ ba < số thứ hai < số thứ nhất
 *          }else if(số thứ nhất > số thứ ba){
 *                  số thứ hai < số thứ ba < số thứ nhất
 *                }else{
 *                        số thứ hai < số thứ nhất < số thứ ba                   
 *                      }
 *      }else if(số thứ hai > số thứ ba ){
 *              if(số thứ nhất > số thứ ba){
 *                  số thứ ba < số thứ hai < số thú nhất
 *              }else{
 *                  số thứ nhất < số thứ ba < số thú hai
 *          }
 * }else {
*       số thứ nhât < số thứ hai < số thứ ba
 * }
 *? Khối 3:Kết quả (Output)
 *     in ba số theo thú tự tăng dần
 */


function sapXepBaSo() {
    var num1 = Number(document.getElementById("number1").value);
    console.log(num1);
    var num2 = Number(document.getElementById("number2").value);
    console.log(num2);
    var num3 = Number(document.getElementById("number3").value);
    console.log(num3);

    if (num1 > num2) {
        if (num2 > num3) {
            document.getElementById("alert1").innerHTML = num3 + "<" + num2 + "<" + num1;
        } else if (num1 > num3) {
            document.getElementById("alert1").innerHTML = num2 + "<" + num3 + "<" + num1;
        } else {
            document.getElementById("alert1").innerHTML = num2 + "<" + num1 + "<" + num3;
        }
    } else if (num2 > num3) {
        if (num1 > num3) {
            document.getElementById("alert1").innerHTML = num3 + "<" + num1 + "<" + num2;
        } else {
            document.getElementById("alert1").innerHTML = num1 + "<" + num3 + "<" + num2;
        }
    } else {
        document.getElementById("alert1").innerHTML = num1 + "<" + num2 + "<" + num3;
    }

}

document.getElementById("btn1").onclick = sapXepBaSo;


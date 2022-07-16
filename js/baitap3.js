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
 * B1:  khai báo ba biến number
 * B2:  cho người dùng nhập vào 3 biến number
 * B3:  tạo mệnh đề if else  
 *          tạo điếm đếm 0
 *              nếu num1 chia hết cho 2 ,biến đếm tăng lên 1
 *              nếu num2 chia hết cho 2 ,biến đếm tăng lên 1
 *              nếu num3 chia hết cho 2 ,biến đếm tăng lên 1
 *              in biến đếm là số chẵn
 *              lấy 3 - biến đếm là số lẻ
 *              
 *? Khối 3:Kết quả (Output)
 *     in số lượng số chẵn và số lẻ
 */

function demSo(){
    var num1 = document.getElementById("number11").value;
    var num2 = document.getElementById("number22").value;
    var num3 = document.getElementById("number33").value;
    var count = 0;

    if(num1 % 2 == 0){
        count++;
    }
    
    if(num2 % 2 == 0){
        count++;
    }

    
    if(num3 % 2 == 0){
        count++;
    }

    document.getElementById("alert3").innerHTML = "Có " + count + " số chẵn ,  có " + (3 - Number(count)) + " Số lẻ"  ;


}

document.getElementById("btn3").onclick = demSo;



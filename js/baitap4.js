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



 function timTamGiac(){
    var canh1 = document.getElementById("canh1").value;
    console.log(canh1);
    var canh2 = document.getElementById("canh2").value;
    console.log(canh2);
    var canh3 = document.getElementById("canh3").value;
    console.log(canh3);

    if(canh1 == canh2 && canh2 == canh3){
        document.getElementById("alert4").innerHTML = "Tam giác cần kiểm tra là tam giác đều";
    }else if(canh1 == canh2 || canh2 == canh3 || canh1 == canh3){
        document.getElementById("alert4").innerHTML = "Tam giác cần kiểm tra là tam giác cân";
    }else if(Math.pow(Number(canh1),2) ==  Math.pow(Number(canh2),2) + Math.pow(Number(canh3),2) || Math.pow(Number(canh2),2) ==  Math.pow(Number(canh1),2) + Math.pow(Number(canh3),2) || Math.pow(Number(canh3),2) ==  Math.pow(Number(canh2),2) + Math.pow(Number(canh1),2)){
        document.getElementById("alert4").innerHTML = "Tam giác cần kiểm tra là tam giác vuông";
    }

 }
 document.getElementById("btn4").onclick = timTamGiac;
/**
 * Author: Nguyễn Minh Quân
 * Function: Bài tập 2 : Chào hỏi các thành viên trong gia đình  
 * Release: 16/07/2022
 */

/**
 *? Khối 1: Dữ liệu đang có sẵn (Input)
 * thanhVien 
 * option (Bố, mẹ ,anh trai, em gái )
 * 
 *? Khối 2:Các bước xử lý code
   B1: lấy dữ liệu chọn từ thành viên
 * B2: lấy dữ liệu từ lựa chọn option của người dùng (bố , mẹ , anh trai, em gái) 
 * B3: tạo mệnh đề switch case
 *          từ biến option
 *              trong trường hợp người dùng chọn  "Bố"
 *                  in xin chào Bố
 *              trong trường hợp người dùng chọn "Mẹ"
 *                  in xin chào Mẹ
 *              trong trường hợp người dùng chọn  "Anh Trai"
 *                  in xin chào anh trai
 *              trong trường hợp người dùng chọn  "Em gái"
 *                  in xin chào Em gái
 *              
 *                        
 *      
 *     
 *? Khối 3:Kết quả (Output)
 *     in kết quả
 */


function welcome() {
    var select = document.getElementById('thanhVien');
    var option = select.options[select.selectedIndex].innerHTML;
    switch (option) {
        case "Bố":
            document.getElementById("alert2").innerHTML = "Xin chào bố!";
            break;
        case "Mẹ":
            document.getElementById("alert2").innerHTML = "Xin chào Mẹ";
            break;
        case "Anh Trai":
            document.getElementById("alert2").innerHTML = "Xin chào Anh trai!";
            break;
        case "Em Gái":
            document.getElementById("alert2").innerHTML = "Xin chào Em gái!";
            break;
        default:
            break;
    }

}
document.getElementById("btn2").onclick = welcome;


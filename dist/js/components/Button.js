function activeButton() {
    let toggleButton = document.querySelectorAll(".toggle-button");
    toggleButton.forEach(button => {
        button.addEventListener("click", (e) => {
            e.target.classList.toggle("active")
        })
    })
}
// Đối với 1 hàm gọi event listener thì lần đầu trình duyệt gọi mới gọi hàm và chưa thực hiện load xong event  => gây hiện tượng buộc user phải double click
//  => NÊN ta cần 1 hàm content load trực tiếp event này trong js mà không cần đợi user click vào button để gọi hàm và chờ load event
document.addEventListener("DOMContentLoaded", () => {
    activeButton()
})
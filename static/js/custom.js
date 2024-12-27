function updateCopyrightYear(){
    const now = new Date();
    var fullYear = now.getFullYear();
    document.getElementById("gy_footer_cur_year").innerText = fullYear
}

window.addEventListener('load', function() {
  // 第一个事件处理程序
    updateCopyrightYear()
});

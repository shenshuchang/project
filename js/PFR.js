
function setRem() {
    var ui_w = 375;
    // 获取屏幕的宽度
    var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
    console.log(ui_w, clientWidth);

    // 通过js动态改变html根节点字体大小
    var html_ = document.getElementsByTagName('html')[0];
    html_.style.fontSize = (clientWidth / ui_w) * 10 + 'px';
}
// window.onresize 浏览器被重置大小执行事件
window.onresize = setRem;


// 滚动替换
// function sold() {
//     var scrooltop = document.documentElement.scrollTop || document.body.scrollTop;
//     var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
//     var images = document.getElementsByClassName('images');
//     for (const img of images) {
//         if ((img.offsetTop + 200) <= (scrooltop + clientHeight)) {
//             var realSrc = img.getAttribute("data-realSrc");
//             img.src = realSrc;
//         }
//     }
// }
// window.onload = sold;
// window.onscroll = sold;







// 验证码
var form_input_a = document.getElementsByClassName('form_input_a')[0]
var popup = document.getElementsByClassName('popup')[0];
form_input_a.addEventListener('touchstart', function () {
    var counts = 2;
    var time = setInterval(function () {
        if (counts == 0) {
            counts = 10;
            popup.style.display = 'block';
            clearInterval(time);
        } else {
            form_input_a.innerHTML = '(' + counts + 's)后重获';
            counts--;
        }
    }, 1000);

});


var sjh = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
var Mobile = document.getElementsByClassName('Mobile')[0]
console.log(Mobile);
Mobile.onfocus = function () {
    this.placeholder = '请输入11位手机号'
}


Mobile.onblur = function () {
    if (this.value == '') {
        this.placeholder = '不能为空'
        return false;
    } else if (!sjh.test(this.value)) {
        this.value = '';
        this.placeholder = '输入格式不正确';
        return false;
    } else {
        return true;
    }
}
var CAPTCHA = '123456';
var authCode = document.getElementsByClassName('authCode')[0];
console.log(authCode);
authCode.onfocus = function () {
    this.placeholder = '6位验证码'
}


authCode.onblur = function () {
    if (this.value == '') {
        this.placeholder = '不能为空'
        return false;
    } else if (this.value !== CAPTCHA) {
        this.value = '';
        this.placeholder = '输入格式不正确';
        return false;
    } else {
        return true;
    }
}
var reg = /^[\w+$]{6,12}$/;
var cipher = document.getElementsByClassName('cipher')[0];
console.log(cipher);
cipher.onfocus = function () {
    this.placeholder = '6-12位由字母数字下划线组成的密码'
}


cipher.onblur = function () {
    if (this.value == '') {
        this.placeholder = '不能为空'
        return false;
    } else if (!reg.test(this.value)) {
        this.value = '';
        this.placeholder = '输入格式不正确';
        return false;
    } else {
        return true;
    }
}
var confirmPassword = document.getElementsByClassName('confirmPassword')[0];
console.log(confirmPassword);
confirmPassword.onfocus = function () {
    this.placeholder = '请确认密码'
}


confirmPassword.onblur = function () {
    if (this.value == '') {
        this.placeholder = '不能为空'
        return false;
    } else if (input3.value !== input4.value) {
        this.value = '';
        this.placeholder = '输入密码不相同';
        return false;
    } else {
        return true;
    }
}
var submit = document.getElementsByClassName('submit')[0];
console.log(submit);
submit.ontouchstart = function () {
    if (Mobile.onblur() && authCode.onblur() && cipher.onblur() && confirmPassword.onblur()) {
        window.location.href = "http://127.0.0.1:5501/myLogin.html";
    }
}
var popup = document.getElementsByClassName('popup')[0]
var popuptop_a = document.getElementsByClassName('popuptop_a')[0];
console.log(popuptop_a);
// parentNode找到父节点然后在使用removeChild删除即可
popuptop_a.addEventListener('touchstart', function () {
    popup.style.display = 'none';
});
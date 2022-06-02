var sjh = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
var Mobile = document.getElementsByClassName('Mobile')[0]

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

console.log(Mobile);
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



var submit = document.getElementsByClassName('submit')[0];
console.log(submit);
submit.ontouchstart = function () {
    if (Mobile.onblur() && cipher.onblur()) {
        window.location.href = "http://127.0.0.1:5501/myLogin.html";
    } else {
        alert('请重新输入')
    }
}
var form_span_right = document.getElementsByClassName('form_span_right')[0]
console.log(form_span_right);

var form_input_a = document.getElementsByClassName('form_input_a')[0]
console.log(form_input_a);
var popup = document.getElementsByClassName('popup')[0];
console.log(popup);
var form_span_left = document.getElementsByClassName('form_span_left')[0]
console.log(form_span_left);


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

form_span_right.addEventListener('touchstart', function () {
    form_input_a.style.display = 'block';
    form_span_right.style.borderBottom = ' .3rem solid rgb(255, 138, 0)';
    form_span_left.style.borderBottom = ' .3rem solid rgb(228, 228, 228)';
    submit.innerHTML = '验证并登录'
    authCode.style.display = 'block';
    cipher.style.display = 'none';
});
form_span_left.addEventListener('touchstart', function () {
    form_input_a.style.display = 'none';
    form_span_right.style.borderBottom = '.3rem solid rgb(228, 228, 228) ';
    form_span_left.style.borderBottom = '.3rem solid rgb(255, 138, 0) ';
    submit.innerHTML = '立即登录'
    cipher.style.display = 'block';
    authCode.style.display = 'none';


});

// 验证码
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
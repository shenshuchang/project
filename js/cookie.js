function setCookie(key, val, time) {
    // 存储时间

    var date = new Date();

    date.setDate(date.getDate() + time);

    document.cookie = `${key}=${val};expires=${date}`;

}

// 获取cookie 键 key

function getCookie(key) {
    // 转成数组

    var arry = document.cookie.split('; ');

    // 遍历新数组

    for (const iterator of arry) {
        // 转成小数组

        var newArry = iterator.split('=');

        // 判断新数组[0] == key;

        if (newArry[0] == key) {
            return newArry[1];

        }

    }

}

// 删除当前cookie

function removeCookie(key) {
    // function setCookie(key, val, time)

    this.setCookie(key, '', -1);

}

// 清除cookie

function clearCookie() {
    // 转成数组

    var arry = document.cookie.split('; ');

    // 遍历新数组

    for (const iterator of arry) {
        // 转成小数组

        var newArry = iterator.split('=');

        // 删除每一个

        this.setCookie(newArry[0], '', -1);

    }

}
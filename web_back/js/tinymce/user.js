var baseUrl = 'http://localhost:8000/';


var user = {
    // 退出功能
    logout: function() {
        $.post(baseUrl + 'admin/logout',
            function(res) {
                console.log(res);

                if (res.code === 200) {
                    location.href = './login.html';
                }

            }
        )
    },
    // 登录功能
    login: function(input_txt, password) {
        console.log(input_txt, password);

        $.post(
            baseUrl + 'admin/login', {
                user_name: input_txt,
                password: password
            },
            function(res) {
                console.log(res);
                if (res.code === 200) {
                    // alert('登录成功')
                    location.href = "./index.html";
                } else {
                    alert('登录失败')
                        // $('myModal').modal('show');


                }

            }
        )
    }
}
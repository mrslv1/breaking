var baseUrl = 'http://localhost:8000/';

// 功能模板  把所有得公共样式简化
var category = {
    show: function(callback) {
        $.get(baseUrl + 'admin/category_search', function(res) {
            callback(res)
                // console.log(res);


        })
    }
}
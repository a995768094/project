$(function(){
   $('ul').on('click','li',function(){
        var text = $(this).text()
        if(text == '栏目管理'){
            $('.content').load('/project/page/category.html')
        }  else if(text == '文章管理') {
            $('.content').load('/project/page/article.html')
        } else if(text == '用户管理') {
            $('.content').load('/project/page/user.html')
        } 
   }) 
})
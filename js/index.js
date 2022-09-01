$(function(){
// 获取用户的基本信息
getUserInfo();
// 退出功能
var layer=layui.layer
$('#logout').on('click',function(){
  
    layer.confirm('请问是否退出登录?', {icon: 3, title:'提示'}, function(index){
        //do something
        localStorage.removeItem('token')
    location.href='/login.html'

        layer.close(index);
      });
    
})
});

// 获取用户的基本信息
function getUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        success:function(res){
    if(res.status!==0){
        return layui.layer.msg('获取用户信息失败！')
    }
    // 调用渲染函数
    showUserInfo(res.data)
        },
    
        })  
}
// 渲染用户的基本信息
function showUserInfo(user){
// 获取用户昵称
var name=user.nickname||user.username
// 设置欢迎文本
$('#username').html(name)
// 按需渲染用户的头像
if(user.user_pic!==null){
    $('.userInfo').hide()
    $('.layui-nav-img').attr('src',user.user_pic).show()
}
else{
    $('.layui-nav-img').hide()
    var text=name[0].toUpperCase()
    $('.userInfo').html(text).show()
}
}


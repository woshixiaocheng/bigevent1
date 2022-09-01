$(function(){
// 去注册的交互
$('#link_reg').on('click',function(){
    $('.login-box').hide()
    $('.reg-box').show()
})
// 去登录的交互
$('#link_login').on('click',function(){
    $('.reg-box').hide()
    $('.login-box').show()
})
// 自定义表单验证
var form=layui.form
form.verify({
// 密码验证
    pwd:[
        /^[\S]{6,12}$/
    ,'密码必须6到12位，且不能出现空格'
    ],
// 再次输入密码是否一致验证
repwd:function(value){
var pwd=$('.reg-box [name=password]').val()
var layer=layui.layer
if(pwd!==value){return '密码不一致!'}
}
})
// 监听表单的注册事件
$('#reg').on('submit',function(e){
    e.preventDefault()
    var data={username:$('.reg-box [name=username]').val(),password:$('.reg-box [name=password]').val()}
    $.post('/api/reguser',data,function(res){
        if(res.status!==0){return layer.msg(res.message)}
     layer.msg("注册成功！")
       $('#link_login').click()
    })
})
// 监听表单的登录事件
$('#login').on('submit',function(e){
    e.preventDefault()
    var data={username:$('.login-box [name=username]').val(),password:$('.login-box [name=password]').val()}
    $.post('/api/login',data,function(res){
        if(res.status!==0){return layer.msg(res.message)}
     layer.msg("登录成功！")
    //  跳转至首页
    location.href='/index.html'
    // 存数据token
    localStorage.setItem('token',res.token)
    })
})
});
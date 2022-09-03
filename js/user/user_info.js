$(function(){
    var layer=layui.layer
initUserInfo()
// 自定义表单验证
var form=layui.form
form.verify({
    // 昵称验证
    nick: [
        /^[\S]{2,6}$/
        ,'昵称必须2到6位，且不能出现空格'
      ] 
   
})
// 更新提交用户信息
$('#submit').on('click',function(e){
e.preventDefault()
var data={id:$('[name=id]').val(),username:$('[name=username]').val(),nickname: $('[name=nickname]').val(),email: $('[name=email]').val()}
$.post('/my/userinfo',data,function(res){
    if(res.status!==0){return console.log("更新信息失败！"+res.message)}
    
    layer.msg('更新提交信息成功！')
    window.parent.getUserInfo()
})
})

// 重置信息
$('#redo').on('click',function(e){
    e.preventDefault()
    initUserInfo()
})

});

function initUserInfo(){
    $.ajax({
        method:'GET',
        url:'/my/userinfo',
        success:function(res){
            if(res.status!==0){return console.log("获取信息失败！")}
            // 显示用户信息，给表单赋值
            putInfo(res.data)
        }
    })
}
function putInfo(user){
    $('[name=username]').val(user.username)
    $('[name=nickname]').val(user.nickname)
    $('[name=email]').val(user.email)
    $('[name=id]').val(user.id)
}

// // 更新信息
// function changeInfo(user){
// if(user)
// }
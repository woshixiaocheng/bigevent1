$(function(){
// 修改密码
var layer=layui.layer
var form=layui.form
// 密码的规范验证
form.verify({
    // 密码验证
        pwd:[
            /^[\S]{6,12}$/
        ,'密码必须6到12位，且不能出现空格'
        ],
    // 再次输入密码是否一致验证
    repwd:function(value){
    var pwd=$('[name=newPwd]').val()
    if(pwd!==value){return '密码不一致!'}
    }
    })
$('#change').on('click',function(e){
e.preventDefault()
$.ajax({
    method:'POST',
    url:'/my/updatepwd',
    data:{oldPwd:$('[name=oldPwd]').val(),newPwd:$('[name=newPwd]').val()},
    success:function(res){
        if(res.status!==0){return layer.msg('修改密码失败！')}
        layer.msg('修改密码成功！')
        // 重置表单
        $('.layui-form')[0].reset()
    }
})
})
$('#redo').on('click',function(e){
    e.preventDefault()
    $('.layui-form')[0].reset()
})
});
$.ajaxPrefilter(function(options){
    options.url='http://www.liulongbin.top:3007'+options.url
    if(options.url.indexOf('/my/')!==-1){
      options.headers={
        Authorization:localStorage.getItem('token')||''
    },
    options.complete=function(res){
        // 如果没有成功，强制清空token和强制跳转到登录页面
        if(res.responseJSON.status===1||res.responseJSON.message==='身份验证失败！'){
            localStorage.removeItem('token')
            location.href='/login.html'
        }
            }  
    }
   
})
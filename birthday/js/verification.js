$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value;  
    var pwd=document.getElementById("pwd").value;
    if(userName=="鞠思瑞" &&  pwd=="0228"){
    	$('#h').text("欢迎回来！");
		event.preventDefault();
		$('form').fadeOut(500);
		$('.wrapper').addClass('form-success');
		setTimeout(function(){location.href="BirthdayCake.html";},4000);
	}
	else{
		alert("用户名或密码不正确！");
	}
});

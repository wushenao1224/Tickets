$("#backstageName").blur(backstageName);
function backstageName(){
	var  backstageName=$("#backstageName").val();
	if(backstageName==""){
		$("#backstageName").parent().parent().addClass("has-error");
		$("#backstageName").parent().next().text("请输入管理员名！");
		return false;
	}else{
		$("#backstageName").parent().parent().removeClass("has-error");
		$("#backstageName").parent().parent().addClass("has-success");
		$("#backstageName").parent().next().text("");
	}
	return true;
}
$("#backstagePassword").blur(backstagePassword);
function backstagePassword(){
	var  backstagePassword=$("#backstagePassword").val();
	if(backstagePassword==""){
		$("#backstagePassword").parent().parent().addClass("has-error");
		$("#backstagePassword").parent().next().text("请输入管理员密码！");
		return false;
	}else{
		$("#backstagePassword").parent().parent().removeClass("has-error");
		$("#backstagePassword").parent().parent().addClass("has-success");
		$("#backstagePassword").parent().next().text("");
	}
	if(backstagePassword.length<6){
		$("#backstagePassword").parent().parent().addClass("has-error");
		$("#backstagePassword").parent().next().text("密码小于六位数！");
		return false;
	}else{
		$("#backstagePassword").parent().parent().removeClass("has-error");
		$("#backstagePassword").parent().parent().addClass("has-success");
		$("#backstagePassword").parent().next().text("");
	}
	return true;
}
$("#backstageLongin").submit(function(){
	if(!backstageName()) return false;
	if(!backstagePassword()) return false;
	return true;
})
$(".shouye").click(function(){
	location.href="./home";
})
//成功或失败提示信息
function addTiShi(info,styleClass){
	$("body").append("<div class='btn "+styleClass+" type_TiShi'>"+info+"<div>");
	$(".type_TiShi").fadeOut(6000,function(){
		$(".type_TiShi").remove();
	})
}
//信息提示
tishi();
function tishi(){
	var tishi=$("#backstageLongin").attr("tishi");
	if(tishi=="8"){
		addTiShi("管理员用户名或密码错误！","btn-danger");
	}
	
}
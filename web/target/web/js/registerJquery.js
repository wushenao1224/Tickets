$("#inputText").blur(textname);
$("#inputPassword").blur(passwordtext);
$("#inputPasswordnew").blur(passwordnew);
$("#formregister").submit(function(){
	if(!textname()) return false;
	if(!passwordtext())  return false;
	if(!passwordnew())  return false;
	if(!checkedradio())  return false;
	return true;
})
function textname(){
	var name=$("#inputText").val();
	
	if(name==""){
		$("#inputText").parent().parent().addClass("has-error");
		$("#inputText").parent().next().text("昵称不能为空！");
		return false;
	}else{
		$.post("./userAjax","name="+name,function(data){
			if(data=="0"){
				$("#inputText").parent().parent().removeClass("has-error");
				$("#inputText").parent().parent().addClass("has-success");
				$("#inputText").parent().next().text("");
			}else{
				$("#inputText").parent().parent().addClass("has-error");
				$("#inputText").parent().next().text("昵称被占用！");
				
			}
		})
		if($("#inputText").parent().next().text()=="昵称被占用！"){
			return false;
		}
	}
	
	return true;
}
function passwordtext(){
	var password=$("#inputPassword").val();
	if(password==""){
		$("#inputPassword").parent().parent().addClass("has-error");
		$("#inputPassword").parent().next().text("密码不能为空！");
		return false;
	}else{
		if(password.length<=6){
			$("#inputPassword").parent().parent().addClass("has-error");
			$("#inputPassword").parent().next().text("密码不能小于六位！");
			return false;
		}
		$("#inputPassword").parent().parent().removeClass("has-error");
		$("#inputPassword").parent().parent().addClass("has-success");
		$("#inputPassword").parent().next().text("");
	}
	return true;
}
function checkedradio(){
	var checkedval=$(":radio:checked").val();
	if(checkedval==undefined){
		$("#checked").parent().addClass("has-error");
		$("#checked").text("请选择性别");
		return false;
	}else{
		$("#checked").parent().removeClass("has-error");
		$("#checked").parent().addClass("has-success");
		$("#checked").text("")
	}
	return true;
}
function passwordnew(){
	var password=$("#inputPassword").val();
	var passwordnew=$("#inputPasswordnew").val();
	if(password==""){
		$("#inputPassword").parent().parent().addClass("has-error");
		$("#inputPassword").parent().next().text("密码不能为空！");
		return false;
	}
	if(password!=passwordnew){
		$("#inputPasswordnew").parent().parent().addClass("has-error");
		$("#inputPasswordnew").parent().next().text("请重新确认密码！");
		return false;
	}else{
		$("#inputPasswordnew").parent().parent().removeClass("has-error");
		$("#inputPasswordnew").parent().parent().addClass("has-success");
		$("#inputPasswordnew").parent().next().text("");
	}
	return true;
}
$(".shouye").click(function(){
	location.href="./home";
})

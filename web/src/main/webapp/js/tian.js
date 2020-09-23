$("#name").blur(nameBlur);
function nameBlur(){
	var name=$("#name").val();
	var pan=true;
	if(name==null||name.trim()==""){
		alert("游戏名不能为空！");
		return false;
	}else{
		$.post("./tianName","name="+name,function(Data){
			if(Data==false){
				pan=Data;
				$("#name").parent().next().text("游戏名称不能重复");
			}
		})
		return pan;
	}
	return true;
}
$("#formTian").submit(function(){
	if(!nameBlur()) return false;
	if(function(){
		var year=$("#year").val();
		if(year==null||year.trim()==""){
			alert("年份不能为空");
			return false;
		}
		if(year.length()!=4||parseInt(year)<999||parseInt(year)>=99999){
			alert("发行年份应该是四位数字，请重新输入");
			return false;
		}
	})
	return true;
});
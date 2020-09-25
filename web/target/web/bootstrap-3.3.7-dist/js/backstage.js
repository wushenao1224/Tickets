//所有城市
var city= [
'北京市',
'天津市',
'石家庄市',
'唐山市',
'秦皇岛市',
'邯郸市',
'邢台市',
'保定市',
'张家口市',
'承德市',
'沧州市',
'廊坊市',
'衡水市',
'省直辖县',
'太原市',
'大同市',
'阳泉市',
'长治市',
'晋城市',
'朔州市',
'晋中市',
'运城市',
'忻州市',
'临汾市',
'吕梁市',
'呼和浩特市',
'包头市',
'乌海市',
'赤峰市',
'通辽市',
'鄂尔多斯市',
'呼伦贝尔市',
'巴彦淖尔市',
'乌兰察布市',
'兴安盟',
'锡林郭勒盟',
'阿拉善盟',
'沈阳市',
'大连市',
'鞍山市',
'抚顺市',
'本溪市',
'丹东市',
'锦州市',
'营口市',
'阜新市',
'辽阳市',
'盘锦市',
'铁岭市',
'朝阳市',
'葫芦岛市',
'长春市',
'吉林市',
'四平市',
'辽源市',
'通化市',
'白山市',
'松原市',
'白城市',
'延边朝鲜族自治州',
'哈尔滨市',
'齐齐哈尔市',
'鸡西市',
'鹤岗市',
'双鸭山市',
'大庆市',
'伊春市',
'佳木斯市',
'七台河市',
'牡丹江市',
'黑河市',
'绥化市',
'大兴安岭地区',
'上海市',
'南京市',
'无锡市',
'徐州市',
'常州市',
'苏州市',
'南通市',
'连云港市',
'淮安市',
'盐城市',
'扬州市',
'镇江市',
'泰州市',
'宿迁市',
'杭州市',
'宁波市',
'温州市',
'嘉兴市',
'湖州市',
'绍兴市',
'金华市',
'衢州市',
'舟山市',
'台州市',
'丽水市',
'合肥市',
'芜湖市',
'蚌埠市',
'淮南市',
'马鞍山市',
'淮北市',
'铜陵市',
'安庆市',
'黄山市',
'滁州市',
'阜阳市',
'宿州市',
'六安市',
'亳州市',
'池州市',
'宣城市',
'福州市',
'厦门市',
'莆田市',
'三明市',
'泉州市',
'漳州市',
'南平市',
'龙岩市',
'宁德市',
'南昌市',
'景德镇市',
'萍乡市',
'九江市',
'新余市',
'鹰潭市',
'赣州市',
'吉安市',
'宜春市',
'抚州市',
'上饶市',
'济南市',
'青岛市',
'淄博市',
'枣庄市',
'东营市',
'烟台市',
'潍坊市',
'济宁市',
'泰安市',
'威海市',
'日照市',
'莱芜市',
'临沂市',
'德州市',
'聊城市',
'滨州市',
'菏泽市',
'郑州市',
'开封市',
'洛阳市',
'平顶山市',
'安阳市',
'鹤壁市',
'新乡市',
'焦作市',
'濮阳市',
'许昌市',
'漯河市',
'三门峡市',
'南阳市',
'商丘市',
'信阳市',
'周口市',
'驻马店市',
'省直辖县',
'武汉市',
'黄石市',
'十堰市',
'宜昌市',
'襄阳市',
'鄂州市',
'荆门市',
'孝感市',
'荆州市',
'黄冈市',
'咸宁市',
'随州市',
'恩施土家族苗族自治州',
'省直辖县',
'长沙市',
'株洲市',
'湘潭市',
'衡阳市',
'邵阳市',
'岳阳市',
'常德市',
'张家界市',
'益阳市',
'郴州市',
'永州市',
'怀化市',
'娄底市',
'湘西土家族苗族自治州',
'广州市',
'韶关市',
'深圳市',
'珠海市',
'汕头市',
'佛山市',
'江门市',
'湛江市',
'茂名市',
'肇庆市',
'惠州市',
'梅州市',
'汕尾市',
'河源市',
'阳江市',
'清远市',
'东莞市',
'中山市',
'潮州市',
'揭阳市',
'云浮市',
'南宁市',
'柳州市',
'桂林市',
'梧州市',
'北海市',
'防城港市',
'钦州市',
'贵港市',
'玉林市',
'百色市',
'贺州市',
'河池市',
'来宾市',
'崇左市',
'海口市',
'三亚市',
'三沙市',
'儋州市',
'省直辖县',
'重庆市',
'成都市',
'自贡市',
'攀枝花市',
'泸州市',
'德阳市',
'绵阳市',
'广元市',
'遂宁市',
'内江市',
'乐山市',
'南充市',
'眉山市',
'宜宾市',
'广安市',
'达州市',
'雅安市',
'巴中市',
'资阳市',
'阿坝藏族羌族自治州',
'甘孜藏族自治州',
'凉山彝族自治州',
'贵阳市',
'六盘水市',
'遵义市',
'安顺市',
'毕节市',
'铜仁市',
'黔西南布依族苗族自治州',
'黔东南苗族侗族自治州',
'黔南布依族苗族自治州',
'昆明市',
'曲靖市',
'玉溪市',
'保山市',
'昭通市',
'丽江市',
'普洱市',
'临沧市',
'楚雄彝族自治州',
'红河哈尼族彝族自治州',
'文山壮族苗族自治州',
'西双版纳傣族自治州',
'大理白族自治州',
'德宏傣族景颇族自治州',
'怒江傈僳族自治州',
'迪庆藏族自治州',
'拉萨市',
'日喀则市',
'昌都市',
'林芝市',
'山南市',
'那曲市',
'阿里地区',
'西安市',
'铜川市',
'宝鸡市',
'咸阳市',
'渭南市',
'延安市',
'汉中市',
'榆林市',
'安康市',
'商洛市',
'兰州市',
'嘉峪关市',
'金昌市',
'白银市',
'天水市',
'武威市',
'张掖市',
'平凉市',
'酒泉市',
'庆阳市',
'定西市',
'陇南市',
'临夏回族自治州',
'甘南藏族自治州',
'西宁市',
'海东市',
'海北藏族自治州',
'黄南藏族自治州',
'海南藏族自治州',
'果洛藏族自治州',
'玉树藏族自治州',
'海西蒙古族藏族自治州',
'银川市',
'石嘴山市',
'吴忠市',
'固原市',
'中卫市',
'乌鲁木齐市',
'克拉玛依市',
'吐鲁番市',
'哈密市',
'昌吉回族自治州',
'博尔塔拉蒙古自治州',
'巴音郭楞蒙古自治州',
'阿克苏地区',
'克孜勒苏柯尔克孜自治州',
'喀什地区',
'和田地区',
'伊犁哈萨克自治州',
'塔城地区',
'阿勒泰地区',
'自治区直辖县级行政区划',
'台北市',
'高雄市',
'台南市',
'台中市',
'金门县',
'南投县',
'基隆市',
'新竹市',
'嘉义市',
'新北市',
'宜兰县',
'新竹县',
'桃园县',
'苗栗县',
'彰化县',
'嘉义县',
'云林县',
'屏东县',
'台东县',
'花莲县',
'澎湖县',
'连江县',
'香港岛',
'九龙',
'新界',
'澳门半岛',
'离岛']
//选中列表样式的添加
$(".title-group").siblings().css("text-indent","60px");
$(".title-group").siblings().hide();
$(".title-group").click(function(){
	$(".erXuanZhong").each(function(){
		$(this).removeClass("erXuanZhong");
	})
	$(".title-group").removeClass("xuanZhong");
	$(".title-group").siblings().hide();
	$(this).siblings().find("span").removeClass("erXuanZhong");
	$(this).addClass("xuanZhong");
	if($(".xuanZhong").text()=="售票信息"){
		$(".yingPianInsert").hide();
		$(".fangYingInsert").hide();
		$(".yingYuanInsert").hide();
		$(".yingYuanXiang").hide();
		$(".yingPianXiang").hide();
		$(".yingYuanUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").show();
	}else{
		$(this).siblings().show();
		$(this).siblings().eq(0).find("span").addClass("erXuanZhong");
		if($(".erXuanZhong").text()=="影院详情"){
			$(".yingYuanXiang").show();
			$(".yingPianXiang").hide();
			$(".fangYingXiang").hide();
			$(".fangYingInsert").hide();
			$(".yingYuanInsert").hide();
			$(".yingPianInsert").hide();
			$(".yingYuanUpdate").hide();
			$(".yingPianUpdate").hide();
			$(".fangYingUpdate").hide();
			$(".shou").hide();
			selectCinemaName="";
			selectCity="";
			cinemaCurrPageNo=1;
			cinemaFen();
		}
		if($(".erXuanZhong").text()=="影片详情"){
			$(".yingPianXiang").show();
			$(".yingYuanXiang").hide();
			$(".fangYingInsert").hide();
			$(".yingYuanInsert").hide();
			$(".yingPianInsert").hide();
			$(".yingYuanUpdate").hide();
			$(".yingPianUpdate").hide();
			$(".fangYingUpdate").hide();
			$(".fangYingXiang").hide();
			$(".shou").hide();
			selectFilmName="";
			selectTypeID="";
			filmCurrPageNo=1;
			filmFen();
		}
		if($(".erXuanZhong").text()=="放映详情"){
			$(".yingPianXiang").hide();
			$(".yingYuanXiang").hide();
			$(".fangYingInsert").hide();
			$(".yingYuanInsert").hide();
			$(".yingPianInsert").hide();
			$(".yingYuanUpdate").hide();
			$(".yingPianUpdate").hide();
			$(".fangYingUpdate").hide();
			$(".fangYingXiang").show();
			$(".shou").hide();
			playFen();
		}
	}
	
	
})
$(".title-xia").click(function(){
	var xuanzhong="";
	$(".erXuanZhong").each(function(){
		$(this).removeClass("erXuanZhong");
	})
	$(this).children("span").addClass("erXuanZhong");
	xuanzhong=$(".erXuanZhong").text();
	if(xuanzhong=="影院添加"){
		$(".yingYuanInsert").show();
		$(".yingPianInsert").hide();
		$(".fangYingInsert").hide();
		$(".yingYuanXiang").hide();
		$(".yingYuanUpdate").hide();
		$(".yingPianXiang").hide();
		$(".yingPianUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
	}
	if(xuanzhong=="影片添加"){
		$(".yingPianInsert").show();
		$(".yingYuanInsert").hide();
		$(".fangYingInsert").hide();
		$(".yingYuanXiang").hide();
		$(".yingPianXiang").hide();
		$(".yingYuanUpdate").hide();
		$(".yingPianUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
	}
	if(xuanzhong=="放映添加"){
		$(".fangYingInsert").show();
		$(".yingYuanInsert").hide();
		$(".yingYuanUpdate").hide();
		$(".yingPianXiang").hide();
		$(".yingPianInsert").hide();
		$(".yingYuanXiang").hide();
		$(".yingPianUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
	}
	if(xuanzhong=="影院详情"){
		$(".yingYuanXiang").show();
		$(".fangYingInsert").hide();
		$(".yingYuanInsert").hide();
		$(".yingPianInsert").hide();
		$(".yingYuanUpdate").hide();
		$(".yingPianXiang").hide();
		$(".yingPianUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
		selectCinemaName="";
		selectCity="";
		cinemaCurrPageNo=1;
		cinemaFen();
	}
	if(xuanzhong=="影片详情"){
		$(".yingPianXiang").show();
		$(".yingYuanXiang").hide();
		$(".fangYingInsert").hide();
		$(".yingYuanInsert").hide();
		$(".yingPianInsert").hide();
		$(".yingYuanUpdate").hide();
		$(".yingPianUpdate").hide();
		$(".fangYingXiang").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
		selectFilmName="";
		selectTypeID="";
		filmCurrPageNo=1;
		filmFen();
	}
	if(xuanzhong=="放映详情"){
		$(".fangYingXiang").show();
		$(".yingPianUpdate").hide();
		$(".yingPianXiang").hide();
		$(".yingYuanXiang").hide();
		$(".fangYingInsert").hide();
		$(".yingYuanInsert").hide();
		$(".yingPianInsert").hide();
		$(".yingYuanUpdate").hide();
		$(".fangYingUpdate").hide();
		$(".shou").hide();
		playFen();
	}
})
//单击地图获取指定经纬度
var marker, map = new AMap.Map("container", {
    resizeEnable: true,
    center: [113.628015,34.764483],
    zoom: 13
});
//为地图注册click事件获取鼠标点击出的经纬度坐标
map.on('click', function(e) {
	if (marker) {
        marker.setMap(null);
        marker = null;
    }
    //document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
    $("#lng").val(e.lnglat.getLng());
    $("#lat").val(e.lnglat.getLat());
     marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [e.lnglat.getLng(),e.lnglat.getLat()],
        offset: new AMap.Pixel(-13, -30)
    });
    marker.setMap(map);
});
//城市添加到导航条
function addCtiy(){
		
		for(var ch=0;ch<city.length;ch++){
			
			$("#select-city").append($("<option  value='"+city[ch]+"'>"+city[ch]+"</option>"));
			$("#yingyuancity").append($("<option  value='"+city[ch]+"'>"+city[ch]+"</option>"));
			$("#addressUpdate").append($("<option  value='"+city[ch]+"'>"+city[ch]+"</option>"));
		}
		
		
}
addCtiy();
//添加图片按钮
$(".a-upload").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    var fr = new FileReader();//创建new FileReader()对象
	var imgObj = this.files[0];//获取图片
	
	fr.readAsDataURL(imgObj);//将图片读取为DataURL
	var obj = $("#imgInsert")[0];//
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
    	//$("#imgInsert").attr("src",filePath);
        //$(".fileerrorTip").html("").hide();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        
        fr.onload = function() {
					obj.src = this.result;
		}
        //$(".showFileName").html(fileName);
    }else{
    	alert("您未上传文件，或者您上传文件类型有误！");
        /*$(".showFileName").html("");
        $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();*/
        return false 
    }
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
	var tishi=$(".title").attr("tishi");
	if(tishi=="1"){
		addTiShi("添加影院成功","btn-success");
	}
	if(tishi=="2"){
		addTiShi("添加影片成功","btn-success");
	}
	if(tishi=="3"){
		addTiShi("添加放映信息成功","btn-success");
	}
	if(tishi=="4"){
		addTiShi("影院修改成功","btn-success");
	}
	if(tishi=="5"){
		addTiShi("影片修改成功","btn-success");
	}
	if(tishi=="6"){
		addTiShi("放映信息修改成功","btn-success");
	}
	if(tishi=="7"){
		addTiShi("管理员登录成功！","btn-success");
	}
}
//判断影院添加信息是否完整
$("#inputText").blur(textname);
$("#text-cinema").blur(fullAddress);
function textname(){
	var name=$("#inputText").val();
	if(name==""){
		$("#inputText").parent().parent().addClass("has-error");
		$("#inputText").parent().next().text("影院名不能为空！");
		return false;
	}else{
		$("#inputText").parent().parent().removeClass("has-error");
		$("#inputText").parent().parent().addClass("has-success");
		$("#inputText").parent().next().text("");
	}
	return true;
}
function fullAddress(){
	var address=$("#text-cinema").val();
	if(address==""){
		$("#text-cinema").parent().addClass("has-error");
		$("#text-cinema").nextAll("span").text("请填写详细所在地！");
		return false;
	}else{
		$("#text-cinema").parent().removeClass("has-error");
		$("#text-cinema").parent().addClass("has-success");
		$("#text-cinema").nextAll("span").text("");
	}
	return true;
}
$("#yingYuanInsert").submit(function(){
	if(!textname()) return false;
	if(!fullAddress()) return false;
	return true;
})
//判断影院修改信息是否完整
$("#cinemaNameUpdate").blur(cinemaNameUpdate);
$("#fulladdressUpdate").blur(fulladdressUpdate);
function cinemaNameUpdate(){
	var name=$("#cinemaNameUpdate").val();
	if(name==""){
		$("#cinemaNameUpdate").parent().parent().addClass("has-error");
		$("#cinemaNameUpdate").parent().next().text("影院名不能为空！");
		return false;
	}else{
		$("#cinemaNameUpdate").parent().parent().removeClass("has-error");
		$("#cinemaNameUpdate").parent().parent().addClass("has-success");
		$("#cinemaNameUpdate").parent().next().text("");
	}
	return true;
}
function fulladdressUpdate(){
	var address=$("#fulladdressUpdate").val();
	if(address==""){
		$("#fulladdressUpdate").parent().parent().addClass("has-error");
		$("#fulladdressUpdate").parent().next().text("请填写详细所在地！");
		return false;
	}else{
		$("#fulladdressUpdate").parent().removeClass("has-error");
		$("#fulladdressUpdate").parent().addClass("has-success");
		$("#fulladdressUpdate").next().text("");
	}
	return true;
}
$("#yingYuanUpdate").submit(function(){
	if(!cinemaNameUpdate()) return false;
	if(!fulladdressUpdate()) return false;
	return true;
})
//判断影片添加信息是否完整
$("#filmNameText").blur(filmName);
$("#actor").blur(actor);
$("#director").blur(director);
$("#timelong").blur(timelong);
$("#ticketPrice").blur(ticketPrice);
$("#text-film").blur(text_film);
$("#dateTime").blur(dateTime);
function filmName(){
	var filmName=$("#filmNameText").val();
	if(filmName==""){
		$("#filmNameText").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写影片名！ ","btn-danger");
		return false;
	}else{
		$("#filmNameText").parent().parent().removeClass("has-error");
		$("#filmNameText").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function actor(){
	var actor=$("#actor").val();
	if(actor==""){
		$("#actor").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写导演名 ","btn-danger");
		return false;
	}else{
		$("#actor").parent().parent().removeClass("has-error");
		$("#actor").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function director(){
	var director=$("#director").val();
	if(director==""){
		$("#director").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写演员名 ","btn-danger");
		return false;
	}else{
		$("#director").parent().parent().removeClass("has-error");
		$("#director").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function timelong(){
	var timelong=$("#timelong").val();
	if(timelong==""){
		$("#timelong").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写放映时长 ","btn-danger");
		return false;
	}else{
		$("#timelong").parent().parent().removeClass("has-error");
		$("#timelong").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function ticketPrice(){
	var ticketPrice=$("#ticketPrice").val();
	if(ticketPrice==""){
		$("#ticketPrice").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写售票价格！ ","btn-danger");
		return false;
	}else{
		$("#ticketPrice").parent().parent().removeClass("has-error");
		$("#ticketPrice").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function text_film(){
	var  text_film=$("#text-film").val();
	if(text_film==""){
		$("#text-film").parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请填写影片详情！ ","btn-danger");
		return false;
	}else{
		$("#text-film").parent().removeClass("has-error");
		$("#text-film").parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
function xiuGaiimg(){
	var xiuGaiimg=$("#xiuGaiimg").val();
	if(xiuGaiimg==""){
		addTiShi("请选择影片图片！ ","btn-danger");
		return false;
	}else{
	
		//$("#text-cinema").next().text("");
	}
	return true;
}
function dateTime(){
	var dateTime=$("#dateTime").val();
	if(dateTime==""){
		$("#dateTime").parent().parent().addClass("has-error");
		//$("#text-cinema").next().text("请填写详细所在地！");
		addTiShi("请给出上映时间！ ","btn-danger");
		return false;
	}else{
		$("#dateTime").parent().parent().removeClass("has-error");
		$("#dateTime").parent().parent().addClass("has-success");
		//$("#text-cinema").next().text("");
	}
	return true;
}
$("#yingPianInsert").submit(function(){
	if(!filmName()) return false;
	if(!actor()) return false;
	if(!director()) return false;
	if(!timelong()) return false;
	if(!ticketPrice()) return false;
	if(!text_film()) return false;
	if(!xiuGaiimg()) return false;
	if(!dateTime()) return false;
	return true;
})
//判断放映添加信息是否完整
$("#startTime").blur(startTime);
$("#endTime").blur(endTime);
$("#sellingFare").blur(sellingFare);
function startTime(){
	var startTime=$("#startTime").val();
	if(startTime==""){
		$("#startTime").parent().parent().addClass("has-error");
		$("#startTime").parent().next().text("请选择放映开始时间！");
		return false;
	}else{
		$("#startTime").parent().parent().removeClass("has-error");
		$("#startTime").parent().parent().addClass("has-success");
		$("#startTime").parent().next().text("");
	}
	return true;
}
function endTime(){
	var  endTime=$("#endTime").val();
	if(endTime==""){
		$("#endTime").parent().parent().addClass("has-error");
		$("#endTime").parent().next().text("请选择放映结束时间！");
		return false;
	}else{
		$("#endTime").parent().parent().removeClass("has-error");
		$("#endTime").parent().parent().addClass("has-success");
		$("#endTime").parent().next().text("");
	}
	return true;
}
function sellingFare(){
	var sellingFare=$("#sellingFare").val();
	if(sellingFare==""){
		$("#sellingFare").parent().parent().addClass("has-error");
		$("#sellingFare").parent().next().text("请给出票价！");
		return false;
	}else{
		$("#sellingFare").parent().parent().removeClass("has-error");
		$("#sellingFare").parent().parent().addClass("has-success");
		$("#sellingFare").parent().next().text("");
	}
	return true;
}
$("#fangYingInsert").submit(function(){
	if(!startTime()) return false;
	if(!endTime()) return false;
	if(!sellingFare()) return false;
	return true;
})
//单击页数
var currPageNo=1;
shouFen();
function shouFen(){
	$(".shou tbody").children().remove();
	$(".shou .btn-group").children().remove();
	
	$.post("./ticketInfoPage","currPageNo="+currPageNo,function(data){
		for ( var i in data.list) {
			/*<tr>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		       <td>表格单元格</td>
		     </tr>*/
			var td1=$("<td>"+data.list[i].cinema.cinemaName+"</td>");
			var td2=$("<td>"+data.list[i].film.filmName+"</td>");
			var td3=$("<td>"+data.list[i].user.username+"</td>");
			var arr=new Date(data.list[i].ticketTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
			var td4=$("<td>"+arr[0]+"  "+arr[1]+"</td>");
			var td5=$("<td>"+data.list[i].finalPrice+"元</td>");
			var td6=$("<td>"+data.list[i].soldLine+"</td>");
			var td7=$("<td>"+data.list[i].soldColumn+"</td>");
			var $tr=$("<tr></tr>");
			$tr.append(td1);
			$tr.append(td2);
			$tr.append(td3);
			$tr.append(td4);
			$tr.append(td5);
			$tr.append(td6);
			$tr.append(td7);
			$(".shou tbody").append($tr);
		}
		var btn_group=$(".shou .btn-group");
		btn_group.append("<button type='button' currPageNo='1' class='btn btn-default btn-info'>首页</button>");
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo==1?1:data.currPageNo-1)+"' class='btn btn-default btn-info'><<</button>");
		
		for (var int = data.qi; int <= data.jie; int++) {
			if(data.currPageNo==int){
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default btn-success'>"+int+"</button>");
			}else{
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default'>"+int+"</button>");
			}
			
		}
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo+1)+"' class='btn btn-default btn-info'>>></button>");
		btn_group.append("<button type='button' currPageNo='"+data.totalPageCount+"' class='btn btn-default btn-info'>尾页</button>");
	
		$(".shou .btn").click(function(){
			currPageNo=$(this).attr("currPageNo");
			shouFen();
		})
	},"JSON");
}
//影院异步分页查询
var selectCinemaName="";
var selectCity="";
var cinemaCurrPageNo=1;

function  cinemaFen(){
	$(".yingYuanXiang tbody").children().remove();
	$(".yingYuanXiang .btn-group").children().remove();
	$.post("./cinemaPage","cinemaName="+selectCinemaName+"&address="+selectCity+"&currPageNo="+cinemaCurrPageNo,function(data){
		for ( var i in data.list) {
			var td1=$("<td>"+data.list[i].cinemaName+"</td>");
			var td2=$("<td>"+data.list[i].address+"</td>");
			var td3=$("<td>"+data.list[i].lat+"</td>");
			var td4=$("<td>"+data.list[i].lng+"</td>");
			var td5=$("<td>"+data.list[i].fulladdress+"</td>");
			var td6=$("<td><a href='javascript:void(0);'  class='xiuCinema' cinemaID='"+data.list[i].cinemaID+"'>修改</a><a href='javascript:void(0);' style='marin-left:10px;padding-left: 10px;' class='deleteCinema' cinemaID='"+data.list[i].cinemaID+"'>删除</a></td>");
			var $tr=$("<tr></tr>");
			$tr.append(td1);
			$tr.append(td2);
			$tr.append(td3);
			$tr.append(td4);
			$tr.append(td5);
			$tr.append(td6);
			$(".yingYuanXiang tbody").append($tr);
		}
		var btn_group=$(".yingYuanXiang .btn-group");
		btn_group.append("<button type='button' currPageNo='1' class='btn btn-default btn-info'>首页</button>");
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo==1?1:data.currPageNo-1)+"' class='btn btn-default btn-info'><<</button>");
		
		for (var int = data.qi; int <= data.jie; int++) {
			if(data.currPageNo==int){
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default btn-success'>"+int+"</button>");
			}else{
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default'>"+int+"</button>");
			}
			
		}
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo+1)+"' class='btn btn-default btn-info'>>></button>");
		btn_group.append("<button type='button' currPageNo='"+data.totalPageCount+"' class='btn btn-default btn-info'>尾页</button>");
		$(".yingYuanXiang .btn").on("click",Cinemasousuo());//绑定事件不需要立马执行
		$(".xiuCinema").on("click",aClick());
		$(".deleteCinema").on("click",aDeleteClick());
	},"JSON")
	
	
}
function aDeleteClick(){
	$(".deleteCinema").click(function(){
		var cinemaID=$(this).attr("cinemaID");
		$.post("./cinemaDelete","cinemaID="+cinemaID,function(data){
			if(data=="true"){
				addTiShi("删除影成功！","btn-success");
				cinemaFen();
			}
		})
		
	})
}
function aClick(){
	$(".xiuCinema").click(function(){
		var cinemaID=$(this).attr("cinemaID");
		if(cinemaID!=null){
			$(".yingYuanUpdate").show();
			$(".yingYuanXiang").hide();
			$(".fangYingInsert").hide();
			$(".yingYuanInsert").hide();
			$(".yingPianInsert").hide();
			$(".shou").hide();
			$(".erXuanZhong").parent().next().next().children().addClass("erXuanZhong");
			$(".erXuanZhong").eq(0).removeClass("erXuanZhong");
			$.post("./cinemaUpdateSelectID","cinemaID="+cinemaID,function(data){
				$("#cinemaNameUpdate").val(data.cinemaName);
				$("#addressUpdate").val(data.address);
				$("#fulladdressUpdate").val(data.fulladdress);
				$("#lngUpdate").val(data.lat);
				$("#latUpdate").val(data.lng);
				$("#cinemaIDUpdate").val(data.cinemaID);
				//单击地图获取指定经纬度
				var marker, map = new AMap.Map("containerUpdate", {
				    resizeEnable: true,
				    center: [data.lat,data.lng],
				    zoom: 13
				});
				addMarker();
				 // 实例化点标记
			    function addMarker() {
			        marker = new AMap.Marker({
			            icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
			            position: [data.lat,data.lng],
			            offset: new AMap.Pixel(-13, -30)
			        });
			        marker.setMap(map);
			    }
				//为地图注册click事件获取鼠标点击出的经纬度坐标
				map.on('click', function(e) {
					if (marker) {
				        marker.setMap(null);
				        marker = null;
				    }
				    //document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat()
				    $("#lngUpdate").val(e.lnglat.getLng());
				    $("#latUpdate").val(e.lnglat.getLat());
				     marker = new AMap.Marker({
				        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
				        position: [e.lnglat.getLng(),e.lnglat.getLat()],
				        offset: new AMap.Pixel(-13, -30)
				    });
				    marker.setMap(map);
				});
			},"JSON")
		}
	})
}
function Cinemasousuo(){
	$(".yingYuanXiang .btn").on("click",function(){
		if($(this).attr("currPageNo")!=null){
			cinemaCurrPageNo=$(this).attr("currPageNo");//null
			cinemaFen();
		}
		
	});
}
$("#cinemaSou").click(function(){//搜索
	if($("#selectCinemaName").val()!=null){
		selectCinemaName=$("#selectCinemaName").val();
	}else{
		selectCinemaName=null;
	}
	selectCity=$("#yingyuancity").val();
	//console.info(selectCinemaName);
	cinemaCurrPageNo=1;
	cinemaFen();
})


//影片异步分页查询
var selectFilmName="";
var selectTypeID="";
var filmCurrPageNo=1;

function  filmFen(){
	$(".yingPianXiang tbody").children().remove();
	$(".yingPianXiang .btn-group").children().remove();
	$.post("./filmPage","filmName="+selectFilmName+"&typeID="+selectTypeID+"&currPageNo="+filmCurrPageNo,function(data){
		for ( var i in data.list) {
			var td0=$("<td><img  src='http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+data.list[i].advFile+"'></td>");
			var td1=$("<td>"+data.list[i].filmName+"</td>");
			var td2=$("<td>"+data.list[i].typeName+"</td>");
			var td3=$("<td>"+data.list[i].actor+"</td>");
			var td4=$("<td>"+data.list[i].director+"</td>");
			var arr=new Date(data.list[i].dateTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
			var td5=$("<td>"+arr[0]+" "+arr[1]+"</td>");
			var td6=$("<td>"+data.list[i].region+"</td>");
			var td7=$("<td>"+data.list[i].speech+"</td>");
			var td8=$("<td>"+data.list[i].timelong+"</td>");
			var td9=$("<td>"+data.list[i].ticketPrice+"元</td>");
			var td10=$("<td><a href='javascript:void(0);' style='float:left;' class='xiuFilm' filmID='"+data.list[i].filmID+"'>修改</a><a href='javascript:void(0);' class='deleteFilm' style='float:fight;' filmID='"+data.list[i].filmID+"'>删除</a></td>");
			var $tr=$("<tr></tr>");
			$tr.append(td0);
			$tr.append(td1);
			$tr.append(td2);
			$tr.append(td3);
			$tr.append(td4);
			$tr.append(td5);
			$tr.append(td6);
			$tr.append(td7);
			$tr.append(td8);
			$tr.append(td9);
			$tr.append(td10);
			$(".yingPianXiang tbody").append($tr);
		}
		var btn_group=$(".yingPianXiang .btn-group");
		btn_group.append("<button type='button' currPageNo='1' class='btn btn-default btn-info'>首页</button>");
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo==1?1:data.currPageNo-1)+"' class='btn btn-default btn-info'><<</button>");
		
		for (var int = data.qi; int <= data.jie; int++) {
			if(data.currPageNo==int){
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default btn-success'>"+int+"</button>");
			}else{
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default'>"+int+"</button>");
			}
			
		}
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo+1)+"' class='btn btn-default btn-info'>>></button>");
		btn_group.append("<button type='button' currPageNo='"+data.totalPageCount+"' class='btn btn-default btn-info'>尾页</button>");
		$(".yingPianXiang .btn-group .btn").on("click",filmsousuo());//绑定事件不需要立马执行
		$(".xiuFilm").on("click",filmaClick());
		$(".deleteFilm").on("click",filmaDeleteClick());
	},"JSON")
	
	
}
function filmaDeleteClick(){
	$(".deleteFilm").click(function(){
		var filmID=$(this).attr("filmID");
		$.post("./filmInfoDelete","filmID="+filmID,function(data){
			if(data=="true"){
				addTiShi("删除影片成功！","btn-success");
				filmFen();
			}
	
		});
	})
}
function filmaClick(){
	$(".xiuFilm").click(function(){
		var filmID=$(this).attr("filmID");
		if(filmID!=null){
			$(".yingPianUpdate").show();
			$(".yingPianXiang").hide();
			$(".yingYuanXiang").hide();
			$(".fangYingInsert").hide();
			$(".yingYuanInsert").hide();
			$(".yingPianInsert").hide();
			$(".yingYuanUpdate").hide();
			$(".shou").hide();
			$(".erXuanZhong").parent().next().next().children().addClass("erXuanZhong");
			$(".erXuanZhong").eq(0).removeClass("erXuanZhong");
			$.post("./filmUpdateSelectID","filmID="+filmID,function(data){
				
				$("#filmNameUpdate").val(data.filmName);
				$("#filmType").val(data.typeID);
				$("#actorUpdate").val(data.actor);
				$("#directorUpdate").val(data.director);
				$("#timelongUpdate").val(data.timelong);
				$("#ticketPriceUpdate").val(data.ticketPrice);
				console.info(moment(data.dateTime));
				//var arr=new Date(data.dateTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
				$("#dateTimeUpdate").val(new moment(data.dateTime).format("YYYY-MM-DDTHH:mm"));
				$("#addressUpdate").val(data.region);
				$("#speechUpdate").val(data.speech);
				$("#detailsUpdate").val(data.details);
				$("#imgUpdate").attr("src","http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+data.advFile);
				$("#filmIDUpdate").val(data.filmID);
			},"JSON")
		}
	})
}
function filmsousuo(){
	$(".yingPianXiang .btn-group .btn").on("click",function(){
		if($(this).attr("currPageNo")!=null){
			filmCurrPageNo=$(this).attr("currPageNo");//null
			filmFen();
		}
		
	});
}
$("#filmSou").click(function(){//搜索
	if($("#selectFilmName").val()!=null){
		selectFilmName=$("#selectFilmName").val();
	}else{
		selectFilmName=null;
	}
	selectTypeID=$("#typeID").val();
	//console.info(selectCinemaName);
	filmCurrPageNo=1;
	filmFen();
})
//添加图片按钮
$(".a-uploadUpdate").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    var fr = new FileReader();//创建new FileReader()对象
	var imgObj = this.files[0];//获取图片
	
	fr.readAsDataURL(imgObj);//将图片读取为DataURL
	var obj = $("#imgUpdate")[0];//
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
    	//$("#imgInsert").attr("src",filePath);
        //$(".fileerrorTip").html("").hide();
        var arr=filePath.split('\\');
        var fileName=arr[arr.length-1];
        
        fr.onload = function() {
					obj.src = this.result;
		}
        //$(".showFileName").html(fileName);
    }else{
    	alert("您未上传文件，或者您上传文件类型有误！");
        /*$(".showFileName").html("");
        $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();*/
        return false 
    }
})

//放映异步分页查询
var selectPlaycinemaID="";
var selectPlayfilmID="";
var playCurrPageNo=1;

function  playFen(){
	$(".fangYingXiang tbody").children().remove();
	$(".fangYingXiang .btn-group").children().remove();
	$.post("./playInfoPage","cinemaID="+selectPlaycinemaID+"&filmID="+selectPlayfilmID+"&currPageNo="+playCurrPageNo,function(data){
		//alert(data.list[0].sellingFare);
		for ( var i in data.list) {
			
			var td1=$("<td>"+data.list[i].film.filmName+"</td>");
			var td2=$("<td>"+data.list[i].cinema.cinemaName+"</td>");
			var td3=$("<td>"+new moment(data.list[i].startTime).format("YYYY-MM-DD HH:mm")+"</td>");
			var td4=$("<td>"+new moment(data.list[i].endTime).format("YYYY-MM-DD HH:mm")+"</td>");
			var td5=$("<td>"+data.list[i].sellingFare+"</td>");
			var td6=$("<td><a href='javascript:void(0);' playID='"+data.list[i].playID+"' class='xiuPlay'>修改</a><a href='javascript:void(0);' style='margin-left:10px' class='deletePlay' playID='"+data.list[i].playID+"'>删除</a></td>");
			var $tr=$("<tr></tr>");
			$tr.append(td1);
			$tr.append(td2);
			$tr.append(td3);
			$tr.append(td4);
			$tr.append(td5);
			$tr.append(td6);
			$(".fangYingXiang tbody").append($tr);
		}
		var btn_group=$(".fangYingXiang .btn-group");
		btn_group.append("<button type='button' currPageNo='1' class='btn btn-default btn-info'>首页</button>");
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo==1?1:data.currPageNo-1)+"' class='btn btn-default btn-info'><<</button>");
		
		for (var int = data.qi; int <= data.jie; int++) {
			if(data.currPageNo==int){
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default btn-success'>"+int+"</button>");
			}else{
				btn_group.append("<button type='button' currPageNo='"+int+"' class='btn btn-default'>"+int+"</button>");
			}
			
		}
		btn_group.append("<button type='button' currPageNo='"+(data.currPageNo+1)+"' class='btn btn-default btn-info'>>></button>");
		btn_group.append("<button type='button' currPageNo='"+data.totalPageCount+"' class='btn btn-default btn-info'>尾页</button>");
		$(".fangYingXiang .btn").on("click",playsousuo());//绑定事件不需要立马执行
		$(".xiuPlay").on("click",playaClick());
		$(".deletePlay").on("click",playaDeleteClick());
	},"JSON")
	
	
}
function playaDeleteClick(){
	
	$(".deletePlay").click(function(){
		var playID=$(this).attr("playID");
		$.post("./playInfoDelete","playID="+playID,function(data){
			if(data=="true"){
				addTiShi("删除放映信息成功！","btn-success");
				playFen();
			}
		})
		
	})
}
function playaClick(){
	$(".xiuPlay").click(function(){
		var playID=$(this).attr("playID");
		if(playID!=null){
			$(".fangYingUpdate").show();
			$(".yingYuanUpdate").hide();
			$(".yingYuanXiang").hide();
			$(".fangYingInsert").hide();
			$(".fangYingXiang").hide();
			$(".yingPianInsert").hide();
			$(".shou").hide();
			$(".erXuanZhong").parent().next().next().children().addClass("erXuanZhong");
			$(".erXuanZhong").eq(0).removeClass("erXuanZhong");
			$.post("./playInfoUpdateSelectID","playID="+playID,function(data){
				$("#UpdatefilmID").val(data.film.filmID);
				$("#UpdatecinemaID").val(data.cinema.cinemaID);
				$("#UpdatestartTime").val(new moment(data.startTime).format("YYYY-MM-DDTHH:mm"));
				$("#UpdateendTime").val(new moment(data.endTime).format("YYYY-MM-DDTHH:mm"));
				$("#UpdatesellingFare").val(data.sellingFare);
				$("#UpdatePlayID").val(data.playID);
				
			},"JSON")
		}
	})
}
function playsousuo(){
	$(".fangYingXiang .btn").on("click",function(){
		if($(this).attr("currPageNo")!=null){
			playCurrPageNo=$(this).attr("currPageNo");//null
			playFen();
		}

		
	});
}
$("#filmFangSou").click(function(){//搜索
	selectPlaycinemaID=$("#slectCiemaFang").val();
	selectPlayfilmID=$("#slectfilmFang").val();
	//console.info(selectCinemaName);
	playCurrPageNo=1;
	playFen();
})

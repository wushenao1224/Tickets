$(".nav-tabs>li").on("click", function() {
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
})
//首页变为红色
$(".dao").eq(0).addClass("title_header");
ri();
//日历渲染
function ri() {
	//必要的数据
	//今天的年 月 日 ；本月的总天数；本月第一天是周几？？？
	var iNow = 0;

	function run(n) {

		//console.info(n);
		var oDate = new Date(); //定义时间
		oDate.setMonth(oDate.getMonth() + n); //设置月份
		var year = oDate.getFullYear(); //年
		var month = oDate.getMonth(); //月
		var today = oDate.getDate(); //日
		//计算本月有多少天
		var allDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];

		//判断闰年
		if(month == 1) {
			if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
				allDay = 29;
			}
		}

		//判断本月第一天是星期几
		oDate.setDate(1); //时间调整到本月第一天
		var week = oDate.getDay(); //读取本月第一天是星期几

		//console.log(week);
		$(".dateList").empty(); //每次清空
		//插入空白

		for(var i = 0; i < week; i++) {
			$(".dateList").append("<li></li>");
		}

		//日期插入到dateList
		for(var i = 1; i <= allDay; i++) {
			$(".dateList").append("<li>" + i + "</li>")
		}
		
		//标记颜色=====================
		$(".dateList li").each(function(i, elm) {
			//console.log(index,elm);
			
			var val = $(this).text();
			//异步查询时间
			var $this=$(this);
			var dateTime=year+"-"+(month +1)+"-01";
			if((month+1)<=9){
                dateTime=year+"-0"+(month +1)+"-01";
            }
			if(n==0){
				dateTime=year+"-"+(month +1)+"-"+today;
                if((month+1)<=9){
                    dateTime=year+"-0"+(month +1)+"-"+today;
                }
			}

			$.post("./selectDateTime","dateTime="+dateTime,function(data){
				for(var i in data){
					var pantian=val;
					if(val.length==1){
					    pantian="0"+val;
					}
					if(i==0&&data[0]==pantian){
						//标记第一次出现天
						$this.addClass('red');
						$this.on("click",zhidingpai());
						//定义function函数进行查找数据

                        var zd=year+"-"+(month)+"-"+data[i];
                        if(month<=9){
                            zd=year+"-0"+(month)+"-"+data[i];
                        }
                        zd=dateTime.substring(0,dateTime.lastIndexOf("-")+1)+data[i];
                        //console.info(zd);
						zhidingyingpian(zd);
					}
					if(pantian==data[i]){
						$this.on("click",zhidingpai);
						$this.addClass('sun');
					}
				}
			},"JSON")
			//console.log(val);
			if(n == 0) {
				if(val < today) {
					//标记灰色
					$(this).addClass('ccc')
				} else if(val == today) {
					/*//标记当前天
					
					$(this).addClass('red')*/
				} else if(i % 7 == 0 || i % 7 == 6) {
					//周六或周日
					//$(this).addClass('sun')
				}
			} else if(n < 0) {
				$(this).addClass('ccc')
			} else if(i % 7 == 0 || i % 7 == 6) {
				//周六或周日
				//$(this).addClass('sun')
			}
		});
		//zhidingpai();
		
		//定义标题日期
		$("#calendar h4").text(year + "年" + (month + 1) + "月");
		//获取当前日历上月份
		var month=$("#calendar h4").text().substring(5,6);
		//获取当前月份
		var oDate = new Date();
		var dangMonth=oDate.getMonth()+1;
		if(month==dangMonth){
			$(".a1").removeClass("add_pointer");
			$(".a1").addClass("not_click");
		}
	};
	run(0);
	$(".a1").click(function() {
		//获取当前日历上月份
		var month=$("#calendar h4").text().substring(5,6);
		//获取当前月份
		var oDate = new Date();
		var dangMonth=oDate.getMonth()+1;
		if(month!=dangMonth){
			iNow--;
			run(iNow);
		}
		
	});

	$(".a2").click(function() {
		$(".a1").removeClass("not_click");
		$(".a1").addClass("add_pointer");
		iNow++;
		run(iNow);
	})
	//点击指定日期获取指定电影
	function zhidingpai(){
		$(".sun").click(function(){
			$(this).addClass("red");
			$(this).siblings().removeClass("red");
			var dayTime=$(this).text();
			//获取当前日历上月份
			var month=$("#calendar h4").text().substring(5,$("#calendar h4").text().lastIndexOf("月"));
			//获取当前日历上年份
			var year=$("#calendar h4").text().substring(0,4);
			if(dayTime.length==1){
				dayTime="0"+dayTime;
			}
			if(month.length==1){
				month="0"+month;
			}
			//console.info(year+"-"+month+"-"+dayTime);
			zhidingyingpian(year+"-"+month+"-"+dayTime);
		})
	}
	//获取指定时间
	function zhidingyingpian(dateTime){
		$.post("./selectZhiDingFilmInfo","dateTime="+dateTime,function(data){
			$("#zhiDing>img").attr("src","http://localhost:8080/web/bootstrap-3.3.7-dist/img/"+data.advFile);
			$("#zhiDing li").eq(0).text("片名："+data.filmName);
			var zhuyan=data.director;
			if(zhuyan.length>7){
				zhuyan=zhuyan.substring(0,6)+"...";
			}
			$("#zhiDing li").eq(1).text("主演："+zhuyan);
			$("#zhiDing li").eq(2).text("导演："+data.actor);
			$("#zhiDing li").eq(3).text("类型："+data.typeName);
			$("#zhiDing li").eq(4).text("地区："+data.region);
			$("#zhiDing li").eq(5).text("语言："+data.speech);
			$("#zhiDing li").eq(6).text("时长："+data.timelong);
			var arr=new Date(data.dateTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
			$("#zhiDing>div").text("上映时间"+arr[0]);
			$("#zhiDing>ul").attr("filmID",data.filmID);
		},"JSON")
	}
}
//单击即将上映获取当前数据
$(".jijiang").click(function(){
	$(".ji").eq(0).children().remove();
	$.post("./selectShangYing",function(data){
		//$(".jijiang").next().text(date.size());
		for(var i=0;i<4;i++){
			/*<div>
				<img src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" />
				<ul class="xin" >
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
					<li class="list-unstyled">导演</li>
				</ul>
				<div>
					上映时间
				</div>
			</div>*/
			//创建img标签
			var $img=$("<img src='http://localhost:8080/web/bootstrap-3.3.7-dist/img/"+data[i].advFile+"'/>");
			//创建ul标签即添加li内容
			var $ul=$("<ul class='xin' filmID='"+data[i].filmID+"'></ul>");
			var $li_1=$("<li class='list-unstyled'>片名："+data[i].filmName+"</li>");
			var zhuyan=data[i].director;
			if(zhuyan.length>7){
				zhuyan=zhuyan.substring(0,6)+"...";
			}
			var $li_2=$("<li class='list-unstyled'>主演："+zhuyan+"</li>");
			var $li_3=$("<li class='list-unstyled'>导演："+data[i].actor+"</li>");
			var $li_4=$("<li class='list-unstyled'>类型："+data[i].typeName+"</li>");
			var $li_5=$("<li class='list-unstyled'>地区："+data[i].region+"</li>");
			var $li_6=$("<li class='list-unstyled'>语言："+data[i].speech+"</li>");
			var $li_7=$("<li class='list-unstyled'>时长："+data[i].timelong+"</li>");
			$ul.append($li_1);
			$ul.append($li_2);
			$ul.append($li_3);
			$ul.append($li_4);
			$ul.append($li_5);
			$ul.append($li_6);
			$ul.append($li_7);
			//创建div上映时间标签
			var arr=new Date(data[i].dateTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
			var $div_shang=$("<div>上映时间"+arr[0]+"</div>");
			//包裹着的div
			var $baodiv=$("<div></div>");
			$baodiv.append($img);
			$baodiv.append($ul);
			$baodiv.append($div_shang);
			//添加数据到页面
			$(".ji").eq(0).append($baodiv);
			dianyingpai();
			clickul();
		}
	},"JSON")
})
//单击热映获取热映数据
$(".reying").click(function(){
	$(".ji").eq(0).children().remove();
	$.post("./selectReYing",function(data){
		//$(".jijiang").next().text(date.size());
		for(var i=0;i<4;i++){
			
			//创建img标签
			var $img=$("<img src='http://localhost:8080/web/bootstrap-3.3.7-dist/img/"+data[i].advFile+"'/>");
			//创建ul标签即添加li内容
			var $ul=$("<ul class='xin' filmID='"+data[i].filmID+"'></ul>");
			var $li_1=$("<li class='list-unstyled'>片名："+data[i].filmName+"</li>");
			var zhuyan=data[i].director;
			if(zhuyan.length>7){
				zhuyan=zhuyan.substring(0,6)+"...";
			}
			var $li_2=$("<li class='list-unstyled'>主演："+zhuyan+"</li>");
			var $li_3=$("<li class='list-unstyled'>导演："+data[i].actor+"</li>");
			var $li_4=$("<li class='list-unstyled'>类型："+data[i].typeName+"</li>");
			var $li_5=$("<li class='list-unstyled'>地区："+data[i].region+"</li>");
			var $li_6=$("<li class='list-unstyled'>语言："+data[i].speech+"</li>");
			var $li_7=$("<li class='list-unstyled'>时长："+data[i].timelong+"</li>");
			$ul.append($li_1);
			$ul.append($li_2);
			$ul.append($li_3);
			$ul.append($li_4);
			$ul.append($li_5);
			$ul.append($li_6);
			$ul.append($li_7);
			//创建div上映时间标签
			var arr=new Date(data[i].dateTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
			var $div_shang=$("<div>上映时间"+arr[0]+"</div>");
			//包裹着的div
			var $baodiv=$("<div></div>");
			$baodiv.append($img);
			$baodiv.append($ul);
			$baodiv.append($div_shang);
			//添加数据到页面
			$(".ji").eq(0).append($baodiv);
			dianyingpai();
			clickul();
		}
	},"JSON")
})
//电影图片排版
function dianyingpai(){
	var h=$(".ji img:first").css("height");
	var w=$(".ji img:first").css("width");
	
	$(".ji>div").css("width",w);
	$(".xin").css("height",h);
	$(".xin").css("width",w);
	$(".xin").css("top","0px");
	$(".xin").next().css("width",w);
	$(".ji img").each(function(index,el){
		var left=$(el).css("left");
		var right=$(el).css("right");
		$(el).next().css({"left":left,"right":right});
		var padding=$(".ji div").css("padding");
		var margin=$(".ji div").css("margin");
		//var pianyidushu=(index+1)*(parseInt(padding)+parseInt(margin))+index*(parseInt(padding)+parseInt(margin))+index*4;
		
		$(el).nextAll("div").css({"left":parseInt(padding)+parseInt(margin)+index*parseInt(w)+"px","right":right,"top":top});
		//放映时间制作思路 定义变量var i=1
		//如果容器大小小于多个图片宽度就i++然后计算
		//var top=i*36+i*36+i*6
		
	})
	$(".ji img").on('mouseover',function(){
		$(this).next().on("mouseover",function(){
			$(this).show();
		})
		$(this).next("ul").show();
		//$(".xin").show();
	})
	$(".ji ul").on("mouseout",function(){
		$(this).hide()
	})
}
//单击电影获取电影详细信息
clickul();
function clickul(){
	$(".xin").click(function(){
		var filmID=$(this).attr("filmID");
		if(filmID.length>0){
			location.href="./selectFilmID?filmID="+filmID;
		}
	})
}
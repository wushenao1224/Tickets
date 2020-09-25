//影片变为红色
$(".dao").eq(1).addClass("title_header");
//单击即将上映获取当前数据
$(".jijiang").click(function(){
	$(".ji").eq(0).children().remove();
	$.post("./selectShangYing",function(data){
		//$(".jijiang").next().text(date.size());
		for(var i in data){
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
			var $img=$("<img src='http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+data[i].advFile+"'/>");
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
		for(var i in data){
			
			//创建img标签
			var $img=$("<img src='http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+data[i].advFile+"'/>");
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
//滑动鼠标改变
hua();
function hua(){
	var index=0;
    var x1;
    $(".cinema-body .media").mousedown(function(){
    	 index=1;              //鼠标按下才能触发onmousemove方法
    	 x1=event.clientX;
    })
     $(".cinema-body .media").mousemove(function(){
     	if(index===1){
	        	//箭头显示
	        	$(".jiantou-left>img").show();
	        	$(".jiantou-right>img").show();
	        	 $(".cinema-body .media").eq(0).css("margin-left",event.clientX-x1+'px');
	        
           
            /*if(this.style.left.substr(0,this.style.left.length-2)<0){
                this.style.left=0;
            };
            if(this.style.left.substr(0,this.style.left.length-2)>150){
                this.style.left='150px';
            };*/
           
        }
     })
    $(".cinema-body .media").mouseup(function(){
    	index=0; 
    	$(".jiantou-left>img").hide();
	    $(".jiantou-right>img").hide();
    })
    $("body").mouseup(function(){
    	index=0; 
    	$(".jiantou-left>img").hide();
	    $(".jiantou-right>img").hide();
    })
}
//单击影院位置改变
var cleari=null;
$(".jiantou-left>img").on("mousedown",function(){
	//var pian=$(".cinema-body .media").eq(0).css("margin-left").substr(0,$(".cinema-body .media").eq(0).css("margin-left").length-2);
	cleari=setInterval(mediaweizhijian,1);
})

$(".jiantou-left>img").on("mouseup",function(){
	clearInterval(cleari);
})
$(".jiantou-right>img").on("mousedown",function(){
	//var pian=$(".cinema-body .media").eq(0).css("margin-left").substr(0,$(".cinema-body .media").eq(0).css("margin-left").length-2);
	cleari=setInterval(mediaweizhijia,1);
})
$(".jiantou-left>img").on("mouseout",function(){
	clearInterval(cleari);
})
$(".jiantou-right>img").on("mouseup",function(){
	clearInterval(cleari);
})
$(".jiantou-right>img").on("mouseout",function(){
	clearInterval(cleari);
})
function mediaweizhijian(){
	var pian=$(".cinema-body .media").eq(0).css("margin-left").substr(0,$(".cinema-body .media").eq(0).css("margin-left").length-2);
	$(".cinema-body .media").eq(0).css("margin-left",--pian);
}
function mediaweizhijia(){
	var pian=$(".cinema-body .media").eq(0).css("margin-left").substr(0,$(".cinema-body .media").eq(0).css("margin-left").length-2);
	$(".cinema-body .media").eq(0).css("margin-left",++pian);
}
//选中影院
xuanFilmInfo();
function xuanFilmInfo(){
	$(".cinema-body .media").click(function(){
		$(this).addClass("box-shadow");
		$(this).siblings().removeClass("box-shadow");
		$(".cinema-zuowei>.btn-group>.btn").each(function(){
			$(this).removeClass("btn-success");
			$(this).removeClass("btn-danger");
			$(this).addClass("btn-default");
		
		})
		zuoweidanger();
		xuanZuo();
	})
}
//显示向左或向右
$(".cinema-body").siblings("span").mousemove(function(){
	$(this).children("img").show();
})
$(".cinema-body").siblings("span").mouseout(function(){
	$(this).children("img").hide();
})
//选座改变价格
xuanZuo();
function xuanZuo(){
	//获取当前选择的影片价格
	var jiage=parseFloat($(".box-shadow").find("div").eq(2).text().substr(3));
	//计算已选价格
	if(jiage>0){
		if($(".cinema-zuowei>.btn-group>.btn-success").size()==0){
			$("#piaojia").text("0元");
		}else{
			$(".cinema-zuowei>.btn-group>.btn-success").each(function(i,e){
				$("#piaojia").text(jiage*(i+1)+"元");
			
			})
		}
		
	}
}
//未选改为已选    已选改为未选
$(".cinema-zuowei>.btn-group>.btn-default").click(function(){
	if(!$(this).hasClass("btn-danger")){
		$(this).toggleClass("btn-success");
		xuanZuo();
	}
})

//单击购票
$("#cinema-mai").on("click",function(){
	if(panduanxuanzhong()){
		$(".cinema-zuowei>.btn-group>.btn-success").each(function(i,e){
			//获取当前选择的影片价格
			var jiage=parseFloat($(".box-shadow").find("div").eq(2).text().substr(3));
			var playID=$(".box-shadow").attr("playID");
			var userID=$("#userName").attr("userid");
			var number=$(this).attr("number");
			var $that=$(this);
			//console.info(number);
			var line=parseInt(number/14+1);
			var column=number%14;
			if(column==0){
				line-=1;
				column=14;
			}
			$.post("./insertTicketInfo","playID="+playID+"&userID="+userID+"&line="+line+"&column="+column+"&jiage="+jiage,function(date){
				if(date=="true"){
					$that.removeClass("btn-success");
					$that.removeClass("btn-default");
					$that.addClass("btn-danger");
					$("#piaojia").text("0元");
				}
			})
			//console.info(line+"----"+column);
		})
	}
})
//判断一些不可购票原因
function panduanxuanzhong(){
	var userID=$("#userName").attr("userid");
	if(userID.length==0||userID==null){
		addTiShi("请先登录用户！","btn-danger");
		return false;
	}
	if($(".box-shadow").size()==0){
		addTiShi("请先选择一家影院！","btn-danger");
		return false;
	}
	if($(".cinema-zuowei>.btn-group>.btn-success").size()==0){
		addTiShi("请先座位！","btn-danger");
		return false;
	}
	return true;
}
//当前影院座位
zuoweidanger();
function zuoweidanger(){
	if($(".box-shadow").size()!=0){
		var playID=$(".box-shadow").attr("playID");
		$.post("./selectTicketPlayID","playID="+playID,function(date){
			
			for ( var i in date) {
				var num=(parseInt(date[i].soldLine)-1)*14+parseInt(date[i].soldColumn);
				//console.info(num);
				$(".cinema-zuowei>.btn-group>.btn").each(function(){
					if($(this).attr("number")==num){
						$(this).removeClass("btn-success");
						$(this).removeClass("btn-default");
						$(this).addClass("btn-danger");
					}
				})
			}
		},"JSON")
	}
	
	
}
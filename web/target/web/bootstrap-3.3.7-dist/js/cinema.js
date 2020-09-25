//影院被选中
$(".dao").eq(2).addClass("title_header");
//获取经纬度
var lng=$("#container").attr("lng");
var lat=$("#container").attr("lat");
//影院所在坐标
 var marker, map = new AMap.Map("container", {
        resizeEnable: true,
        center: [parseFloat(lat),parseFloat(lng)],
        zoom: 13
});
// 实例化点标记
addMarker();
// 实例化点标记
function addMarker() {
   marker = new AMap.Marker({
        icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        position: [parseFloat(lat),parseFloat(lng)],
        offset: new AMap.Pixel(-13, -30)
    });
    marker.setMap(map);
}
//滑动鼠标改变
hua();
function hua(){
	var index=0;
    var x1;
    $(".ji>div").mousedown(function(){
    	 index=1;              //鼠标按下才能触发onmousemove方法
    	 x1=event.clientX;
    })
     $(".ji>div").mousemove(function(){
     	if(index===1){
	        	//箭头显示
	        	$(".jiantou-left>img").show();
	        	$(".jiantou-right>img").show();
	        	 $(".ji>div").eq(0).css("margin-left",event.clientX-x1+'px');
	        
           
            /*if(this.style.left.substr(0,this.style.left.length-2)<0){
                this.style.left=0;
            };
            if(this.style.left.substr(0,this.style.left.length-2)>150){
                this.style.left='150px';
            };*/
           
        }
     })
    $(".ji>div").mouseup(function(){
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
	var pian=$(".ji>div").eq(0).css("margin-left").substr(0,$(".ji>div").eq(0).css("margin-left").length-2);
	$(".ji>div").eq(0).css("margin-left",--pian);
}
function mediaweizhijia(){
	var pian=$(".ji>div").eq(0).css("margin-left").substr(0,$(".ji>div").eq(0).css("margin-left").length-2);
	$(".ji>div").eq(0).css("margin-left",++pian);
}
//选中影片
xuanFilmInfo();
function xuanFilmInfo(){
	$(".ji>div").click(function(){
		$(this).addClass("box-shadow");
		$(this).siblings().removeClass("box-shadow");
		$(".cinema-zuowei>.btn-group>.btn").each(function(){
			$(this).removeClass("btn-success");
			$(this).removeClass("btn-danger");
			$(this).addClass("btn-default");
		
		})
		xuanZuo();
		zuoweidanger();
	})
}
//显示向左或向右
$(".ji").siblings("span").mousemove(function(){
	$(this).children("img").show();
})
$(".ji").siblings("span").mouseout(function(){
	$(this).children("img").hide();
})
//选座改变价格
xuanZuo();
function xuanZuo(){
	//获取当前选择的影片价格
	var jiage=parseFloat($(".box-shadow").find("li").eq(7).text().substr(3));
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
			var jiage=parseFloat($(".box-shadow").find("li").eq(7).text().substr(3));
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
				/*console.info("--------");
				console.info(date[i].soldLine);
				console.info(date[i].soldColumn);
				console.info(num);*/
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
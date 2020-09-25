$(".xuanXiang .list-group-item").click(function(){
	$(this).addClass("xuanZhong");
	$(this).siblings().removeClass("xuanZhong");
	gaibian();
})
//电影票跟看过的电影切换
gaibian();
function gaibian(){
	var userID=$(".user-bodyLeft .userinfo").attr("userID");
	var xuanzhong=$(".xuanZhong").text();
	if(xuanzhong=="电影票"){
		$(".yingpian .media").remove();
		$.post("./selectTicketUserID","userID="+userID,function(date){
			/*<div class="media">
				    <a class="pull-left" href="javascript:void(0);">
				    	<img class="media-object img-rounded" style="width: 120px;height: 192px;max-height: 100%;max-width: 100%;" src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" alt="...">
				  	</a>
				  	<div class="media-body">
				    	<h4 class="media-heading">蜘蛛侠：英雄远征</h4><span>2张</span>
				    	<div>2019-06-21</div>
				    	<div>郑州奥斯卡光合VIP影城</div>
				    	<div>2排3座  4排5座</div>
				  	</div>
				</div>*/
			$("#piaoshu").text("共有"+date.length+"张电影票");
			var playid=-1;
			var zhang=1;
			var thismedia;
			for(var i in date){
				if(date[i].playID!=playid){
					zhang=1;
					playid=date[i].playID;
					var img=$("<img class='media-object img-rounded' style='width: 120px;height: 192px;max-height: 100%;max-width: 100%;'/>");
					img.attr("src","http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+date[i].film.advFile);
					var a=$("<a class='pull-left' href='javascript:void(0);'></a>").append(img);
					var $h4=$("<h4 class='media-heading'>"+date[i].film.filmName+"</h4>");
					//console.info(date[i].playID);
					
					var $span=$("<span>"+zhang+"张</span>");
					//时间戳转换为时间
					
					var arr=new moment(date[i].playInfo.startTime).format("YYYY-MM-DD HH:mm:ss");
					var div1=$("<div>"+arr+"</div>");
					//var div4=$("<div>"+new moment(date[i].playInfo.endTime).format("YYYY-MM-DD HH:mm:ss")+"</div>");
					var div2=$("<div>"+date[i].cinema.cinemaName+"</div>");
					
					var div3=$("<div class='pai'>"+date[i].soldLine+"排"+date[i].soldColumn+"座</div>");
					var media_body=$("<div class='media-body'></div>");
					media_body.append($h4);
					media_body.append($span);
					media_body.append(div1);
					//media_body.append(div4);
					media_body.append(div2);
					media_body.append(div3);
					var endtime=new Date(date[i].playInfo.endTime).toLocaleString().replace(new RegExp('/','g'),"-").split(" ");
					
					var enddate=new moment(date[i].playInfo.endTime).format("YYYY-MM-DD HH:mm:ss");
					if(new Date(enddate)<=new Date()){
						var pianyi=$("<img src='http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/yifangying.png' class='pianyi' />");
						media_body.append(pianyi);
					}
					var media=$("<div class='media'></div>");
					media.append(a);
					media.append(media_body);
					$(".yingpian").append(media);
					thismedia=media;
				}else{
					thismedia.find("span").text((++zhang)+"张");
					var jia=thismedia.find(".pai").text();
					jia+=" "+date[i].soldLine+"排"+date[i].soldColumn+"座";
					thismedia.find(".pai").text(jia);
					
				}
				
			}
			
		},"JSON")
	}else if(xuanzhong=="看过的电影"){
		//alert("看过电影");
		$(".yingpian .media").remove();
		$.post("./selectTicketUserIDKanguo","userID="+userID,function(date){
			var count=0;
			var filmid=-1;
			for(var i in date){
				if(date[i].film.filmID!=filmid){
					count++;
					filmid=date[i].film.filmID;
					var img=$("<img class='media-object img-rounded' style='width: 120px;height: 192px;max-height: 100%;max-width: 100%;'/>");
					img.attr("src","http://localhost:8080/filmDB/bootstrap-3.3.7-dist/img/"+date[i].film.advFile);
					var a=$("<a class='pull-left' href='./selectFilmID?filmID="+filmid+"'></a>").append(img);
					var $h4=$("<h4 class='media-heading'>"+date[i].film.filmName+"</h4>");
					//时间戳转换为时间
					
					var arr=new moment(date[i].film.dateTime).format("YYYY-MM-DD HH:mm:ss");
					var div1=$("<div>上映时间："+arr+"</div>");
					var div2=$("<div>导演："+date[i].film.actor+"</div>");
					var zhuyan="";
					if(date[i].film.director.length>14){
						zhuyan=date[i].film.director.substring(0,13)+"...";
					}else{
						zhuyan=date[i].film.director;
					}
					var div3=$("<div>主演："+zhuyan+"</div>");
					var media_body=$("<div class='media-body'></div>");
					media_body.append($h4);
					media_body.append(div1);
					media_body.append(div2);
					media_body.append(div3);
					var media=$("<div class='media' filmID="+filmid+"></div>");
					media.append(a);
					media.append(media_body);
					$(".yingpian").append(media);
				}
			}
			$("#piaoshu").text("共有"+count+"部影片");
		},"JSON")
		
		//$(".media").on("click",yingpian);
	}
}
/*//单击查看影片详情
function yingpian(){
	
	$(".media").click(function(){
		alert("xx");
		filmID=$(this).attr("filmID");
		if(filmID.length>0){
			location.href="./selectFilmID?filmID="+filmID;
		}
	})
}*/
$(".shouye").click(function(){
	location.href="./home";
})
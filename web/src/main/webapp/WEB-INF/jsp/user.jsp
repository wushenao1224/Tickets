<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>淘票票</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="shortcut icon" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/titleImage.ico" type="image/x-icon" />
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/user.css">
  </head>
  
  <body style="background-image: url('${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/736FBCFAF491491F672CEB5CBDFF1EEA.jpg'); background-repeat:no-repeat;background-size: 100%;">
		<div class="user-body">
			<div class="user-bodyLeft">
				<div class="userinfo" userID="${user.userID }">
					<img  id="titleimg" class="img-circle" alt="40x40" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/${user.title_img}">
					<div id="userName" >${user.username}</div>
				</div>
				<div class="xuanXiang">
					<ul class="list-group">
						<li href="##" class="list-group-item xuanZhong">电影票</li>
						<li href="##" class="list-group-item ">看过的电影</li>
					</ul>
				</div>
			</div>
			<div class="user-bodyRight">
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/shouye.png" class="shouye"/>
				<div class="kanGuo">
					<h6 id="piaoshu">共有6部影片</h6>
					<div class="yingpian">
						
						<!-- <div class="media">
						    <a class="pull-left" href="#">
						    	<img class="media-object img-rounded" style="width: 120px;height: 192px;max-height: 100%;max-width: 100%;" src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" alt="...">
						  	</a>
						  	<div class="media-body">
						    	<h4 class="media-heading">千与千寻</h4>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						  	</div>
						</div>
						<div class="media">
						    <a class="pull-left" href="#">
						    	<img class="media-object img-rounded" style="width: 120px;height: 192px;max-height: 100%;max-width: 100%;" src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" alt="...">
						  	</a>
						  	<div class="media-body">
						    	<h4 class="media-heading">千与千寻</h4>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						  	</div>
						</div>
						<div class="media">
						    <a class="pull-left" href="#">
						    	<img class="media-object img-rounded" style="width: 120px;height: 192px;max-height: 100%;max-width: 100%;" src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" alt="...">
						  	</a>
						  	<div class="media-body">
						    	<h4 class="media-heading">千与千寻</h4>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						    	<div>2019-06-21</div>
						  	</div>
						</div> -->
						
						<!-- <div class="media">
						    <a class="pull-left" href="#">
						    	<img class="media-object img-rounded" style="width: 120px;height: 192px;max-height: 100%;max-width: 100%;" src="img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" alt="...">
						  	</a>
						  	<div class="media-body">
						    	<h4 class="media-heading">蜘蛛侠：英雄远征</h4><span>2张</span>
						    	<div>2019-06-21</div>
						    	<div>郑州奥斯卡光合VIP影城</div>
						    	<div>2排3座  4排5座</div>
						  	</div>
						</div> -->
					</div>
				</div>
			</div>
		</div>
	</body>
	  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> 
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/moment.min.js"></script> 
  <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/user.js" ></script>
</html>

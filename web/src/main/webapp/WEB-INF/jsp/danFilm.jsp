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
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/title.css">
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/film.css">

  </head>
  
  <body>
    <%@include file="title.jsp" %>
    <border>
		<div class="film-info">
			<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" style="height: 361px; width: 100%;" />
			<div class="film-div">
				<div class="film-center">
					<h4 class="film-name">${filmInfo.filmName }</h4>
					
					<div class="media">
					    <a class="pull-left film-img" href="javaScript:void(0);">
					    	<img class="media-object" style="max-height: 100%;max-width: 100%;" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/${filmInfo.advFile}" alt="...">
					  	</a>
					  	<div class="media-body">
					    	<div>导演：${filmInfo.actor }</div>
							<div>主演：${filmInfo.director }</div>
							<div>类型：${filmInfo.typeName }</div>
							<div>制片国家/地区：${filmInfo.region }</div>
							<div>片长：${filmInfo.timelong }分钟</div>
							<div>上映时间：${filmInfo.dateTime }</div>
							<div>剧情介绍：${filmInfo.details }</div>
					  	</div>
					</div>
				</div>
			</div>
		</div>
		<div class="film-center">
			<h4 class="cinema-name">今日影院信息</h4>
			<span class="jiantou-left"><img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/jiantou_left.png"/></span>
			<div class="cinema-body">
				<c:forEach items="${playInfoList }" var="playInfo" varStatus="index">
					<div playID="${playInfo.playID }" class="media <c:if test="${index.index==0 }">
										box-shadow
									</c:if>">
						<div class="media-body">
					    	<div class="media-div"><a href="${pageContext.request.contextPath }/selectCinemaID?cinemaID=${playInfo.cinemaID }">影院名：${playInfo.cinema.cinemaName }</a></div>
							<div class="media-div">票价：${playInfo.sellingFare }元</div>
							<div class="media-div">开始时间：${playInfo.startTime }</div>
							<div class="media-div">结束时间：${playInfo.endTime }</div>
					  	</div>
					</div>
				</c:forEach>
			</div>
			<span class="jiantou-right"><img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/jiantou_right.png"/></span>
		</div>
		<div class="film-center">
			<h4 class="cinema-name">选座购票</h4>
			<div class="cinema-zuowei">
				<div class="cinema-yinmu">影院银幕</div>
				<div class="btn-group" >
					<c:forEach begin="1" end="${ 6*14}" var="num">
						<button class="btn btn-default" number="${num }"></button>
					</c:forEach>
	            	<!-- <button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button>
	            	<button class="btn btn-default"></button> -->
	            </div>
	            <div class="jieshao">
	            	<button class="btn btn-default"></button>可选
	            	<button class="btn btn-danger"></button>已售
	            	<button class="btn btn-success"></button>已选
	            	<div>
	            		<span>票价：<span id="piaojia">0元</span></span>
	            		<button class="btn btn-danger" id="cinema-mai">确认选座</button>
	            	</div>
	            </div>
			</div>
		</div>
	</border>
  </body>
   <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=e25567f7cf1a430afe313f7aa4f0043b&plugin=AMap.CitySearch"></script>
	 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
	 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> 
	 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/title.js" ></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/film.js" ></script>
</html>

<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
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
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/cinema.css">
  </head>
  
  <body>
  	<%@include file="title.jsp" %>
    <border>
		<div class="film-info">
			<img src="http://placehold.it/140x140" style="height: 361px; width: 100%;" />
			<div class="film-div">
				<div class="film-center">
					<h4 class="film-name">${cinema.cinemaName }</h4>
					<h6 class="cinema-address">${cinema.fulladdress }</h6>
					<div id="container" class="map" lng="${cinema.lng}"  lat="${cinema.lat}"></div>
					
					
				</div>
			</div>
		</div>
		<div class="film-center">
			<h4 class="cinema-name">今日影片信息</h4>
			<span class="jiantou-left"><img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/jiantou_left.png"/></span>
			<div class="ji">
				<c:forEach items="${playInfoList }" var="playInfo" varStatus="index">
					<div playID="${playInfo.playID }" <c:if test="${index.index==0 }">class="box-shadow"</c:if>>
						<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/${playInfo.film.advFile}" />
						<ul class="xin" filmID="${playInfo.film.filmID }">
							<li class="list-unstyled">片名：${playInfo.film.filmName }</li>
							<li class="list-unstyled">主演：
								<c:if test="${fn:length(playInfo.film.director)>7 }">
									${fn:substring(playInfo.film.director,0,6) }...
								</c:if>
								<c:if test="${fn:length(playInfo.film.director)<=7 }">
									${listFilmInfo[index].director}
								</c:if>
							</li>
							<li class="list-unstyled">导演：${playInfo.film.actor }</li>
							<li class="list-unstyled">类型：${playInfo.film.typeName }</li>
							<li class="list-unstyled">地区：${playInfo.film.region }</li>
							<li class="list-unstyled">语言：${playInfo.film.speech }</li>
							<li class="list-unstyled">片长：${playInfo.film.timelong }分钟</li>
							<li class="list-unstyled">票价：${playInfo.sellingFare }元</li>
						</ul>
						<div>
							播放时间 <fmt:formatDate value="${playInfo.startTime}" pattern="hh:mm:ss"/>-<fmt:formatDate value="${playInfo.endTime}" pattern="hh:mm:ss"/>
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
	 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/cinema.js" ></script>
</html>

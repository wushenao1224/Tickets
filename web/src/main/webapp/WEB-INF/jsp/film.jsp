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
  </head>
  
  <body>
     <%@include file="title.jsp" %>
     <div class="yingpian">
		<ul class="nav nav-tabs">
		    <li class="active" ><a href="javascript:void(0);" class="reying">正在热映<span>(${reying })</span></a></li>
		    <li><a href="javascript:void(0);" class="jijiang">即将上映<span>(${jijiang })</span></a></li>
		   <!--  <a href="javascript:void(0);" class="yingpian_cha">查看全部>></a> -->
		</ul>
		<div class="ji">
			<c:forEach items="${listFilmInfo }" var="filmInfo">
				<div>
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/${filmInfo.advFile}" />
				<ul class="xin" filmID="${filmInfo.filmID }">
					<li class="list-unstyled">片名：${filmInfo.filmName }</li>
					<li class="list-unstyled">主演：
						<c:if test="${fn:length(filmInfo.director)>7 }">
							${fn:substring(filmInfo.director,0,6) }...
						</c:if>
						<c:if test="${fn:length(filmInfo.director)<=7 }">
							${filmInfo.director}
						</c:if>
					</li>
					<li class="list-unstyled">导演：${filmInfo.actor }</li>
					<li class="list-unstyled">类型：${filmInfo.typeName }</li>
					<li class="list-unstyled">地区：${filmInfo.region }</li>
					<li class="list-unstyled">语言：${filmInfo.speech }</li>
					<li class="list-unstyled">片长：${filmInfo.timelong }</li>
				</ul>
				<div>
					上映时间<fmt:formatDate value="${filmInfo.dateTime }" pattern="yyyy-MM-dd"/>
				</div>
			</div>
			</c:forEach>
			<%-- <div>
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" />
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
			</div>
			<div>
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" />
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
			</div>
			<div>
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" />
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
			</div>
			<div>
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/b88c7d911193153988cbbc1f8ccf3225_TB1RmuAuoY1gK0jSZFMXXaWcVXa_.jpg_300x300.jpg" />
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
			</div> --%>
		</div>
	</div>
  </body>
	  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=e25567f7cf1a430afe313f7aa4f0043b&plugin=AMap.CitySearch"></script>
	 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
	 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> 
	 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/title.js" ></script>
	 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/film.js" ></script>
</html>

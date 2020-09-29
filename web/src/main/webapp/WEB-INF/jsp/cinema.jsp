<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
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
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/cinema.css">
  </head>
  
  <body>
	<%@include file="title.jsp" %>
	<boder>
		<div class="yingpian">
			<form class="form-inline" role="form" action="${pageContext.request.contextPath }/cinema" method="post">
			  <div class="form-group">
			    <label class="sr-only" for="exampleInputEmail2">影院名</label>
			    <input type="text" class="form-control" id="exampleInputEmail2" value="${cinemaName }" name="cinemaName" placeholder="请输入你要查询的影院">
			  </div>
			  <div class="form-group">
			    <label class="sr-only" for="exampleInputPassword2">地区</label>
			    <input type="text" class="form-control" id="exampleInputPassword2" value="${cinemaAddress }" name="cinemaAddress" placeholder="请输入你要查询的城市">
			  </div>
			  <input type="hidden" value="cha" name="cha"/>
			  <button type="submit" class="btn btn-danger">搜索</button>
			</form>
			<div class="list-group">
				<c:forEach items="${listCinema }" var="cinema" varStatus="index">
					<a href="${pageContext.request.contextPath }/selectCinemaID?cinemaID=${cinema.cinemaID}" class="list-group-item"><span>
					<c:if test="${fn:length(cinema.cinemaName )>9 }">
						${fn:substring(cinema.cinemaName,0,8) }...
					</c:if>
					<c:if test="${fn:length(cinema.cinemaName )<=9 }">
						${cinema.cinemaName }
					</c:if>
					</span><span class="address">
					<c:if test="${fn:length(cinema.fulladdress )>26 }">
						${fn:substring(cinema.fulladdress,0,25) }...
					</c:if>
					<c:if test="${fn:length(cinema.fulladdress )<=26 }">
						${cinema.fulladdress}
					</c:if>
					</span><span class="num">售票数:${CinemaCount[index.index] }</span></a>
				
				</c:forEach>
			</div>
		</div>
		
	</boder>
  </body>
  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=e25567f7cf1a430afe313f7aa4f0043b&plugin=AMap.CitySearch"></script>
 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> 
 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/title.js" ></script>
 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/cinema.js" ></script>
</html>

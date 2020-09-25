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
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/home.css" />
  </head>
  
  <body>
    <%@include file="title.jsp" %>
    <nav>
		<div class="container">
				<div class="carousel slide" id="slidershow" data-ride="carousel" data-interval="5000">
					<!--计数器-->
					<ol class="carousel-indicators">
						<li class="active" data-target="#slidershow" data-slide-to="0"></li>
						<li data-target="#slidershow" data-slide-to="1"></li>
						<li data-target="#slidershow" data-slide-to="2"></li>
					</ol>
					<!--图片容器-->
					<div class="carousel-inner">
						<div class="item active">
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/title01.png" />
							<!--添加对应标题和内容-->
							<div class="carousel-caption">
								<h4>淘票票</h4>
							</div>
						</div>
						<div class="item">
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/title02.jpg"/>
							<!--添加对应标题和内容-->
							<div class="carousel-caption">
								<h4>头脑特工队</h4>
							</div>
						</div>
						<div class="item">
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/man.jpg"/>
							<!--添加对应标题和内容-->
							<div class="carousel-caption">
								<h4>漫威</h4>
							</div>
						</div>
						<!--轮播导航-->
						<a href="#slidershow" data-slide="prev" class="left carousel-control" role="button">
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/rightimg.png"/>
						</a>
						<a href="#slidershow" data-slide="next" class="right carousel-control" role="button">
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/leftimg.png"/>
						</a>
					</div>
				</div>
		</div>
	</nav>
    <boder>
			<div class="yingpian">
				<ul class="nav nav-tabs">
				    <li class="active" ><a href="javascript:void(0);" class="reying">正在热映<span>(${reying })</span></a></li>
				    <li><a href="javascript:void(0);" class="jijiang">即将上映<span>(${jijiang })</span></a></li>
				    <a href="${pageContext.request.contextPath }/film" class="yingpian_cha">查看全部>></a>
				</ul>
				<div class="ji">
					<c:forEach end="3" begin="0" var="index">
						<div>
							<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/${listFilmInfo[index].advFile}" />
							<ul class="xin" filmID="${listFilmInfo[index].filmID }">
								<li class="list-unstyled">片名：${listFilmInfo[index].filmName }</li>
								<li class="list-unstyled">主演：
									<c:if test="${fn:length(listFilmInfo[index].director)>7 }">
										${fn:substring(listFilmInfo[index].director,0,6) }...
									</c:if>
									<c:if test="${fn:length(listFilmInfo[index].director)<=7 }">
										${listFilmInfo[index].director}
									</c:if>
								</li>
								<li class="list-unstyled">导演：${listFilmInfo[index].actor }</li>
								<li class="list-unstyled">类型：${listFilmInfo[index].typeName }</li>
								<li class="list-unstyled">地区：${listFilmInfo[index].region }</li>
								<li class="list-unstyled">语言：${listFilmInfo[index].speech }</li>
								<li class="list-unstyled">片长：${listFilmInfo[index].timelong }</li>
							</ul>
							<div>
								上映时间<fmt:formatDate value="${listFilmInfo[index].dateTime }" pattern="yyyy-MM-dd"/>
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
			<div style="margin-top: 20px;margin-bottom: 20px;">
				<img style="width: 100%;" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/Z21ATRD62TYBBOLHSFEJYG.png" />
			</div>
			<div class="paihangdiv">
				<div class=" paihang">
					<ul class="nav nav-tabs">
				    <li class="active" ><a href="javascript:void(0);">上周票房排行</a></li>
				    <a href="${pageContext.request.contextPath }/film" class="yingpian_cha">查看全部>></a>
					</ul>
					<div class="list-group">
						<c:forEach begin="0" end="9" var="i">
							<c:if  test="${i<3 }">
								<a href="${pageContext.request.contextPath }/selectFilmID?filmID=${paiFilmInfo[i].filmID}" class="list-group-item"><img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/top${i+1 }.png" /><span class="name">${paiFilmInfo[i].filmName }</span></a>
							</c:if>
							<c:if  test="${i>=3 }">
								<a href="${pageContext.request.contextPath }/selectFilmID?filmID=${paiFilmInfo[i].filmID}" class="list-group-item"><span class="shu">${i+1 }</span><span class="name">${paiFilmInfo[i].filmName }</span></a>
							</c:if>
						</c:forEach>
						
						
					</div>
				</div>
				
				<div class=" paihang">
					<ul class="nav nav-tabs">
				    <li class="active" ><a href="javascript:void(0);">热门影院排行</a></li>
				    <a href="${pageContext.request.contextPath }/cinema?address=" class="yingpian_cha yingYuan">查看全部>></a>
					</ul>
					<div class="list-group">
						<c:forEach begin="0" end="9" var="i">
							<c:if  test="${i<3 }">
								<a href="${pageContext.request.contextPath }/selectCinemaID?cinemaID=${paiCinema[i].cinemaID }" class="list-group-item"><img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/top${i+1 }.png" /><span class="name">${paiCinema[i].cinemaName }</span></a>
							</c:if>
							<c:if  test="${i>=3 }">
								<a href="${pageContext.request.contextPath }/selectCinemaID?cinemaID=${paiCinema[i].cinemaID }" class="list-group-item"><span class="shu">${i+1 }</span><span class="name">${paiCinema[i].cinemaName }</span></a>
							</c:if>
						</c:forEach>
					</div>
				</div>
			</div>
			<div class="paihangdiv">
				<h4>新片观影指南</h4>
			
				<div id="calendar" style="display: inline-block;margin-left: 60px;">
		            <h4>2013年10月</h4>
		             <span class="a1"><</span>
		             <span class="a2">></span>
		             <ul class="week">
		                 <li>日</li>
		                 <li>一</li>
		                 <li>二</li>
		                 <li>三</li>
		                 <li>四</li>
		                 <li>五</li>
		                 <li>六</li>
		             </ul>
		             <ul class="dateList"></ul>
	         	</div>
	         	<div class="ji" style="display: inline-block;position: absolute;margin-left: 40px;">
					<div id="zhiDing">
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
				</div>
         	</div>
		</boder>
  </body>
  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=e25567f7cf1a430afe313f7aa4f0043b&plugin=AMap.CitySearch"></script>
 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
 <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/moment.js"></script>
  <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/title.js" ></script>
 <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/home.js"></script>
</html>

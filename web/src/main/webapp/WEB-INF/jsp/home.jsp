<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>首页</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/title.css">
	 <link rel="shortcut icon" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/titleImage.ico" type="image/x-icon" />
	 <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/home.css" />

  </head>
  
  <body>
		<header  style="width: 100%;">
			<div class="navbar navbar-default" role="navigation">
				
				  　<div class="navbar-header">
				  　    <a href="##" class="navbar-brand"><div class="navbar-brand" style="width: 300px;"></div><span>淘票票</span></a>
				  　</div>
				     <ul class="nav navbar-nav">
					      <li class="dropdown">
					        <a href="##" data-toggle="dropdown" class="dropdown-toggle" id="dd_title">郑州<span class="caret"></span></a>
					        <dl class="dropdown-menu dl-horizontal">
									
								    
							</dl>  
					     </li>
				         <li><a href="##">影片</a></li>
				         <li><a href="##">影院</a></li>
				         
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<div  style="width: 400px;"></div>
						<li><a href="##">小两只</a></li>
						 <li class="col-sm-1">
		     				<img style="width: 50px; height: 50px;" id="titleimg"  class="img-circle" alt="40x40" src="http://placehold.it/140x140">
		    			</li>
					</ul>
			</div>
			<div class="modal fade" id="zhuCe" tabindex="-1" data-backdrop="static">
			    <div class="modal-dialog" data-backdrop="static">
			    	<form class="modal-content" id="dengLuForm">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							<h4 class="modal-title text-center text-danger">欢迎登录淘票票</h4>
						</div>
						<div class="modal-body" id="denglubody">
							<div class="form-group">
							    <label for="inputText" class="col-sm-4 control-label">昵称</label>
							    <div class="col-sm-6">
							      <input type="text" class="form-control" id="inputText" placeholder="昵称">
							    </div>
							     <span class="help-block text-danger"></span>
							</div>
							<div class="form-group">
							    <label for="inputPassword" class="col-sm-4 control-label">密码</label>
							    <div class="col-sm-6">
							      <input type="password" class="form-control" id="inputPassword" placeholder="密码">
							    </div>
							    <span class="help-block text-danger"></span>
							</div>
						</div>
						<div class="modal-footer">
							<a class="btn btn-info text-right" href="register.html" style="transform: translateX(-320px);">注册新用户</a>
							<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
							<button type="submit" class="btn btn-primary">登录</button>
						</div>
					</form>
				</div>
			</div>
			<div class="modal  fade" id="xiuGai" tabindex="-1" data-backdrop="static">
			    <div class="modal-dialog" data-backdrop="static">
			    	<div class="modal-content" id="xiuGaiForm">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							<h4 class="modal-title text-center text-danger">这是您的个人信息</h4>
						</div>
						<form id="imgform">
							<div class="modal-body">
								 <img  class="img-rounded" alt="140x140" src="http://placehold.it/140x140" style="width: 140px;height: 140px;">
								 <a href="" class="a-upload">
								    <input type="file" name="imgtitle" id="xiuGaiimg">修改头像
								</a>
							</div>
						</form>
						<form id="xinxiform" class="form-horizontal">
							<div class="modal-body" id="xiuGaibody" >
								<div class="form-group">
								    <label for="inputText" class="col-sm-3 control-label">昵称</label>
								    <div class="col-sm-6">
								      <input type="text" class="form-control" id="xiuGaiinputText" placeholder="昵称" disabled>
								    </div>
								     <span class="help-block text-danger"></span>
								</div>
								<div class="form-group">
								    <label for="inputPassword" class="col-sm-3 control-label">密码</label>
								    <div class="col-sm-6">
								      <input type="password" class="form-control" id="xiuGaiinputPassword" placeholder="密码" disabled>
								    </div>
								    <span class="help-block text-danger"></span>
								</div>
								<div class="form-group">
								    <label class="col-sm-3 control-label xingbie">性别</label>
								    <div class="col-sm-4" style="transform: translateX(25px);">
								      <input type="radio" name="xiuGaisex" value="男" disabled>&nbsp;男&nbsp;&nbsp;
								      <input type="radio" name="xiuGaisex" value="女" disabled>&nbsp;女&nbsp;&nbsp;
								    </div>
								    <span id="checked" class="help-block text-danger"></span>
								</div>
								<div class="text-right"><div class="checkbox"><label><input type="checkbox" class="text-center" id="xiuGaiChexkbox">修改信息</label></div></div>
								
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
								<button type="submit" class="btn btn-primary">登录</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</header>
		<nav>
			<div class="container" >
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
								<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/manWei.jpg"/>
								<!--添加对应标题和内容-->
								<div class="carousel-caption">
									<h4>漫威</h4>
								</div>
							</div>
							<!--轮播导航-->
							<a href="#slidershow" data-slide="prev" class="left carousel-control" role="button">
								<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/right.png"/>
							</a>
							<a href="#slidershow" data-slide="next" class="right carousel-control" role="button">
								<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/left.png"/>
							</a>
						</div>
					</div>
			</div>
		</nav>
		
		<footer>
			<div class="guDing">
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/TaoGuDing01.png" style="width: 100%;"/>
				<span>&times;</span>
			</div>
			<div class="guDing">
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/TaoGuDing02.png"/>
			</div>
		</footer>
	</body>
  <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=e25567f7cf1a430afe313f7aa4f0043b&plugin=AMap.CitySearch"></script>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script> 
  <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/title.js" ></script>
  <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/home.js"></script>
</html>

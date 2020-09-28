<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>淘票票注册</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/css/bootstrap.min.css">
	 <link rel="shortcut icon" href="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/titleImage.ico" type="image/x-icon" />
	
  </head>
  
  <body>
  		<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/shouye.png" class="shouye" style="position: fixed;width: 37px;top: 6px;right: 28px;"/>
		<div class="text-left" style="float: left; margin:0px 50px 0px 0px;" >
			<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/registerRight.jpg" style="height: 740px;"/>
		</div>
		<div class="text-center" style="float: left; width:60%;" >
			<h2 class="text-left" style="padding:90px 0px 10px 170px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎注册淘票票
				<h4 class="text-left" style="padding:0px 0px 30px 170px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每一天，乐在观赏。</h4>
			</h2>
			<form class="text-center form-horizontal" id="formregister" style=" transform: translateX(100px);" action="${pageContext.request.contextPath }/registerUser" method="post">
				<div class="form-group">
				    <label for="inputText" class="col-sm-2 control-label">昵称</label>
				    <div class="col-sm-4">
				      <input type="text" class="form-control" id="inputText" name="username" placeholder="昵称">
				      
				    </div>
				     <span class="help-block text-danger"></span>
				</div>
				<div class="form-group">
				    <label for="inputPassword" class="col-sm-2 control-label">密码</label>
				    <div class="col-sm-4">
				      <input type="password" class="form-control" id="inputPassword" name="password" placeholder="密码">
				    </div>
				    <span class="help-block text-danger"></span>
				</div>
				<div class="form-group">
				    <label for="inputPasswordnew" class="col-sm-2 control-label">确认密码 </label>
				    <div class="col-sm-4">
				      <input type="password" class="form-control" id="inputPasswordnew" placeholder="请再次输入密码">
				    </div>
				    <span class="help-block text-danger"></span>
				</div>
				<div class="form-group">
				    <label class="col-sm-2 control-label">性别</label>
				    <div class="col-sm-2">
				      <input type="radio" name="sex" value="男">&nbsp;&nbsp;男&nbsp;&nbsp;&nbsp;&nbsp;
				      <input type="radio" name="sex" value="女">&nbsp;&nbsp;女
				    </div>
				    <span id="checked" class="help-block text-danger"></span>
				</div>
				<div class="form-group">
					<input type="submit" class="btn btn-info" value="注册"  style="width: 350px; transform: translateX(-180px);"/>
				</div>
			</form>
		</div>
	</body>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/jquery-1.12.4.js"></script>
  <script src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/js/registerJquery.js" ></script>
</html>

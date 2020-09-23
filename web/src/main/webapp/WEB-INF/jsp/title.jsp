<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@include file="userInfo.jsp" %>

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
					     <li><a href="${pageContext.request.contextPath }/home" class="dao">首页</a></li>
				         <li><a href="${pageContext.request.contextPath }/film" class="dao">影片</a></li>
				         <li><a href="javascript:void(0);" class="dao yingYuan">影院</a></li>
				         
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<div  style="width: 400px;"></div>
						<li id="userName" 
							<c:if test="${userID !=null}">userid='${sessionScope.userID}'</c:if>
							<c:if test="${! empty tiShiUser}">tishiuser='${tiShiUser}'</c:if>
						></li>
						 <li class="col-sm-1">
		     				<img style="width: 50px; height: 50px;" id="titleimg" lujing="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/" style="max-width: 100%;max-height: 100%;" class="img-circle" alt="40x40" src="http://placehold.it/140x140">
		    			</li>
					</ul>
			</div>
			<div class="modal fade" id="zhuCe" tabindex="-1" data-backdrop="static">
			    <div class="modal-dialog" data-backdrop="static">
			    	<form class="modal-content" id="dengLuForm" method="post" action="${pageContext.request.contextPath }/disembarkUser">
						<div class="modal-header">
							<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
							<h4 class="modal-title text-center text-danger">欢迎登录淘票票</h4>
						</div>
						<div class="modal-body" id="denglubody">
							<div class="form-group">
							    <label for="inputText" class="col-sm-2 control-label">昵称</label>
							    <div class="col-sm-7">
							      <input type="text" class="form-control" id="inputText" name="zhuusername" placeholder="昵称">
							    </div>
							     <span class="help-block text-danger"></span>
							</div>
							<div class="form-group">
							    <label for="inputPassword" class="col-sm-2 control-label">密码</label>
							    <div class="col-sm-7">
							      <input type="password" class="form-control" id="inputPassword" name="zhupassword" placeholder="密码">
							    </div>
							    <span class="help-block text-danger"></span>
							</div>
							<a href="${pageContext.request.contextPath }/backstageLongin.jsp" class="pull-right" style="color: #ee6969;font-size: 10px;">管理员登录</a>
						</div>
						<div class="modal-footer">
							<a class="btn btn-info text-right" href="${pageContext.request.contextPath }/register.jsp" style="transform: translateX(-320px);">注册新用户</a>
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
						<form id="imgform" method="post" enctype="multipart/form-data" action="${pageContext.request.contextPath }/insert_titleImg">
							<div class="modal-body">
								 <img  class="img-rounded" alt="140x140"  style="width: 140px;height: 140px;">
								 <a href="" class="a-upload">
								    <input type="file" name="imgtitle" id="xiuGaiimg">修改头像
								</a>
							</div>
							<input type="hidden" value="${userID }" name="userID"> 
						</form>
						<form id="xinxiform" class="form-horizontal" action="${pageContext.request.contextPath }/xiuUser" method="post">
							<input type="hidden" value="${userID }" name="userID"> 
							<div class="modal-body" id="xiuGaibody" >
								<div class="form-group">
								    <label for="inputText" class="col-sm-2 control-label text-center">昵称</label>
								    <div class="col-sm-6">
								      <input type="text" class="form-control"  id="xiuGaiinputText" onblur="xiuTextName()" name="xiuUserName" placeholder="昵称" disabled>
								    </div>
								     <span class="help-block text-danger"></span>
								</div>
								<div class="form-group">
								    <label for="inputPassword" class="col-sm-2 control-label">密码</label>
								    <div class="col-sm-6">
								      <input type="password" class="form-control" id="xiuGaiinputPassword" onblur="xiuPossword()" name="xiuUserpassword" placeholder="密码" disabled>
								    </div>
								    <span class="help-block text-danger"></span>
								</div>
								<div class="form-group">
								    <label class="col-sm-2 control-label xingbie">性别</label>
								    <div class="col-sm-4" style="transform: translateX(25px);">
								      <input type="radio" name="xiuGaisex" value="男" disabled>&nbsp;男&nbsp;&nbsp;
								      <input type="radio" name="xiuGaisex" value="女" disabled>&nbsp;女&nbsp;&nbsp;
								    </div>
								    <span id="checked" class="help-block text-danger"></span>
								</div>
								<div class="text-right"><a href="${pageContext.request.contextPath }/user?userID=${sessionScope.userID}" style="color: red;font-size: 6px;">个人中心</a><div class="checkbox"><label><input type="checkbox" class="text-center" id="xiuGaiChexkbox">修改信息</label></div></div>
								
							</div>
							<div class="modal-footer">
								<a class="btn btn-info text-right" href="${pageContext.request.contextPath }/deleteCookie" style="transform: translateX(-320px);">退出当前登录</a>
								<button type="button" class="btn btn-default"  data-dismiss="modal">关闭</button>
								<button type="submit" class="btn btn-primary">修改</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</header>
		
		
		<footer>
			<div class="guDing">
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/TaoGuDing01.png" style="width: 100%;"/>
				<span>&times;</span>
			</div>
			<div class="guDing">
				<img src="${pageContext.request.contextPath }/bootstrap-3.3.7-dist/img/TaoGuDing02.png"/>
			</div>
		</footer>
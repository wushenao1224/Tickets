<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<% 
	Cookie[] cookie=request.getCookies();
	String userID="";
	if(cookie!=null){
		for(int i=0;i<cookie.length;i++){
			if(cookie[i].getName().equals("userID")){
				userID=cookie[i].getValue();
			}
		}
	}
	session.setAttribute("userID", userID);
%>


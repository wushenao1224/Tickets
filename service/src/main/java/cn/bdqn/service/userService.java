package cn.bdqn.service;

import cn.bdqn.domain.user;


public interface userService {

	Integer createUser(user user);

	Integer selectNameCount(String userName);

	Integer selectUserID(String userName, String password);

	user selectUser(Integer userID);

	Integer insertTitleImg(Integer userID, String fileName);

	Integer servletUpdate(user user);
	
	//查询返回出当前userID外有没有相同用户名个数   //integer类型数据
	Integer selectuserID(String username, Integer userID);
}

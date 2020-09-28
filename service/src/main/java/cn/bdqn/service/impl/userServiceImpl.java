package cn.bdqn.service.impl;

import cn.bdqn.domain.user;
import cn.bdqn.mapper.userMapper;
import cn.bdqn.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements userService {
	@Autowired
	private userMapper userMapper;
	@Override
	public Integer createUser(user user) {
		return userMapper.insert(user);
	}

	@Override
	public Integer selectNameCount(String userName) {
		return userMapper.selectNameCount(userName);
	}

	@Override
	public Integer selectUserID(String userName, String password) {
		return null;
	}

	@Override
	public user selectUser(Integer userID) {
		return userMapper.selectUser(userID);
	}

	@Override
	public Integer insertTitleImg(Integer userID, String fileName) {
		user user=new user();
		user.setUserID(userID);
		user.setTitle_img(fileName);
		return userMapper.updateUser(user);
	}

	@Override
	public Integer servletUpdate(user user) {
		return null;
	}

	@Override
	public Integer selectuserID(String username, Integer userID) {
		return null;
	}
}

package cn.bdqn.service.impl;

import cn.bdqn.domain.user;
import cn.bdqn.service.userService;
import org.springframework.stereotype.Service;

@Service
public class userServiceImpl implements userService {

	@Override
	public Integer createUser(user user) {
		return null;
	}

	@Override
	public Integer selectNameCount(String userName) {
		return null;
	}

	@Override
	public Integer selectUserID(String userName, String password) {
		return null;
	}

	@Override
	public user selectUser(Integer userID) {
		return null;
	}

	@Override
	public Integer insertTitleImg(Integer userID, String fileName) {
		return null;
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

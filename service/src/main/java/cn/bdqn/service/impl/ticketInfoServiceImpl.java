package cn.bdqn.service.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import cn.bdqn.domain.ticketInfo;
import cn.bdqn.mapper.ticketInfoMapper;
import cn.bdqn.service.ticketInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("ticketInfoService")
public class ticketInfoServiceImpl implements ticketInfoService {
	@Autowired
	private cn.bdqn.mapper.ticketInfoMapper ticketInfoMapper;

	@Override
	public Integer insertTicketInfo(ticketInfo ticket) {
		return null;
	}

	@Override
	public List<ticketInfo> selectTicketPlayID(Integer playID) {
		return null;
	}

	@Override
	public List<ticketInfo> selectTicketUserId(Integer userID) {
		return ticketInfoMapper.selectTicketUserId(userID);
	}

	@Override
	public List<ticketInfo> selectTicketUserIdKanguo(Integer userID) {
		return ticketInfoMapper.selectTicketUserIdKanguo(userID);
	}

	@Override
	public int deleteTicketPlayID(List<Integer> listPlayID) {
		return 0;
	}
}

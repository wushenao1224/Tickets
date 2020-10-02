package cn.bdqn.service;

import java.util.List;

import cn.bdqn.domain.ticketInfo;

public interface ticketInfoService {

	Integer insertTicketInfo(ticketInfo ticket);

	List<ticketInfo> selectTicketPlayID(Integer playID);

	List<ticketInfo> selectTicketUserId(Integer userID);

	List<ticketInfo> selectTicketUserIdKanguo(Integer userID);

	//utils.ticketInfoPage selectTicketPage(Integer currPageNo);

	int deleteTicketPlayID(List<Integer> listPlayID);

}

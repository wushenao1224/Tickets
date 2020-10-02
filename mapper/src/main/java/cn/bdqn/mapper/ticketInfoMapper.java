package cn.bdqn.mapper;

import cn.bdqn.domain.ticketInfo;

import java.util.List;

public interface ticketInfoMapper {
    Integer executeUpdate(String sql, Object[] ob);

    List<ticketInfo> selectTicketPlayID(Integer playID);

    List<ticketInfo> selectTicketUserId(Integer userID);

    List<ticketInfo> selectTicketUserIdKanguo(Integer userID);

    Integer selectAllCount();

    List<ticketInfo> selectPage(Integer sqlCount, Integer pageSize);

}

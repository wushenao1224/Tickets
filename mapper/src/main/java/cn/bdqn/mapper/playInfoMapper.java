package cn.bdqn.mapper;

import cn.bdqn.domain.playInfo;
import cn.bdqn.domain.ticketInfo;

import java.util.List;

/**
 * 电影放映信息表
 */
public interface playInfoMapper {
        //增加更多电影放映信息
         Integer playInfoInsert(playInfo playInfo);
         //更新更多电影放映信息
        Integer playInfoUpdate(playInfo playInfo);
        //查询以电影放映信息查询票数
        List<ticketInfo> selectTicketPlayID(Integer playID);
}

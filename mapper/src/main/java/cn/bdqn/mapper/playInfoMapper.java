package cn.bdqn.mapper;

import cn.bdqn.domain.playInfo;
import cn.bdqn.domain.ticketInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 电影放映信息表
 */
public interface playInfoMapper {
        //增加更多电影放映信息
         Integer playInfoInsert(playInfo playInfo);
         //更新更多电影放映信息
        Integer playInfoUpdate(playInfo playInfo);
        //查询电影影院ID,当前时间，结束时间；
        List<playInfo> selectFilmID(@Param("filmID") Integer filmID, @Param("dangDateString") String dangDateString, @Param("houDateString") String houDateString);
        //查询电影D,当前时间，结束时间；
        List<playInfo> selectCinemaID( @Param("cinemaID") Integer cinemaID,@Param("dangDateString") String dangDateString,@Param("houDateString") String houDateString);

         Integer selectCountAll(List<String> sqlList, String sqlstring);
        List<playInfo> selectPlayInfoPage(List<String> sqlList, String sqlstring, Integer pageSize, Integer sqlCount);

        playInfo selectPlayID(Integer playID);

        List<Integer> selectPlayIDdelete(Integer ID, String sQLstring);

}

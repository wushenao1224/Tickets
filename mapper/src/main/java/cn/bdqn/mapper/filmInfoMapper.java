package cn.bdqn.mapper;

import cn.bdqn.domain.filmInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface filmInfoMapper {
    //查询两时间差之间电影的个数
    Integer selectCountFilm(@Param("smallDate") String smallDate, @Param("bigDate") String bigDate);
    //查询两时间的电影
    List<filmInfo> selectDate(@Param("dangDate") String dangDate,@Param("houDate") String houDate,@Param("pai") String pai);
    //查询前十电影
    List<filmInfo> selectFilmAll(@Param("dang") String dang,@Param("hou") String hou);

    //增加影片信息
    Integer filmInfoInsert(filmInfo filmInfo);
    //修改影片信息
    Integer filmInfoUpdate(filmInfo filmInfo);
    //查询指定时间
    filmInfo selectZhiDingFilmInfo(String dateTime);
    //由Id进行查询
    filmInfo selectFilmID(Integer filmID);
    //影片查询 id ,名字name
    List<filmInfo> selectIDname();
}

package cn.bdqn.mapper;

import cn.bdqn.domain.cinema;

import java.util.List;

public interface cinemaMapper {
    //查询全部电影院
    List<cinema> selectAll();

    List<cinema> selectCinemaAlles();
    //电影院ID
    cinema selectCinemaID(Integer cinemaID);
    // 以影院查 询出票信息id 。在以id查询出票个数；
    Integer selectCinemaCount(Integer cinemaID);
    //增加影院信息
    Integer Insertcinema(cinema cinema);
    //更新影院信息
    Integer Updatecinema(cinema cinema);
}

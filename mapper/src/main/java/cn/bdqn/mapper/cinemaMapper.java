package cn.bdqn.mapper;

import cn.bdqn.domain.cinema;

import java.util.List;

public interface cinemaMapper {
    //查询全部电影院
    List<cinema> selectAll();

    List<cinema> selectCinemaAlles();
}

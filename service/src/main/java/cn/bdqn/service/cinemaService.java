package cn.bdqn.service;

import cn.bdqn.domain.cinema;

import java.util.List;



public interface cinemaService {

	List<cinema> selectCinemaAll(String sqlString, List<String> sqlList);

	cinema selectCinemaID(Integer cinemaID);

	
	/*
	   * 影院卖出票数，查询当前影院卖出票数
	   * 
	   */
	  Integer  selectCinemaCount(Integer cinemaID);
	  
	  /*
	   * 影院卖出票数，查询当前影院卖出票数
	   * 以影院查 询出票信息id 。在以id查询出票个数；
	   */
	  List<cinema>selectCinemaAlles();
	  
	  /**
	   * 影院添加信息
	   */

	  Integer insertCinema(cinema ci);

	List<cinema> selectAll();

	/*utils.cinemaPage selectCinemaPage(List<String> sqlList, String string,
                                      Integer currPageNo);*/

	int updateCinema(cinema c);

	Integer deleteCinema(Integer cinemaID);


}

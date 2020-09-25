package cn.bdqn.service;

import java.util.List;

import cn.bdqn.domain.filmInfo;

public interface filmInfoService {

	List<filmInfo> selectShangYing(String dangDate, String houDate, String pai);

	filmInfo selectZhiDingFilmInfo(String dateTime);
	
	Integer selectCountFilm(String smallDate, String bigDate);

	filmInfo selectFilmID(Integer filmID);
	
	/*
	 * /*上周票数排行
	 */
	List<filmInfo> selectFilmAll();

	Integer insertFilmInfo(filmInfo f);
	
	/*
	   * 影片查询 id ,名字name；
	   */
	  List<filmInfo> selectIDname();

	/*filmPage selectFilmPage(List<String> sqlList, String sqlstring,
                                  Integer currPageNo);*/

	Integer updateFilmInfo(filmInfo f);

	Integer filminfoDelete(Integer filmID);
}

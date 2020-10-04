package cn.bdqn.service;

import cn.bdqn.domain.playInfo;

import java.util.List;


public interface playInfoService {

	List<playInfo> selectFilmID(Integer filmID, String dangDateString, String houDateString);

	List<playInfo> selectCinemaID(Integer cinemaID, String dangDateString,
                                  String houDateString);

	Integer insertPlayInfo(playInfo p);

	//utils.playInfoPage selectPlayInfoPage(List<String> sqlList, String sqlstring,Integer currPageNo);

	playInfo selectPlayID(Integer playID);

	int updatePlayInfo(playInfo p);

	Integer playinfoDelete(Integer playID);

	Integer filminfoDelete(Integer filmID);

	int deleteCinema(Integer cinemaID);

	List<Integer> selectPlayIDdelete(Integer ID, String SQLstring);

}

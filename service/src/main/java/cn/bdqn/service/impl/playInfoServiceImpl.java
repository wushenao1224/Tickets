package cn.bdqn.service.impl;

import cn.bdqn.domain.playInfo;
import cn.bdqn.mapper.playInfoMapper;
import cn.bdqn.service.playInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("playInfoService")
public class playInfoServiceImpl implements playInfoService {
	@Autowired
	private cn.bdqn.mapper.playInfoMapper playInfoMapper;

	@Override
	public List<playInfo> selectFilmID(Integer filmID, String dangDateString, String houDateString) {
		return playInfoMapper.selectFilmID(filmID,dangDateString,houDateString);
	}

	@Override
	public List<playInfo> selectCinemaID(Integer cinemaID, String dangDateString, String houDateString) {
		return playInfoMapper.selectCinemaID(cinemaID,dangDateString,houDateString);
	}

	@Override
	public Integer insertPlayInfo(playInfo p) {
		return null;
	}

	@Override
	public playInfo selectPlayID(Integer playID) {
		return null;
	}

	@Override
	public int updatePlayInfo(playInfo p) {
		return 0;
	}

	@Override
	public Integer playinfoDelete(Integer playID) {
		return null;
	}

	@Override
	public Integer filminfoDelete(Integer filmID) {
		return null;
	}

	@Override
	public int deleteCinema(Integer cinemaID) {
		return 0;
	}

	@Override
	public List<Integer> selectPlayIDdelete(Integer ID, String SQLstring) {
		return null;
	}
}

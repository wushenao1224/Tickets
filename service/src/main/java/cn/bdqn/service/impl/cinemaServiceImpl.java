package cn.bdqn.service.impl;

import cn.bdqn.domain.cinema;
import cn.bdqn.mapper.cinemaMapper;
import cn.bdqn.service.cinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class cinemaServiceImpl implements cinemaService {
	@Autowired
	private cinemaMapper cinema;

	@Override
	public List<cinema> selectCinemaAll(String sqlString, List<String> sqlList) {
		return null;
	}

	@Override
	public cinema selectCinemaID(Integer cinemaID) {
		return null;
	}

	@Override
	public Integer selectCinemaCount(Integer cinemaID) {
		return null;
	}

	@Override
	public List<cinema> selectCinemaAlles() {
		return cinema.selectCinemaAlles();
	}

	@Override
	public Integer insertCinema(cinema ci) {
		return null;
	}

	@Override
	public List<cinema> selectAll() {
		return cinema.selectAll();
	}

	@Override
	public int updateCinema(cinema c) {
		return 0;
	}

	@Override
	public Integer deleteCinema(Integer cinemaID) {
		return null;
	}
}

package cn.bdqn.service.impl;

import cn.bdqn.domain.filmInfo;
import cn.bdqn.mapper.filmInfoMapper;
import cn.bdqn.service.filmInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
@Service
public class filmInfoServiceImpl implements filmInfoService {
	@Autowired
	private filmInfoMapper filmInfo;

	@Override
	public List<filmInfo> selectShangYing(String dangDate, String houDate, String pai) {
		return filmInfo.selectDate(dangDate,houDate,pai);
	}

	@Override
	public filmInfo selectZhiDingFilmInfo(String dateTime) {
		return filmInfo.selectZhiDingFilmInfo(dateTime);
	}

	@Override
	public Integer selectCountFilm(String smallDate, String bigDate) {
		return filmInfo.selectCountFilm(smallDate, bigDate);
	}

	@Override
	public filmInfo selectFilmID(Integer filmID) {
		return null;
	}

	@Override
	public List<filmInfo> selectFilmAll() {
		Date dangDate=new Date();
		SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
		String dang=dateFormat.format(dangDate);
		dangDate.setDate(dangDate.getDate()-7);
		String hou=dateFormat.format(dangDate);
		return filmInfo.selectFilmAll(dang,hou);
	}

	@Override
	public Integer insertFilmInfo(filmInfo f) {
		return null;
	}

	@Override
	public List<filmInfo> selectIDname() {
		return null;
	}

	@Override
	public Integer updateFilmInfo(filmInfo f) {
		return null;
	}

	@Override
	public Integer filminfoDelete(Integer filmID) {
		return null;
	}
}

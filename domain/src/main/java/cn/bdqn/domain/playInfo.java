package cn.bdqn.domain;

import java.util.Date;

/*
 * 电影放映表
 */
public class playInfo {
	private filmInfo film=new filmInfo();
	private cinema cinema=new cinema();
	
	private int playID;//放映信息编号
	private int filmID;//电影编号
	private int cinemaID;//电影院编号
	private Date startTime;//开始时间
	private Date endTime;//结束时间
	private float sellingFare;//售票价格
	
	
	//提供get和set方法
	public cinema getCinema() {
		return cinema;
	}
	public void setCinema(cinema cinema) {
		this.cinema = cinema;
	}
	public int getPlayID() {
		return playID;
	}
	public filmInfo getFilm() {
		return film;
	}
	public void setFilm(filmInfo film) {
		this.film = film;
	}
	public float getSellingFare() {
		return sellingFare;
	}
	public void setSellingFare(float sellingFare) {
		this.sellingFare = sellingFare;
	}
	public void setPlayID(int playID) {
		this.playID = playID;
	}
	public int getFilmID() {
		return filmID;
	}
	public void setFilmID(int filmID) {
		this.filmID = filmID;
	}
	public int getCinemaID() {
		return cinemaID;
	}
	public void setCinemaID(int cinemaID) {
		this.cinemaID = cinemaID;
	}
	public Date getStartTime() {
		return startTime;
	}
	public void setStartTime(Date startTime) {
		this.startTime = startTime;
	}
	public Date getEndTime() {
		return endTime;
	}
	public void setEndTime(Date endTime) {
		this.endTime = endTime;
	}
	//提供默认构造方法
	public playInfo() {
		super();
	}
	
	
	
}

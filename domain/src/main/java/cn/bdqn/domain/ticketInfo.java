package cn.bdqn.domain;

import java.util.Date;

/*
 * 出售信息表
 */
public class ticketInfo {
	private int seatID;//出票信息编号
	private int playID;//放映信息编号
	private int userID;//用户编号
	private double finalPrice;//最终价格
	private Date ticketTime;//售票时间
	private int soldLine;//售出行
	private int soldColumn;//售出列
	private playInfo playInfo;//
	private filmInfo film;
	private cinema cinema;
	private user user;
	//提供get和set方法 
	
	
	public playInfo getPlayInfo() {
		return playInfo;
	}
	public user getUser() {
		return user;
	}
	public void setUser(user user) {
		this.user = user;
	}
	public filmInfo getFilm() {
		return film;
	}
	public void setFilm(filmInfo film) {
		this.film = film;
	}
	public cinema getCinema() {
		return cinema;
	}
	public void setCinema(cinema cinema) {
		this.cinema = cinema;
	}
	public void setPlayInfo(playInfo playInfo) {
		this.playInfo = playInfo;
	}
	public int getSeatID() {
		return seatID;
	}
	public void setSeatID(int seatID) {
		this.seatID = seatID;
	}
	public int getPlayID() {
		return playID;
	}
	public void setPlayID(int playID) {
		this.playID = playID;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public double getFinalPrice() {
		return finalPrice;
	}
	public void setFinalPrice(double finalPrice) {
		this.finalPrice = finalPrice;
	}
	public Date getTicketTime() {
		return ticketTime;
	}
	public void setTicketTime(Date ticketTime) {
		this.ticketTime = ticketTime;
	}
	public int getSoldLine() {
		return soldLine;
	}
	public void setSoldLine(int soldLine) {
		this.soldLine = soldLine;
	}
	public int getSoldColumn() {
		return soldColumn;
	}
	public void setSoldColumn(int soldColumn) {
		this.soldColumn = soldColumn;
	}
	//提供无参构造方法
	public ticketInfo() {
		super();
	}
	
}

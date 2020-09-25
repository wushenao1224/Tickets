package cn.bdqn.domain;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
/*
 * 电影信息表
 */
public class filmInfo {
	private int filmID;//电影编号
	private String filmName;//电影名字
	private String typeName;//电影类别
	private String typeID;//电影类别编号
	private String advFile;//电影图片
	private String actor;//演员
	private String director;//导演
	@DateTimeFormat(pattern="yyyy-MM-dd")//页面写入数据库时格式化
	private Date dateTime;//上映时间
	private int timelong;//放映时长    以分钟为单位
	private double ticketPrice;//票价
	private String region;//影片所在地区
	private String speech;//影片使用语言
	private String details;//影片详情介绍
	
	//提供get和set方法
	
	public int getFilmID() {
		return filmID;
	}
	public String getTypeID() {
		return typeID;
	}
	public void setTypeID(String typeID) {
		this.typeID = typeID;
	}
	public String getRegion() {
		return region;
	}
	public void setRegion(String region) {
		this.region = region;
	}
	public String getSpeech() {
		return speech;
	}
	public void setSpeech(String speech) {
		this.speech = speech;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public void setFilmID(int filmID) {
		this.filmID = filmID;
	}
	public String getFilmName() {
		return filmName;
	}
	public void setFilmName(String filmName) {
		this.filmName = filmName;
	}
	
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	public String getAdvFile() {
		return advFile;
	}
	public void setAdvFile(String advFile) {
		this.advFile = advFile;
	}
	public String getActor() {
		return actor;
	}
	public void setActor(String actor) {
		this.actor = actor;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public Date getDateTime() {
		return dateTime;
	}
	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}
	public int getTimelong() {
		return timelong;
	}
	public void setTimelong(int timelong) {
		this.timelong = timelong;
	}
	public double getTicketPrice() {
		return ticketPrice;
	}
	public void setTicketPrice(double ticketPrice) {
		this.ticketPrice = ticketPrice;
	}
	//提供默认构造方法
	public filmInfo() {
		super();
	}
	
	
}

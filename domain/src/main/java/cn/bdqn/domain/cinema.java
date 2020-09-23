package cn.bdqn.domain;
/*
 * 电影院信息表
 */
public class cinema {
	private int cinemaID;//电影院编号
	private String cinemaName;//电影院名称
	private String Address;//电影院所在城市
	private String Fulladdress;//表示详细地址
	private float Lng;//经度
	private float Lat;//维度
	//提供get和set方法
	public int getCinemaID() {
		return cinemaID;
	}
	public void setCinemaID(int cinemaID) {
		this.cinemaID = cinemaID;
	}
	public String getCinemaName() {
		return cinemaName;
	}
	public void setCinemaName(String cinemaName) {
		this.cinemaName = cinemaName;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public String getFulladdress() {
		return Fulladdress;
	}
	public void setFulladdress(String fulladdress) {
		Fulladdress = fulladdress;
	}
	public float getLng() {
		return Lng;
	}
	public void setLng(float lng) {
		Lng = lng;
	}
	public float getLat() {
		return Lat;
	}
	public void setLat(float lat) {
		Lat = lat;
	}
	//提供默认构造方法
	public cinema() {
		super();
	}
	
	
}

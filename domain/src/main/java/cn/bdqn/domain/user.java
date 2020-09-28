package cn.bdqn.domain;
/*
 * 用户信息表
 */
public class user {
	private int userID;//用户ID
	private String username;//用户名
	private String password;//用户密码
	private String sex;//用户性别
	private String title_img;//头像
	
	//提供get和set方法
	public Integer getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getTitle_img() {
		return title_img;
	}
	public void setTitle_img(String title_img) {
		this.title_img = title_img;
	}
	//提供无参构造方法
	public user() {
		super();
	}
	
	
}

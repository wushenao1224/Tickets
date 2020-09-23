package cn.bdqn.domain;
/*
 * 电影类别表
 */
public class filmType {
	private String typeID;//类别编号
	private String typeName;//类别信息
	//提供get和set方法
	public String getTypeID() {
		return typeID;
	}
	public void setTypeID(String typeID) {
		this.typeID = typeID;
	}
	public String getTypeName() {
		return typeName;
	}
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}
	//提供默认构造方法
	public filmType() {
		super();
	}
	
}

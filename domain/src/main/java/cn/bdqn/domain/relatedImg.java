package cn.bdqn.domain;
/*
 * 相关电影图片表
 */
public class relatedImg {
	private int filmID;//电影编号
	private String ImagesUrl;//图片或视频	路径
	//提供get和set方法
	public int getFilmID() {
		return filmID;
	}
	public void setFilmID(int filmID) {
		this.filmID = filmID;
	}
	public String getImagesUrl() {
		return ImagesUrl;
	}
	public void setImagesUrl(String imagesUrl) {
		ImagesUrl = imagesUrl;
	}
	//提供无参构造方法
	public relatedImg() {
		super();
	}
	
}

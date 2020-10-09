package cn.bdqn.mapper;

import cn.bdqn.domain.relatedImg;

import java.util.List;

/*
 * 相关电影图片表
 */
public interface relatedImgMapper {
    //查询电影相关的图片；
    List<relatedImg>selectAllImg();
}

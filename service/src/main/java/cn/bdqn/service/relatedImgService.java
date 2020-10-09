package cn.bdqn.service;

import cn.bdqn.domain.relatedImg;

import java.util.List;

public interface relatedImgService {
    //查询电影相关的图片；
    List<relatedImg> selectAllImg();
}

package cn.bdqn.service.impl;

import cn.bdqn.domain.relatedImg;
import cn.bdqn.mapper.relatedImgMapper;
import cn.bdqn.service.relatedImgService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class relatedImgServiceImpl implements relatedImgService {
    @Autowired
    private relatedImgMapper relatedImgMapper;

    //查询电影相关的图片；
    public List<relatedImg> selectAllImg() {
        return relatedImgMapper.selectAllImg();
    }
}

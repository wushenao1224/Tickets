package cn.bdqn.controller;

import cn.bdqn.domain.relatedImg;
import cn.bdqn.service.relatedImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class relatedImgController {

    @Autowired
    private relatedImgService relatedImgService;
    //相关电影图片表进行查询；
    @RequestMapping("/home")
    public String selectAllimg(Model model){
        List<relatedImg> img= relatedImgService.selectAllImg();
        model.addAttribute("img",img);
        return "ce";
    }

}

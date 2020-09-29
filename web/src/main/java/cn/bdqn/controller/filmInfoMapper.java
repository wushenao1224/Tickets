package cn.bdqn.controller;

import cn.bdqn.domain.filmInfo;
import cn.bdqn.service.filmInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
public class filmInfoMapper {
    @Autowired
    private filmInfoService filmInfoService;
    @RequestMapping("/selectZhiDingFilmInfo")
    @ResponseBody
    public filmInfo selectZhiDingFilmInfo(String dateTime){
        filmInfo filmInfo=filmInfoService.selectZhiDingFilmInfo(dateTime);
        //System.out.println(filmInfo.getFilmName());
        return filmInfo;
    }
    @RequestMapping("/selectShangYing")
    @ResponseBody
    public List<filmInfo> selectShangYing(){
        Date newDate=new Date();
        //时间转换格式
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
        //获取当前时间格式
        String dangDate=dateFormat.format(newDate);
        //获取后两个月时间格式
        newDate.setMonth(newDate.getMonth()+2);
        String houDate=dateFormat.format(newDate);
        //返回list集合影片信息
        List<filmInfo> listFilmInfo=filmInfoService.selectShangYing(dangDate,houDate,"");
        //System.out.println(listFilmInfo.get(0).getDateTime());

        return listFilmInfo;
    }
    @RequestMapping("/selectReYing")
    @ResponseBody
    public List<filmInfo> selectReYing(){
        Date newDate=new Date();
        //时间转换格式
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
        //获取当前时间格式
        String dangDate=dateFormat.format(newDate);
        //获取后两个月时间格式
        newDate.setMonth(newDate.getMonth()-2);
        String houDate=dateFormat.format(newDate);
        //返回list集合影片信息
        List<filmInfo> listFilmInfo=filmInfoService.selectShangYing(houDate,dangDate,"DESC");

        return listFilmInfo;
    }
}

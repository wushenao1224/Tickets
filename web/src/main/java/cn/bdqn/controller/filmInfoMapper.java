package cn.bdqn.controller;

import cn.bdqn.domain.filmInfo;
import cn.bdqn.domain.playInfo;
import cn.bdqn.service.filmInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
    @RequestMapping("/film")
    public String film(Model model){
        Date newDate=new Date();
        //时间转换格式
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
        //获取当前时间格式
        String dangDate=dateFormat.format(newDate);
        //获取前两个月时间格式
        newDate.setMonth(newDate.getMonth()-2);
        String qianDate=dateFormat.format(newDate);
        //获取前两个月时间格式
        newDate.setMonth(newDate.getMonth()+4);
        String houDate=dateFormat.format(newDate);
        model.addAttribute("reying", filmInfoService.selectCountFilm(qianDate, dangDate));
        model.addAttribute("jijiang", filmInfoService.selectCountFilm(dangDate, houDate));
        //返回list集合影片信息
        List<filmInfo> listFilmInfo=filmInfoService.selectShangYing(qianDate,dangDate,"DESC");
        model.addAttribute("listFilmInfo", listFilmInfo);
        return "film";
    }
    @RequestMapping("/selectFilmID")
    public String selectFilmID(Integer filmID,Model model){
        filmInfo f=filmInfoService.selectFilmID(filmID);
        //获取今日时间
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date dangDate=new Date();
        String dangDateString=dateFormat.format(dangDate);
        //获取明日时间
        dangDate.setDate(dangDate.getDate()+1);
        dangDate.setHours(0);
        dangDate.setMinutes(0);
        dangDate.setSeconds(0);
        String houDateString=dateFormat.format(dangDate);
    //List<playInfo> playInfolist=playInfoService.selectFilmID(filmID,dangDateString,houDateString);
        //System.out.println(f.getFilmName());
    //model.addAttribute("playInfoList", playInfolist);
        model.addAttribute("filmInfo", f);
        return "danFilm";
    }
}

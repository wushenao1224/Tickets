package cn.bdqn.controller;

import cn.bdqn.domain.cinema;
import cn.bdqn.domain.filmInfo;
import cn.bdqn.service.cinemaService;
import cn.bdqn.service.filmInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Controller
public class homeController {
    @Autowired
    private filmInfoService filmInfo;
    @Autowired
    private cinemaService cinema;
    @RequestMapping("/home")
    public String home(Model model){
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
        //获取即将上映跟热映的电影数
        model.addAttribute("reying", filmInfo.selectCountFilm(qianDate, dangDate));
        model.addAttribute("jijiang", filmInfo.selectCountFilm(dangDate, houDate));
        //返回list集合影片信息
        List<filmInfo> listFilmInfo=filmInfo.selectShangYing(qianDate,dangDate,"DESC");
        //转换时间
        //获取影片前十排行
        List<filmInfo> paiFilmInfo=filmInfo.selectFilmAll();
        model.addAttribute("paiFilmInfo", paiFilmInfo);
        //获取影院前十排行
        List<cinema> paiCinema=cinema.selectCinemaAlles();
        model.addAttribute("paiCinema", paiCinema);
        if(listFilmInfo.size()>4){
            model.addAttribute("listFilmInfo", listFilmInfo);
            return "ce";
			/*for (filmInfo filmInfo : listFilmInfo) {
				System.out.println(filmInfo.getFilmName());
			}*/
        }
        //req.getRequestDispatcher("ce.jsp").forward(req, resp);
        return "ce";
    }
    @RequestMapping("/selectDateTime")
    @ResponseBody
    public List<String> selectDateTime(String dateTime){
        //时间转换格式
        SimpleDateFormat dateFormat=new SimpleDateFormat("yyyy-MM-dd");
        String dangDate=dateTime;
        String houDateString=null;
        if(dateTime.equals("0")){
            System.out.println("等于空");
            Date newDate=new Date();
            newDate.setDate(newDate.getDate()-1);

            //获取当前时间格式
            dangDate=dateFormat.format(newDate);
            //获取当下月的第一天
            Date houDate=new Date();
            houDate.setMonth(houDate.getMonth()+1);
            houDate.setDate(1);
            houDateString=dateFormat.format(houDate);
            //返回list集合影片信息
        }else{
            try {
                //System.out.println("不等于空");
                //传进来date类型字符串转换为date类型
                Date DangDate=dateFormat.parse(dateTime);
                //DangDate.setDate(DangDate.getDate()-1);
                DangDate.setMonth(DangDate.getMonth()+1);
                DangDate.setDate(1);
                houDateString=dateFormat.format(DangDate);
            } catch (ParseException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }

        List<filmInfo> listFilmInfo=filmInfo.selectShangYing(dangDate,houDateString,"");

        List<String> dataList=new ArrayList<String>();
        for (filmInfo f : listFilmInfo) {
            //System.out.println(f.getDateTime());
            String[] l=dateFormat.format(f.getDateTime()).split("-");
            String day=l[l.length-1];
            dataList.add(day);
        }
        //System.out.println(dataList.get(0));
//        String dataJSON=JSONObject.toJSONString(dataList);
//        //System.out.println(dataJSON);
//        resp.getWriter().write(dataJSON);
        return dataList;
    }
}

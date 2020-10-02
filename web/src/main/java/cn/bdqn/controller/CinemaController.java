package cn.bdqn.controller;

import cn.bdqn.domain.cinema;
import cn.bdqn.service.cinemaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
public class CinemaController {
    @Autowired
    private cinemaService cinemaService;
    @RequestMapping("/cinema")
    private String cinema(String cha, String cinemaName, String cinemaAddress, Model model){
        List<cinema> listCinema=cinemaService.selectCinemaAll(cinemaName,cinemaAddress);
        List<Integer> CinemaCount=new ArrayList<Integer>();
        for (cinema  c : listCinema) {
            CinemaCount.add(cinemaService.selectCinemaCount(c.getCinemaID()));
        }
        model.addAttribute("CinemaCount", CinemaCount);
        model.addAttribute("listCinema", listCinema);
        return "cinema";
    }
    @RequestMapping("/selectCinemaID")
    public String selectCinemaID(Integer cinemaID,Model model){
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
    //List<playInfo> playInfolist=playInfoService.selectCinemaID(cinemaID,dangDateString,houDateString);

        //System.out.println(f.getFilmName());
    //req.setAttribute("playInfoList", playInfolist);
        cinema c=cinemaService.selectCinemaID(cinemaID);
        model.addAttribute("cinema", c);
        return "dancinema";
    }
}

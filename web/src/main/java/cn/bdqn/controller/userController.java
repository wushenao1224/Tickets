package cn.bdqn.controller;

import cn.bdqn.domain.user;
import cn.bdqn.service.userService;
import com.sun.org.apache.xpath.internal.operations.Mod;
import org.apache.commons.fileupload.FileItemFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;

@Controller
public class userController {
    @Autowired
    private userService userService;
    @RequestMapping("/registerUser")
    public String createUser(user user, @CookieValue(name = "userID",required = false,defaultValue = "0")Long userID, HttpServletResponse response, Model model){
        //System.out.println(user.getUsername());
        //进行添加数据
        Integer num=userService.createUser(user);
        //判断数据是否添加成功
        if(num>0){
            //保存提交成功判断
            model.addAttribute("tiShiUser",0);
            //userID保存到Cookie中
            Cookie userN=new Cookie("userID",user.getUserID().toString());
            userN.setMaxAge(60*60*24);
            response.addCookie(userN);
        }
        return "redirect:/home";
    }
    @RequestMapping("/userAjax")
    @ResponseBody
    public String userAjax(String name){
        //System.out.println(name);
        //查询是否有相同的userName
        Integer count=userService.selectNameCount(name);
        if(count==0){
            return "0";
        }else{
            return "1";
        }
    }
    @RequestMapping("/selectUserName")
    @ResponseBody
    public user selectUserName(Integer userID){
        user user=userService.selectUser(userID);
        return user;
    }
    @RequestMapping("/insert_titleImg")
    public String inser_titleImg(HttpServletRequest request, @RequestParam MultipartFile imgtitle, Integer userID) throws Exception{
        //服务器文件系统路径
        String uploadFilePath=request.getSession().getServletContext().getRealPath("/bootstrap-3.3.7-dist/img/");
        File destPath = new File(uploadFilePath);
        if(!destPath.exists()){
            destPath.mkdirs();
        }
        // 获得原始名称
        String originalFilename = imgtitle.getOriginalFilename();
        //System.out.println(originalFilename);
        // 文件上传
        imgtitle.transferTo(new File(destPath,originalFilename));
        userService.insertTitleImg(userID,originalFilename);
        return "forward:/home";
    }
    @RequestMapping("/xiuUser")
    public String xiuUser(user user){
        Integer num=userService.servletUpdate(user);
        if(num>0){
            return "forward:/home";
        }else{
            return "redirect:/registerLogin";
        }
    }
    @RequestMapping("/deleteCookie")
    public String deleteCookie(@CookieValue(name = "userID",required = false)Long userID,HttpServletResponse response){
        if(userID!=null){
            //userID保存到Cookie中
            Cookie userN=new Cookie("userID","-1");
            userN.setMaxAge(0);
            response.addCookie(userN);
        }
        return "redirect:/home";
    }
    @RequestMapping("/disembarkUser")
    public String disembarkUser(String zhuusername, String zhupassword, Model model,HttpServletResponse response){
        Integer userID=userService.selectUserID(zhuusername,zhupassword);
        if(userID!=null&&userID>0){
            //提示用户登录成功
            model.addAttribute("tiShiUser",1);
            //保存用户到Cookie中
            Cookie cookie=new Cookie("userID",userID.toString());
            cookie.setMaxAge(60*60*24*7);
            response.addCookie(cookie);
        }else{
            //提示用户登录失败
            model.addAttribute("tiShiUser",2);
        }

        return "redirect:/home";
    }
    @RequestMapping("/user")
    public String user(Integer userID,Model model){
        user user=userService.selectUser(userID);
        user.setUserID(userID);
        //List<ticketInfo> ticketList=ticket.selectTicketUserId(userID);
        model.addAttribute("user", user);
        return "user";
    }
}

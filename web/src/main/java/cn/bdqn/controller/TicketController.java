package cn.bdqn.controller;

import cn.bdqn.domain.ticketInfo;
import cn.bdqn.service.ticketInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class TicketController {
    @Autowired
    private cn.bdqn.service.ticketInfoService ticketInfoService;
    @RequestMapping("/selectTicketUserID")
    @ResponseBody
    public List<ticketInfo> selectTicketUserID(Integer userID ){
        List<ticketInfo> ticketList=ticketInfoService.selectTicketUserId(userID);
        //System.out.println(ticketList);
        return ticketList;
    }
    @RequestMapping("/selectTicketUserIDKanguo")
    @ResponseBody
    public List<ticketInfo> selectTicketUserIDKanguo(Integer userID){
        List<ticketInfo> ticketList=ticketInfoService.selectTicketUserIdKanguo(userID);
        //System.out.println(ticketList);
        return ticketList;
    }
}

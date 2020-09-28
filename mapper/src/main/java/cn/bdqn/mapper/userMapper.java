package cn.bdqn.mapper;

import cn.bdqn.domain.user;
import org.apache.ibatis.annotations.Param;

public interface userMapper {
    //
    Integer insert(user user);

    //用户名查询是否有相同用户
    Integer selectNameCount(String userName);

    //以指定用户名以及密码查询用户是否存在
    Integer selectUserID(@Param("username") String username, @Param("password") String password);

    //以指定ID查询用户
    user selectUser(Integer userID);

    //查询返回出当前userID外有没有相同用户名个数
    Integer selectuserID(String username,Integer userID);

    Integer updateUser(user user);


}

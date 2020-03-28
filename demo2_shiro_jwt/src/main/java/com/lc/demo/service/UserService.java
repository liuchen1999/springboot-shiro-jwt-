package com.lc.demo.service;


import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.lc.demo.entity.User;
import com.lc.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 * @author chen
 * @version 1.0
 * @date 2020/2/14 15:08
 */
@Service
public class UserService extends ServiceImpl<UserMapper, User> {
    @Autowired
    private UserMapper userMapper;

    public User getUserByName(String username){
        return userMapper.selectByName(username);
    }
}

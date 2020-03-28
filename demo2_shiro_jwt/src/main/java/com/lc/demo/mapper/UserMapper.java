package com.lc.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.lc.demo.entity.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * @author chen
 * @version 1.0
 * @date 2020/2/14 15:07
 */
@Repository
public interface UserMapper extends BaseMapper<User> {
    User selectByName(@Param("username") String name);
}

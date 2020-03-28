package com.lc.demo.config.shiro;

import org.apache.shiro.authc.AuthenticationToken;

/**
 * @author chen
 * @version 1.0
 * @date 2020/2/14 15:04
 */
public class JWTToken implements AuthenticationToken {
    // 密钥
    private String token;

    public JWTToken(String token) {
        this.token = token;
    }

    @Override
    public Object getPrincipal() {
        return token;
    }

    @Override
    public Object getCredentials() {
        return token;
    }
}

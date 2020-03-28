package com.lc.demo.exception;

/**
 * @author chen
 * @version 1.0
 * @date 2020/2/14 15:34
 */
public class UnauthorizedException extends RuntimeException { public UnauthorizedException(String msg) {
    super(msg);
}

    public UnauthorizedException() {
        super();
    }
}

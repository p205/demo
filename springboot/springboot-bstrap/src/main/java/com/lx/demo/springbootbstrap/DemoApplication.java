package com.lx.demo.springbootbstrap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring 官方 Starter通常命名为spring-boot-starter-{name}如 spring-boot-starter-web， Spring官方建议非官方Starter命名应遵循{name}-spring-boot-starter的格式。
 * 该项目如果pom起名字叫 person-spring-boot-start, 引入到其他项目中，
 * 就可以通过配置application.properties也可以达到自动化配置的效果,实现了一个自己的start
 */
@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

}

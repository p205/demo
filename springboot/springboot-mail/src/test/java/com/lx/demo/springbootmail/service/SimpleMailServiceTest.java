package com.lx.demo.springbootmail.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.mail.MessagingException;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SimpleMailServiceTest {

    @Autowired
    private SimpleMailService simpleMailService;

    @Value("${mail.to.addr}")
    private String mailto;

    @Test
    public void sendMail() {
        simpleMailService.sendMail("test", mailto, "test");
    }

    @Test
    public void sendHtmlMain() throws MessagingException {
        String content="<html>\n" +
                "<body>\n" +
                "    <h3>hello world ! 这是一封Html邮件!</h3>\n" +
                "</body>\n" +
                "</html>";
        simpleMailService.sendHtmlMail("test", mailto, content);
    }
}
package com.example.service;

import com.example.domain.Account;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.jws.WebMethod;
import javax.jws.WebService;
import java.util.ArrayList;
import java.util.List;

/**
 * @Title: AccountServiceImpl
 * @Package com/example/service/AccountServiceImpl.java
 * @Description: TODO 大佬写点东西
 * 编写服务接口的实现类AccountServiceImpl，此类里面主要编写主要的业务逻辑。
 * 在此类的@WebService注解里面添加了一个属性endpointInterface，表示的是服务接口全路径,
 * 指定为SEI（Service EndPoint Interface）服务端点接口，此处是AccountService所在的全路径。
 * https://docs.spring.io/spring-framework/docs/current/reference/html/integration.html#remoting-web-services
 * @author zhaozhiwei
 * @date 2021/6/29 下午9:45
 * @version V1.0
 */
@Service
@WebService(endpointInterface="com.example.service.AccountService",serviceName="AccountService",targetNamespace="http://soa.example.com/service",name="AccountServiceSoap",portName="AccountServiceSoap")
public class AccountServiceImpl implements AccountService {

    private static final Logger logger = LoggerFactory.getLogger(AccountServiceImpl.class);

    @WebMethod
    public List<Account> getAccounts(String name) {
        List<Account> accounts = new ArrayList<>();
        Account account = new Account();
        account.setName("DreamTech1113");
        accounts.add(account);
        return accounts ;
    }

    @WebMethod
    public void insertAccount(Account account) {
        logger.info("insert successful");
        return;
    }
}
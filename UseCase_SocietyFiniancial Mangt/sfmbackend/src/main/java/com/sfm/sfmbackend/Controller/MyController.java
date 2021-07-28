package com.sfm.sfmbackend.Controller;

import com.sfm.sfmbackend.Entity.Userdetails;
import com.sfm.sfmbackend.Service.UserManagerImpl;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/api")
public class MyController extends BaseController
{
    @Autowired
    private UserManagerImpl service;

    @PostMapping(value="/userdetails")
    public void saveUser(@RequestBody Userdetails user)
    {    
        service.getDetails(user);  
        System.out.println(HttpStatus.OK);
    }
}

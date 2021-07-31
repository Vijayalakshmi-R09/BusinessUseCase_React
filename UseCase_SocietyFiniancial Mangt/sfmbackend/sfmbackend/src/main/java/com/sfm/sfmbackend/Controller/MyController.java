package com.sfm.sfmbackend.Controller;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.HouseDetails;
import com.sfm.sfmbackend.Entity.Userdetails;
import com.sfm.sfmbackend.Service.Implementations.HouseManagerImpl;
import com.sfm.sfmbackend.Service.Implementations.UserManagerImpl;

import org.apache.tomcat.util.http.parser.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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

    @Autowired
    private HouseManagerImpl hservice;

    @PostMapping(value="/userdetails")
    public void saveUser(@RequestBody Userdetails user)
    {    
        service.getDetails(user);  
        System.out.println(HttpStatus.OK);
    }

    @GetMapping(value="/userdetails")
    public ResponseEntity<List<Userdetails>>viewUser()
    {
        return new ResponseEntity<List<Userdetails>>(service.fetchAllUser(),HttpStatus.OK);
    }

    @GetMapping(value="/userdetails/{id}")
    public ResponseEntity<Optional> getUser(@PathVariable Integer id)
    {
        return new ResponseEntity<Optional>(service.fetchUser(id),HttpStatus.OK);
    }

    @PostMapping(value="/house")
    public void saveHouse(@RequestBody HouseDetails hd)
    {    
        hservice.getHouse(hd);
        System.out.println(HttpStatus.OK);
    }

    @GetMapping(value="/house")
    public ResponseEntity<List<HouseDetails>> viewHouse()
    {
        return new ResponseEntity<List<HouseDetails>>(hservice.findAll(),HttpStatus.OK);
    }
}

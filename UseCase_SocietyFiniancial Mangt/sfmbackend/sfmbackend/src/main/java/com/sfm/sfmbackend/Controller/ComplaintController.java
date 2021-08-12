package com.sfm.sfmbackend.Controller;

import java.util.List;

import com.sfm.sfmbackend.Entity.Complaint;
import com.sfm.sfmbackend.Service.Implementations.ComplaintManagerImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
public class ComplaintController {
    @Autowired
    private ComplaintManagerImpl service;

    @PostMapping(value="/complaint")
    public void saveUser(@RequestBody Complaint c)
    {    
        service.getComplaint(c);  
        System.out.println(HttpStatus.OK);
    }
    
    @GetMapping(value="/complaint")
    public ResponseEntity<List<Complaint>> viewStatus()
    {
        return new ResponseEntity<List<Complaint>>(service.findAll(),HttpStatus.OK);
    }

}

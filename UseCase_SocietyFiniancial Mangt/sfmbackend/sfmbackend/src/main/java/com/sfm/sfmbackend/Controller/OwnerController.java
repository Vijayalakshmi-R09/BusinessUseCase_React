package com.sfm.sfmbackend.Controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.sfm.sfmbackend.Entity.OwnerDetails;
import com.sfm.sfmbackend.Service.Implementations.OwnerManagerImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
public class OwnerController {
    
    @Autowired
    private OwnerManagerImpl service;

    @PostMapping(value="/ownerdetails")
    public void saveOwner(@Valid @RequestBody OwnerDetails owner)
    {    
        service.getDetails(owner);  
        System.out.println(HttpStatus.OK);
    }

    @PutMapping(value="/ownerdetails")
    public void editOwner(@Valid @RequestBody OwnerDetails owner)
    {    
        service.getDetails(owner);  
        System.out.println(HttpStatus.OK);
    }

    @GetMapping(value="/ownerdetails")
    public ResponseEntity<List<OwnerDetails>> viewOwner()
    {
        return new ResponseEntity<List<OwnerDetails>>(service.fetchAllOwner(),HttpStatus.OK);
    }
    @GetMapping(value="/ownerdetails/{id}")
    public ResponseEntity<Optional<OwnerDetails>> getOwner(@PathVariable Integer id)
    {
        return new ResponseEntity<Optional<OwnerDetails>>(service.fetchOwner(id),HttpStatus.OK);
    }

    @DeleteMapping(value="/ownerdetails/{id}")
    public void deleteOwner(@PathVariable Integer id)
    {
        service.deleteOwner(id);
    }
}

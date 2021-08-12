package com.sfm.sfmbackend.Controller;

import java.util.List;

import javax.validation.Valid;

import com.sfm.sfmbackend.Entity.VendorDetails;
import com.sfm.sfmbackend.Service.Implementations.VendorManagerImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
public class VendorController {
    
    @Autowired
    private VendorManagerImpl service;

    @PostMapping(value="/vendordetails")
    public void saveUser(@Valid @RequestBody VendorDetails vendor)
    {    
        service.getDetails(vendor);  
        System.out.println(HttpStatus.OK);
    }

    @GetMapping(value="/vendordetails")
    public ResponseEntity<List<VendorDetails>> viewVendor()
    {
        return new ResponseEntity<List<VendorDetails>>(service.fetchAllVendor(),HttpStatus.OK);
    }
    
    @DeleteMapping(value="/vendordetails/{id}")
    public void deleteVendor(@PathVariable Integer id)
    {
        service.deleteVendor(id);
    }
}

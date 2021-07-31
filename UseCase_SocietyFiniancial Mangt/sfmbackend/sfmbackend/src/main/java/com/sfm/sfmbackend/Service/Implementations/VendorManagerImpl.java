package com.sfm.sfmbackend.Service.Implementations;

import java.util.List;

import com.sfm.sfmbackend.Entity.VendorDetails;
import com.sfm.sfmbackend.Repository.VendorRepo;
import com.sfm.sfmbackend.Service.Interface.VendorManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VendorManagerImpl implements VendorManager{

    @Autowired
    private VendorRepo vrepo;
    @Override
    public void getDetails(VendorDetails vendor) {
       vrepo.save(vendor);
    }

    @Override
    public List<VendorDetails> fetchAllVendor() {
        return vrepo.findAll();
    }
    
}

package com.sfm.sfmbackend.Service.Implementations;

import java.util.List;

import com.sfm.sfmbackend.Entity.OwnerDetails;
import com.sfm.sfmbackend.Repository.OwnerRepo;
import com.sfm.sfmbackend.Service.Interface.OwnerManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OwnerManagerImpl implements OwnerManager{

    @Autowired
    private OwnerRepo orepo;

    @Override
    public void getDetails(OwnerDetails own) {
        
        orepo.save(own);
    }

    @Override
    public List<OwnerDetails> fetchAllOwner() {
        
        return orepo.findAll();
    }
    
}

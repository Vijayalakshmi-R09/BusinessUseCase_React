package com.sfm.sfmbackend.Service.Implementations;

import java.util.List;
import java.util.Optional;
import com.sfm.sfmbackend.Entity.HouseDetails;
import com.sfm.sfmbackend.Repository.HouseRepo;
import com.sfm.sfmbackend.Service.Interface.HouseManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HouseManagerImpl implements HouseManager {

    @Autowired
    private HouseRepo hrepo;
    
    @Override
    public void getHouse(HouseDetails hd) {
        
        hrepo.save(hd);
    }

    @Override
    public List<HouseDetails> findAll() {
       
        return hrepo.findAll();
    }

    @Override
    public Optional<HouseDetails> findUserById(Integer id) {
       
        return hrepo.findById(id);
    }
    
}

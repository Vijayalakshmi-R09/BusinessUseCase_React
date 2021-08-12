package com.sfm.sfmbackend.Service.Implementations;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.Complaint;
import com.sfm.sfmbackend.Repository.ComplaintRepo;
import com.sfm.sfmbackend.Service.Interface.ComplaintManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComplaintManagerImpl implements ComplaintManager{

    @Autowired
    private ComplaintRepo crepo;


    @Override
    public void getComplaint(Complaint c) {
        crepo.save(c);
    }

    @Override
    public List<Complaint> findAll() {
        return crepo.findAll();
    }

    @Override
    public Optional<Complaint> findById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }
    
}

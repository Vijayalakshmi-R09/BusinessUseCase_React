package com.sfm.sfmbackend.Service.Interface;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.Complaint;

public interface ComplaintManager {
    public void getComplaint(Complaint c);
    
    public List<Complaint> findAll();

    public Optional<Complaint> findById(Integer id);
}
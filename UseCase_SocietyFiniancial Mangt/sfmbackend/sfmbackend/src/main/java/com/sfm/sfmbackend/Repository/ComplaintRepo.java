package com.sfm.sfmbackend.Repository;

import com.sfm.sfmbackend.Entity.Complaint;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepo extends JpaRepository<Complaint,Integer>{
    
}

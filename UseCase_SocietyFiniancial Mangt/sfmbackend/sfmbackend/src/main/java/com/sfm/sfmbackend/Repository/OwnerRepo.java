package com.sfm.sfmbackend.Repository;

import com.sfm.sfmbackend.Entity.OwnerDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepo extends JpaRepository<OwnerDetails,Integer>{
    
}

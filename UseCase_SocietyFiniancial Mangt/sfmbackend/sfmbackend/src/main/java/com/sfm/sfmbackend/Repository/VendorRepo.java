package com.sfm.sfmbackend.Repository;

import com.sfm.sfmbackend.Entity.VendorDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorRepo extends JpaRepository<VendorDetails,Integer>{
    
}

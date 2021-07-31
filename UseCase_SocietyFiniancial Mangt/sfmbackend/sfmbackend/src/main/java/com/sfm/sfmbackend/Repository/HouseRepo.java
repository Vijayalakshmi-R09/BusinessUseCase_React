package com.sfm.sfmbackend.Repository;

import com.sfm.sfmbackend.Entity.HouseDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HouseRepo extends JpaRepository<HouseDetails,Integer>{
    
}

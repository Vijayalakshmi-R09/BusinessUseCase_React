package com.sfm.sfmbackend.Service.Interface;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.HouseDetails;

public interface HouseManager {
    public void getHouse(HouseDetails hd);
    
    public List<HouseDetails> findAll();

    public Optional<HouseDetails> findUserById(Integer id);
}

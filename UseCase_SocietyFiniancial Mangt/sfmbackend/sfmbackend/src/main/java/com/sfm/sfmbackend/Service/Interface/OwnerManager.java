package com.sfm.sfmbackend.Service.Interface;

import java.util.List;

import com.sfm.sfmbackend.Entity.OwnerDetails;

public interface OwnerManager {
    public void getDetails(OwnerDetails own);

   // public Optional<Userdetails> fetchUser(Integer id);

    public List<OwnerDetails> fetchAllOwner();
}

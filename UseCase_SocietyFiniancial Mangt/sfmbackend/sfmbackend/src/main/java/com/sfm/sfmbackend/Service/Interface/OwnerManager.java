package com.sfm.sfmbackend.Service.Interface;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.OwnerDetails;

public interface OwnerManager {
    public void getDetails(OwnerDetails own);

    public Optional<OwnerDetails> fetchOwner(Integer id);

    public List<OwnerDetails> fetchAllOwner();

    public void deleteOwner(Integer id);
}

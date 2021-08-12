package com.sfm.sfmbackend.Service.Interface;

import java.util.List;

import com.sfm.sfmbackend.Entity.VendorDetails;

public interface VendorManager {
    public void getDetails(VendorDetails user);

    //public Optional<Userdetails> fetchUser(Integer id);

    public List<VendorDetails> fetchAllVendor();
    public void deleteVendor(Integer id);
}

package com.sfm.sfmbackend.Service.Interface;

import java.util.List;
import java.util.Optional;

import com.sfm.sfmbackend.Entity.Userdetails;

public interface UserManager {
    public void getDetails(Userdetails user);

    public Optional<Userdetails> fetchUser(Integer id);

    public List<Userdetails> fetchAllUser();
}

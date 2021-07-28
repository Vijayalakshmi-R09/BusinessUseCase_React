package com.sfm.sfmbackend.Service;

import java.util.Optional;

import com.sfm.sfmbackend.Entity.Userdetails;

public interface UserManager {
    public void getDetails(Userdetails user);

    public Optional<Userdetails> fetchUser(Integer id);
}

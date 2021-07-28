package com.sfm.sfmbackend.Service;

import java.util.Optional;

import com.sfm.sfmbackend.Entity.Userdetails;
import com.sfm.sfmbackend.Repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserManagerImpl implements UserManager
{
    @Autowired
    private UserRepo udetails;

    @Override
    public void getDetails(Userdetails user) 
    {
        udetails.save(user);
    }

    @Override
    public Optional<Userdetails> fetchUser(Integer id) {
         
        return udetails.findById(id);
    } 
}

package com.sfm.sfmbackend.Repository;

import com.sfm.sfmbackend.Entity.Userdetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Userdetails,Integer>
{
    
}

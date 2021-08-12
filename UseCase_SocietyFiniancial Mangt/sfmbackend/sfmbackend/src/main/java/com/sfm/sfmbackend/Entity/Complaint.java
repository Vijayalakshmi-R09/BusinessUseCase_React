package com.sfm.sfmbackend.Entity;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Complaint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) 
    @NotNull
    private Integer id;  

    @NotBlank
    private String sub;

    @NotBlank
    private String msg;

    @NotNull
    private Integer days;

    @NotNull
    private String block;

    @NotNull
    private String house;

    @NotBlank
    private String status;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="cusid",referencedColumnName = "id")
    private Userdetails user;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getDays() {
        return days;
    }

    public void setDays(Integer days) {
        this.days = days;
    }

    public String getBlock() {
        return block;
    }

    public void setBlock(String block) {
        this.block = block;
    }

    public String getHouse() {
        return house;
    }

    public void setHouse(String house) {
        this.house = house;
    }

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

public Userdetails getUser() {
    return user;
}

public void setUser(Userdetails user) {
    this.user = user;
} 
}

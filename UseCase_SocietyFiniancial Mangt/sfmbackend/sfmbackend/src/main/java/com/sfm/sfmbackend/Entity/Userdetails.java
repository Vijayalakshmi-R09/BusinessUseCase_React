package com.sfm.sfmbackend.Entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Userdetails {

@Id
@GeneratedValue(strategy = GenerationType.AUTO)
private Integer id;   

private String firstname;

private String lastname;

private Integer age;

private String gen;

private String email;

private String phonenumber;

private String nationality;

private String bloodgp;




public String getFirstname() {
    return firstname;
}

public void setFirstname(String firstname) {
    this.firstname = firstname;
}

public String getLastname() {
    return lastname;
}

public void setLastname(String lastname) {
    this.lastname = lastname;
}

public Integer getAge() {
    return age;
}

public void setAge(Integer age) {
    this.age = age;
}

public String getGen() {
    return gen;
}

public void setGen(String gen) {
    this.gen = gen;
}

public String getEmail() {
    return email;
}

public void setEmail(String email) {
    this.email = email;
}

public String getPhonenumber() {
    return phonenumber;
}

public void setPhonenumber(String phonenumber) {
    this.phonenumber = phonenumber;
}

public String getNationality() {
    return nationality;
}

public void setNationality(String nationality) {
    this.nationality = nationality;
}

public String getBloodgp() {
    return bloodgp;
}

public void setBloodgp(String bloodgp) {
    this.bloodgp = bloodgp;
}

public Integer getId() {
    return id;
}

public void setId(Integer id) {
    this.id = id;
}




}

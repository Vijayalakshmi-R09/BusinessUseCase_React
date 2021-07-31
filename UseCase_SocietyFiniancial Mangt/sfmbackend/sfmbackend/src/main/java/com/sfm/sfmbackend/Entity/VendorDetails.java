package com.sfm.sfmbackend.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class VendorDetails {
   @Id
   @NotNull
   private int id;
   
   @NotBlank
   private String vname;

   @Email
   private String mail;

   @NotNull
   private long Phone;

   @NotBlank
   private String company;

   @NotBlank
   private String Companyaddress;

   @NotBlank
   private String speciality;

public int getId() {
    return id;
}

public void setId(int id) {
    this.id = id;
}

public String getVname() {
    return vname;
}

public void setVname(String vname) {
    this.vname = vname;
}

public String getMail() {
    return mail;
}

public void setMail(String mail) {
    this.mail = mail;
}

public long getPhone() {
    return Phone;
}

public void setPhone(long phone) {
    Phone = phone;
}

public String getCompany() {
    return company;
}

public void setCompany(String company) {
    this.company = company;
}

public String getCompanyaddress() {
    return Companyaddress;
}

public void setCompanyaddress(String companyaddress) {
    Companyaddress = companyaddress;
}

public String getSpeciality() {
    return speciality;
}

public void setSpeciality(String speciality) {
    this.speciality = speciality;
}
   
}

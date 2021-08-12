package com.sfm.sfmbackend.Vo;

import java.util.Date;

public class APIerror
 {
    private String message;

    private String category;

    private Date ts;

    public Date getTs() {
        return ts;
    }

    public void setTs(Date ts) {
        this.ts = ts;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
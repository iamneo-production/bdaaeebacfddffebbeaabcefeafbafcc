package com.examly.springapp.Model;

public class LoginModel {

	public String emailId;
    public String password;
    public String userRole;
    LoginModel(){

    }
    LoginModel(String emailId,String password, String userRole){
    	  this.userRole=userRole;
        this.emailId=emailId;
        this.password=password;
    }
    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }
}

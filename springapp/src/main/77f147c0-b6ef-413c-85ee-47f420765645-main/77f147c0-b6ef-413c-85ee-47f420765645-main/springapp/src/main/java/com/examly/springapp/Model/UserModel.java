package com.examly.springapp.model;

import javax.persistence.*;
@Entity
@Table(name="userdetails")
public class UserModel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="email")
	private String email;
	@Column(name="userRole")
	private String userRole;
	@Column(name="username")
	private String username;
	@Column(name="mobilenumber")
	private String mobilenumber;
	@Column(name="password")
	private String password;

	
	public UserModel() {
		
	}
	
	public UserModel(String userRole, String email, String username, String mobilenumber, String password) {
		super();
		this.userRole = userRole;
		this.email = email;
		this.username = username;
		this.mobilenumber = mobilenumber;
		this.password = password;
	}
	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getMobilenumber() {
		return mobilenumber;
	}
	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	
}

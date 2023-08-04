
package com.examly.springapp.Model;

import javax.persistence.*;

@Entity
@Table(name="profile")
public class Profile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="Type")
	private String type;
	@Column(name="name")
	private String name;
    @Column(name="address")
	private String address;
	@Column(name="mobile")
	private String mobile;
    @Column(name="email")
	private String email;
	@Column(name="password")
	private String password;
    @Column(name="age")
    private long age;
    Profile(){
        
    }
    public Profile(long id,String type, String name, String address, String mobile, String email, String password,long age) {
        this.id=id;
        this.type = type;
        this.name = name;
        this.address = address;
        this.mobile = mobile;
        this.email = email;
        this.password = password;
        this.age=age;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

	public long getAge() {
		return age;
	}

	public void setAge(long age) {
		this.age = age;
	}
    
}

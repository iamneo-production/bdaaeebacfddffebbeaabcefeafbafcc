
package com.examly.springapp.Model;

import javax.persistence.*;

@Entity
@Table(name="applications")
public class ApplicationModel {  
	@Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name="firstname")
	private String firstname;
	@Column(name="lastname")
	private String lastname;
	@Column(name="gender")
	private String gender;
	@Column(name="fathername")
	private String fathername;
	@Column(name="mothername")
	private String mothername;
	@Column(name="mobilenumber")
	private String mobilenumber;
	@Column(name="altnumber")
	private String altnumber;
	@Column(name="email")
	private String email;
	@Column(name="age")
	private String age;
	@Column(name="address")
	private String address;
	@Column(name="peraddress")
	private String peraddress;
	@Column(name="approvalStatus")
	private String approvalStatus;
	@Column(name="is_updated")
        private boolean isUpdated;
	
	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
        @JoinColumn(name = "document_id", referencedColumnName = "docid")
        private DocumentModel document;
		
	public ApplicationModel () {
		
	}

	public ApplicationModel (long id, String firstname, String lastname, String gender, String fathername, String mothername,
			String mobilenumber, String altnumber, String email, String age, String address, String peraddress,
			String approvalStatus, boolean isUpdated) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gender = gender;
		this.fathername = fathername;
		this.mothername = mothername;
		this.mobilenumber = mobilenumber;
		this.altnumber = altnumber;
		this.email = email;
		this.age = age;
		this.address = address;
		this.peraddress = peraddress;
		this.approvalStatus = approvalStatus;
		this.isUpdated = isUpdated;
		this.document=document;
		
	}


	public void setDocument(DocumentModel document) {
		
		this.document = document;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

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

	public String getFathername() {
		return fathername;
	}

	public void setFathername(String fathername) {
		this.fathername = fathername;
	}

	public String getMothername() {
		return mothername;
	}

	public void setMothername(String mothername) {
		this.mothername = mothername;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getAltnumber() {
		return altnumber;
	}

	public void setAltnumber(String altnumber) {
		this.altnumber = altnumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPeraddress() {
		return peraddress;
	}

	public void setPeraddress(String peraddress) {
		this.peraddress = peraddress;
	}

	public String getApprovalStatus() {
		return approvalStatus;
	}

	public void setApprovalStatus(String approvalStatus) {
		this.approvalStatus = approvalStatus;
	}


	public boolean getisUpdated() {
		return isUpdated;
	}

	public void setisUpdated(boolean updated) {
		isUpdated = updated;
	}

	public byte[] getData() {
		 if (document != null) {
	            return document.getData();
	        } else {
	            return null; 
	        }
	}
	
}

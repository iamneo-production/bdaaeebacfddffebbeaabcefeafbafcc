package com.examly.springapp.Model;

import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "photos")
public class DocumentModel {
	  @Id
	  @GeneratedValue(generator = "uuid",strategy = GenerationType.IDENTITY)
	  @GenericGenerator(name = "uuid", strategy = "uuid2")
	  @Column(name="docid")
	  private String docid;
	  @Column(name="name")
	  private String name;
	  @Column(name="type")
	  private String type;
    
	  @Lob
	  @Column(name="data", columnDefinition="LONGBLOB")
	  private byte[] data;
	 
	 
	  public DocumentModel() {
		
	  }

	  public DocumentModel(String docid, String name, String type,byte[] data) {
		super();
		this.docid=docid;
		this.name = name;
		this.type = type;
		this.data = data;	
	  }

	  public String getName() {
		return name;
	  }
 
	  public void setName(String name) {
		this.name = name;
	  }

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public String getDocid() {
		return docid;
	}

	public void setDocid(String docid) {
		this.docid = docid;
	}
	

}

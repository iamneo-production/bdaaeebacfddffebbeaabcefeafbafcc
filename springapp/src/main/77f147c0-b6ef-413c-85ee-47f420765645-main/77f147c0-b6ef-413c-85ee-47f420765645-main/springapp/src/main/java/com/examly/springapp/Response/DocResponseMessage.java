
package com.examly.springapp.Response;

public class DocResponseMessage {
	
    private String message;

	public DocResponseMessage(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}

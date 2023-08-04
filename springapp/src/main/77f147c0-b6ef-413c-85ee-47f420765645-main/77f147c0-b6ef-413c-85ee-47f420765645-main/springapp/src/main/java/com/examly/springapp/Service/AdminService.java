package com.examly.springapp.Service;
import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.http.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import com.examly.springapp.Repository.ApplicationRepository;
import com.examly.springapp.Response.ImageUtil;
import com.examly.springapp.Repository.DocRepository;
import com.examly.springapp.Model.DocumentModel;
import com.examly.springapp.Model.ApplicationModel;
import com.examly.springapp.Response.DocResponseMessage;
import java.util.*;


@Service
public class AdminService {
	

	@Autowired
    public  ApplicationRepository profileRepo;
	

	@Autowired
    public DocRepository docRepo;
	
	
	
	public ApplicationModel getProfileById(long id) {
        return profileRepo.findById(id);
    }
	
	 public ApplicationModel getProfileByEmail(String email) {
	        return profileRepo.findByEmail(email);
	 }
	 
    public List<ApplicationModel> getAll() {
		
		return profileRepo.findAll();
	}
	
	public List<ApplicationModel> getAllUpdatedApplicationDetails() {
		 return profileRepo.findByIsUpdatedTrue();
	}
	
	public List<ApplicationModel> getAllUpdatedApplicationDetail() {
		 return profileRepo.findByIsUpdatedFalse();
	}
		

	public byte[] downloadImageByProfileId(long id){
        Optional<ApplicationModel> imageData = profileRepo.findPhotoById(id);
        if (imageData.isPresent()) {
        return ImageUtil.decompressImage(imageData.get().getData());
        }else
        {
        	
        	 return getDefaultImageData();
        }
    }
	private byte[] getDefaultImageData() {
        
        return new byte[0];
    }
}

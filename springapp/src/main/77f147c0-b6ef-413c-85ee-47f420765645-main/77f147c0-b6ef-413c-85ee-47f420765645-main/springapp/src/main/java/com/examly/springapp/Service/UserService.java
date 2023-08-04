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

@Service
public class UserService {
	
	@Autowired
        public ApplicationRepository appRepo;

	@Autowired
        public DocRepository docRepo;
	
	public ApplicationModel addProfile(ApplicationModel profile)
	{
		profile.setApprovalStatus("isPending");
		return  appRepo.save(profile);
                        
	}
	
	public ApplicationModel getProfileById(long id) {
        return appRepo.findById(id);
    }
	
	 public ApplicationModel getProfileByEmail(String email) {
	        return appRepo.findByEmail(email);
	 }
    
	public ApplicationModel editProfile(ApplicationModel profile, String email) {
		ApplicationModel profile2= appRepo.findByEmail(email);
		profile2.setEmail(profile.getEmail());
		profile2.setFirstname (profile. getFirstname());
		profile2.setLastname (profile. getLastname());
		profile2.setFathername (profile. getFathername());
		profile2.setMothername (profile. getMothername());
		profile2.setMobilenumber (profile.getMobilenumber());
		profile2.setAltnumber (profile.getAltnumber());
		profile2.setGender (profile.getGender());
		profile2.setAge(profile.getAge());
		profile2.setAddress (profile.getAddress());
		profile2.setPeraddress (profile.getPeraddress());
		profile2.setApprovalStatus("isPending");
		profile2.setisUpdated(true);
		ApplicationModel profile3 = appRepo.save(profile2);

		return profile3;
	}
	
	public DocumentModel uploadImage(MultipartFile file, String message, long id) throws IOException {
		ApplicationModel prof = appRepo.findById(id);
		DocumentModel pImage = new DocumentModel();
		pImage.setName(file.getOriginalFilename());
		pImage.setType(file.getContentType());
		pImage.setData(ImageUtil.compressImage(file.getBytes()));
		prof.setDocument(pImage);
		return docRepo.save(pImage);
	}
	
}

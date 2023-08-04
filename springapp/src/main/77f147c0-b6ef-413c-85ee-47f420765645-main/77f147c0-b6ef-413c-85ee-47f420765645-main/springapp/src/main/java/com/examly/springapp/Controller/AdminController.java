package com.examly.springapp.Controller;

import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.Model.DocumentModel;
import com.examly.springapp.Model.ApplicationModel;
import com.examly.springapp.Repository.ApplicationRepository;
import com.examly.springapp.Response.ImageUtil;
import com.examly.springapp.Repository.DocRepository;
import com.examly.springapp.Service.UserService;




@RestController
@CrossOrigin

public class AdminController {
	
	
    @Autowired(required = true)
    private AdminService admin;
    @Autowired
    public DocRepository docRepo;
    @Autowired
    public ProfileRepository profileRepo;
    
    
    @GetMapping("/getAllProfile")
    

    public List<ApplicationModel> getAll()

    {
        return admin.getAll();

    }

    
    @GetMapping("/admin/getProfile/{id}")
    public ResponseEntity<ApplicationModel> getProfile(@PathVariable("id") String id) {
        try {
            long parsedId = Long.parseLong(id);
            ApplicationModel profile = admin.getProfileById(parsedId);
            if (profile != null) {
                return ResponseEntity.ok(profile);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (NumberFormatException ex) {
            return ResponseEntity.badRequest().build();
        }
    }


    
 
    @GetMapping("/admin/correctionDocuments")
    public List<ApplicationModel> getUpdatedApplicationDetails() {
        return admin.getAllUpdatedApplicationDetails();
    }
    
    @GetMapping("/admin/appliedDocuments")
    public List<ApplicationModel> getUpdatedApplicationDetail() {
        return admin.getAllUpdatedApplicationDetail();
    }
    
	
	@GetMapping("/admin/getDocuments/profile/{profileId}")
	public ResponseEntity<byte[]> downloadImageByProfileId(@PathVariable("profileId") long id) {
	    byte[] image = admin.downloadImageByProfileId(id); 
	    return ResponseEntity.status(HttpStatus.OK).contentType(MediaType.valueOf("image/png")).body(image);
	}
	@PutMapping("/getProfile/{id}/approve")
    public ApplicationModel approveItem(@PathVariable Long id) {
        Optional<ApplicationModel> optionalItem = profileRepo.findById(id);
        if (optionalItem.isPresent()) {
        	ApplicationModel item = optionalItem.get();
            item.setApprovalStatus("approved");
            return profileRepo.save(item);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item not found.");
    }

	@PutMapping("/getProfile/{id}/reject")
    public ApplicationModel rejectItem(@PathVariable Long id) {
        Optional<ApplicationModel> optionalItem = profileRepo.findById(id);
        if (optionalItem.isPresent()) {
        	ApplicationModel item = optionalItem.get();
            item.setApprovalStatus("rejected");
            return profileRepo.save(item);
        }
        throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Item not found.");
    }

}

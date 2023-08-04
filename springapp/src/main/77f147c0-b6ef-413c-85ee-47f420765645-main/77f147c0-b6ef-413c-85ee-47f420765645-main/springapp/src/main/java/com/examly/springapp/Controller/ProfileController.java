
package com.examly.springapp.Controller;

import java.util.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.Model.Profile;
import com.examly.springapp.Service.ProfileService;
import com.examly.springapp.Repository.ProfileRepository;

@RestController
@CrossOrigin(origins="https://8081-adbfbfdfacbdcaababfebeedcefbdfdacea.project.examly.io/",allowedHeaders="*")
public class ProfileController {

    @Autowired(required = true)
    private ProfileService profile;
    @Autowired
    public ProfileRepository profileRepo;

    @PostMapping("/admin/profile")
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile) {
        Profile savedProfile=profileRepo.save(profile);
        return new ResponseEntity<>(savedProfile, HttpStatus.CREATED);

    }
    
    @GetMapping("/admin/profile")
    public List<Profile> getProfileAll()
    {

        return profileRepo.findAll();

    }
    
    
    @GetMapping("/admin/profile/{id}")
    public Profile getProfileById(@PathVariable long id) {
        // Retrieve the Optional<Profile> from the service
       Profile profileOptional = profile.getProfileById(id);

        // Check if the Profile exists in the Optional, otherwise return null or handle the case.
        return profileOptional;
    }
   
    
 
   
    
    
	
}
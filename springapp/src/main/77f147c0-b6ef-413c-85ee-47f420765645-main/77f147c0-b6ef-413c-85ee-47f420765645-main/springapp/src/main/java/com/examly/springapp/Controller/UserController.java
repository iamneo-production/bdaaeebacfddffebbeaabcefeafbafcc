import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Optional;
import com.examly.springapp.Response.DocResponseMessage;
import com.examly.springapp.Model.DocumentModel;
import com.examly.springapp.Model.ApplicationModel;
import com.examly.springapp.Repository.ApplicationRepository;
import com.examly.springapp.Response.ImageUtil;
import com.examly.springapp.Repository.DocRepository;
import com.examly.springapp.Service.UserService;

@RestController
@CrossOrigin

public class UserController {
    @Autowired(required = true)
    private UserService users;
    @Autowired
    public DocRepository docRepo;
    @Autowired
    public ApplicationRepository profileRepo;
    
    @PostMapping("/customer/addProfile")
    public ApplicationModel addProfile(@Value(value= "") @RequestBody ApplicationModel profile)
    {
		return users.addProfile(profile);
    }
    


    
    @GetMapping("/customer/getProfile/{id}")
    public ResponseEntity<ApplicationModel> getProfile(@PathVariable("id") String id) {
        try {
            long parsedId = Long.parseLong(id);
            ApplicationModel profile = users.getProfileById(parsedId);
            if (profile != null) {
                return ResponseEntity.ok(profile);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (NumberFormatException ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/customer/getProfileByEmail/{email}")
    public ResponseEntity<ApplicationModel> getProfileByEmail( @PathVariable("email") String email)
    {
    	try {
            ApplicationModel profile = users.getProfileByEmail(email);
 	 if (profile != null) {
         return ResponseEntity.ok(profile);
     } else {
         return ResponseEntity.notFound().build();
     }
 } catch (Exception ex) {
     return ResponseEntity.badRequest().build();
 }
    }
    @PutMapping("/customer/editProfile/{email}")
    public ResponseEntity<ApplicationModel> editProfile(@PathVariable("email") String email, @RequestBody ApplicationModel profile) {
        try {
            
            ApplicationModel profile1 = users.editProfile(profile, email);
            if (profile1 != null) {
        		
                return ResponseEntity.ok(profile1);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception ex) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    
    @PostMapping("/customer/addDocuments")
    public ResponseEntity<DocResponseMessage> uploadFile(@RequestParam("productImage") MultipartFile file,@RequestParam String id) {
	      String message = "";
	      try {
	    	  long parsedId = Long.parseLong(id);
	    	  users.uploadImage(file, message, parsedId);

	        message = "Uploaded the file successfully: " + file.getOriginalFilename();
	        return ResponseEntity.status(HttpStatus.OK).body(new DocResponseMessage(message));
	      } catch (Exception e) {
	        message = "Could not upload the file: " + file.getOriginalFilename() + "!";
	        return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new DocResponseMessage(message));
	      }
	    }
	
}

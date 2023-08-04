package com.examly.springapp.Service;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.Model.UserModel;
import com.examly.springapp.Repository.AuthRepository;
import java.util.List;
import java.util.Optional;
import com.examly.springapp.Model.LoginModel;
import com.examly.springapp.Response.LoginResponse;

@Service
public class AuthService {

@Autowired
public AuthRepository authRepo;
	


public UserModel saveUser(UserModel user){
    return authRepo.save( user);
}

public UserModel saveAdmin(UserModel user){
    return authRepo.save(user);
}
public LoginResponse isUserPresent(LoginModel data){
     UserModel user1 = authRepo.findByEmail(data.getEmailId());
     if (user1 != null) {
         if (data.getPassword() .equals(user1.getPassword())) {
             Optional<UserModel> user = authRepo.findOneByEmailAndPassword(data.getEmailId(), data.getPassword());
             if (user.isPresent()) {
                 return new LoginResponse("Logged in Success", true);
             } else {
                 return new LoginResponse("Login Failed", false);
             }
         } else {
             return new LoginResponse("Password Does not Match", false);
         }
     }
     else {
         return new LoginResponse("Email does not exits", false);
     }
}

public LoginResponse isAdminPresent(LoginModel data) {
	UserModel user2 = authRepo.findByEmail(data.getEmailId());
     if (user2 != null) {
         if (user2.getUserRole().equals("Admin") && data.getPassword() .equals(user2.getPassword())) {
             Optional<UserModel> user = authRepo.findOneByEmailAndPassword(data.getEmailId(), data.getPassword());
             if (user.isPresent()) {
                 return new LoginResponse("Logged in Success", true);
             } else {
                 return new LoginResponse("Login Failed", false);
             }
         } else {
             return new LoginResponse("Password Does not Match", false);
         }
     }
     else {
         return new LoginResponse("Email does not exits", false);
     }
}

public List<UserModel> getAll() {
	return authRepo.findAll();
}
}

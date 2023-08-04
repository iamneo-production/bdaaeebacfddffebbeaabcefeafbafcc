package com.examly.springapp.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.UserModel;
import com.examly.springapp.service.AuthService;
import com.examly.springapp.repository.AuthRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import com.examly.springapp.Model.LoginModel;

import com.examly.springapp.Response.LoginResponse;


@RestController
@CrossOrigin()
public class AuthController {
		@Autowired(required = true)
	     private AuthService AuthService;

		 public AuthController(AuthService authService) {
			AuthService = authService;
		}

		@Autowired
		 private AuthRepository authRepo;
	
		 @PostMapping("/user/login")
		    public ResponseEntity<?> isUserPresent(@RequestBody LoginModel data)
		    {
		        LoginResponse loginResponse = AuthService.isUserPresent(data);
		        return ResponseEntity.ok(loginResponse);
		    }
		 @PostMapping("/admin/login")
		    public ResponseEntity<?> isAdminPresent(@RequestBody LoginModel data)
		    {
		        LoginResponse loginResponse = AuthService.isAdminPresent(data);
		        return ResponseEntity.ok(loginResponse);
		    }

		@PostMapping("/user/signup")
		 public UserModel saveUser(@RequestBody UserModel user){
		         return AuthService.saveUser(user);
		 }

		 @PostMapping("/admin/signup")
		 public UserModel saveAdmin(@RequestBody UserModel user){
		                return AuthService.saveAdmin(user);
		        }

	}


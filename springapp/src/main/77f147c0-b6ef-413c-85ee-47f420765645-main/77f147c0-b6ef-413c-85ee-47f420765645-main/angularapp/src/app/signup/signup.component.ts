import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignup } from '../auth/user-signup';
import { UserSignupService } from '../auth/user-signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  
  user:UserSignup = new UserSignup ();
confirmPassword: any;
password: any;
  constructor(private http: HttpClient,private router: Router,private signupService: UserSignupService )
  {
  }
  ngOnInit(): void {
    
  }
  userRegister(){
    
    this.signupService.registerUser(this.user).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully");
        this.router.navigateByUrl('/login');
    });
  }

}
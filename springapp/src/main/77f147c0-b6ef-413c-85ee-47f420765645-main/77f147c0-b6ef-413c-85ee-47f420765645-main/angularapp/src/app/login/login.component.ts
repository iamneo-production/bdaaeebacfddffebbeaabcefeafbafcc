import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../auth/login';
import { LoginService } from '../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  login:Login = new Login ();
  constructor(private router: Router,private http: HttpClient, private service: LoginService) {}
  ngOnInit(): void {return }
  onLogin(){
    console.log(this.login);
    
    this.service.loginUser(this.login).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message == "Email does not exits")
        {  
          alert("Email not exits"); 
        }
        else if(resultData.message == "Logged in Success")
        {
          if(this.login.userRole=="Customer"){
          this.router.navigateByUrl('/home');
          }
          else if(this.login.userRole=="Admin"){
            this.router.navigateByUrl('/adminhome');
          }
        }
        else
        {
          alert("Incorrect Email and Password not match");
        }
      });
  }
}



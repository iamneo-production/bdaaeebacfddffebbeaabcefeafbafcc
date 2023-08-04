import { Component, OnInit } from '@angular/core';
import { Applyform } from '../userservice/applyform';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApplyformService } from '../userservice/applyform.service';

@Component({
  selector: 'app-customerapplyform',
  templateUrl: './customerapplyform.component.html',
  styleUrls: ['./customerapplyform.component.css']
})
export class CustomerapplyformComponent implements OnInit {
  
  newcard:Applyform = new Applyform()
  id:number
  houseno : string=""
	streetname : string=""
	areaname : string=""
	pincode : string=""
	state : string=""
	nationality : string=""
	perhouseno : string=""
	perstreetname : string=""
	perareaname : string=""
	perpincode : string=""
	perstate : string=""
	pernationality : string=""
  constructor(private http: HttpClient,private router: Router,private applyService: ApplyformService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const formData = {
      email: this.newcard.email,
      firstname: this.newcard.firstname ,
      lastname: this.newcard.lastname,
		  fathername : this.newcard.fathername,
		  mothername : this.newcard.mothername,
		  mobilenumber : this.newcard.mobilenumber,
		  altnumber : this.newcard.altnumber,
		  gender : this.newcard.gender,
		  age : this.newcard.age, 
      address : `${this.houseno }, ${this.streetname}, ${this.areaname}, ${this.pincode},${this.state}, ${this.nationality}`,
      peraddress: `${this.perhouseno }, ${this.perstreetname}, ${this.perareaname}, ${this.perpincode},${this.perstate}, ${this. pernationality}`
    };
    this.applyService.applyNewcard(formData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Your Profile for aadhar Application has been Submitted Successfully");
         
      },error=>('Profile not saved'));
  }
  onNext(email:string){
    this.router.navigate(['/applydoc',email]);
  }
  
}

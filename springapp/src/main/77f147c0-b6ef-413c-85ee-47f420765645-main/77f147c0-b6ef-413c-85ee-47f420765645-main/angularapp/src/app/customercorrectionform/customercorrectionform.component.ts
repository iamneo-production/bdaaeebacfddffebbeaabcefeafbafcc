import { Component, OnInit } from '@angular/core';
import { Applyform } from '../userservice/applyform';
import { UpdateformService } from '../userservice/updateform.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customercorrectionform',
  templateUrl: './customercorrectionform.component.html',
  styleUrls: ['./customercorrectionform.component.css']
})
export class CustomercorrectionformComponent implements OnInit{ 
  
  corrcard: Applyform = new Applyform();
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
  userEmail: any;
  
  constructor(private router: Router,private updateformService: UpdateformService) {}

  ngOnInit(): void {
    
  }

  update() {
    const formData = {
      email: this.corrcard.email,
      firstname: this.corrcard.firstname ,
      lastname: this.corrcard.lastname,
		  fathername : this.corrcard.fathername,
		  mothername : this.corrcard.mothername,
		  mobilenumber : this.corrcard.mobilenumber,
		  altnumber : this.corrcard.altnumber,
		  gender : this.corrcard.gender,
		  age : this.corrcard.age, 
      address : `${this.houseno }, ${this.streetname}, ${this.areaname}, ${this.pincode},${this.state}, ${this.nationality}`,
      peraddress: `${this.perhouseno }, ${this.perstreetname}, ${this.perareaname}, ${this.perpincode},${this.perstate}, ${this. pernationality}`
    };
    this.updateformService.updateUser(this.corrcard.email, formData)
      .subscribe((data:any) => {
        
        console.log('User details updated successfully:',data);
        this.corrcard = new Updateform();
      }, error => console.log('Error updating user details:',error));
    
}
onSubmit(){
  this.update();
  
}

onNext(){
  this.router.navigate(['/corrcard1']);
}

}


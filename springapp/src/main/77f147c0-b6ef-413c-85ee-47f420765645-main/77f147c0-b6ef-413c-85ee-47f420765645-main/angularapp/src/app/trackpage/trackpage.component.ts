import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UpdateformService } from '../userservice/updateform.service';
import { Applyform } from '../userservice/applyform';

@Component({
  selector: 'app-trackpage',
  templateUrl: './trackpage.component.html',
  styleUrls: ['./trackpage.component.css']
})
export class TrackpageComponent implements OnInit {

  id:number;
  Applieddocuments: Applyform=new Applyform ();
  setApprovalStatus : string;
  constructor(private route: ActivatedRoute,private router: Router,
  private newService: UpdateformService) { }
  ngOnInit() {
  const profileId = this.route.snapshot.params['id'];
  this.newService.getProfile(profileId).subscribe(
  (data) => {
  this.Applieddocuments = data;
  console.log(data.approvalStatus);
  },
  (error) => {
  console.log('Error fetching profile details:', error);
  }
  );
  
  }
  viewAadhar(id: number){
  if(this.Applieddocuments.approvalStatus=="approved"){
  this.router.navigateByUrl(`/gaadhar/${id}`);
  }
  else if(this.Applieddocuments.approvalStatus=="rejected"){
  alert("Application has been rejected"); 
  } 
  }

}

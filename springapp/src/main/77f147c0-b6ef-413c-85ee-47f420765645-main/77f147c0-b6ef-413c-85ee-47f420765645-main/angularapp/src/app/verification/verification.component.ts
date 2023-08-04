import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplieddocService } from '../adminservice/applieddoc.service';
import { Applieddoc } from '../adminservice/applieddoc';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit{
  id:number;
  Applieddocuments:Applieddoc=new Applieddoc();
  
  imageSrc: any;
  docid:string;
  setApprovalStatus : string;
  
  constructor(private route: ActivatedRoute,private router: Router,
    private verifyService: ApplieddocService, private docService: ApplieddocService) { }
    ngOnInit() {
     
      this.id = this.route.snapshot.params['id']|| null;
      console.log(this.id);
      this.verifyService.getProfile(this.id)
        .subscribe(data => {
          console.log(data)
          this.Applieddocuments= data;
        }, error => console.log(error));

        this.fetchImage();
    }

    fetchImage() {
      this.verifyService.downloadImageByProfileId(this.id).subscribe(
        (response: any) => {
          const imageBlob = new Blob([response.body], { type: 'image/png' });
          this.imageSrc = this.createImageFromBlob(imageBlob);
        },
        (error) => {
          console.error('Error fetching the image:', error);
        }
      );}

      createImageFromBlob(image: Blob): any {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          this.imageSrc = reader.result;
        }, false);
        if (image) {
          reader.readAsDataURL(image);
        }
      }
      
    approve() {
      console.log('Application approved!');
      this.verifyService.approveProfile(this.id).subscribe(updatedItem => {
        this.Applieddocuments = updatedItem;
        alert("Profile Approved Successfully");
        this.router.navigateByUrl(`/aadhar/${this.id}`);
      });
    }
    reject(){
      console.log('Application Rejected!');
      this.verifyService.rejectProfile(this.id).subscribe(updatedItem => {
        this.Applieddocuments = updatedItem;
        alert("Profile Rejected Successfully");
        this.router.navigateByUrl('/adminhome');
      });
    }
}


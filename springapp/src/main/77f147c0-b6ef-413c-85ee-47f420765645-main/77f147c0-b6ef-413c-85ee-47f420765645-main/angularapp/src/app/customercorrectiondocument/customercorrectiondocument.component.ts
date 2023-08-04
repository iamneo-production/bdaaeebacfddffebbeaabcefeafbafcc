import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Updateform } from '../userservice/updateform';
import { UpdatedocserviceService } from '../userservice/updatedocservice.service';

@Component({
  selector: 'app-customercorrectiondocument',
  templateUrl: './customercorrectiondocument.component.html',
  styleUrls: ['./customercorrectiondocument.component.css']
})
export class CustomercorrectiondocumentComponent {
  Applieddocuments:Updateform=new Updateform();
  selectedFile: File | null = null;
  id: string = '';
  message = '';
  productImage: File;
  email: any;
 
  constructor(private route: ActivatedRoute,private router: Router,private updatedocserviceService: UpdatedocserviceService) { }
 
  ngOnInit(): void {
  
  }
  
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.productImage = inputElement.files[0];
    }
  }

    onUpload() {

   
    this.updatedocserviceService.uploadDocument(this.productImage, this.id).subscribe(
      event => {
         if (event instanceof HttpResponse) {
          this.message = event.body.message;
          console.log("Uploaded Successfully");
        }
      },
      err => {
        this.message = 'Could not upload the file!';
        this.productImage = undefined;
      });
  
    this.productImage = undefined;
  }
  onSubmit(){
     alert("Your Correction card has been Submitted Successfully");
  }
}


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Applyform } from '../userservice/applyform';
import { ApplydocumentService } from '../userservice/applydocument.service';
import { ApplyformService } from '../userservice/applyform.service';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-customerapplydocument',
  templateUrl: './customerapplydocument.component.html',
  styleUrls: ['./customerapplydocument.component.css']
})
export class CustomerapplydocumentComponent implements OnInit {
  
  Applieddocuments:Applyform=new Applyform();
  id: string = '';
  message = '';
  productImage: File;
  email: any;
  constructor(private route: ActivatedRoute,private router: Router,private docService:  ApplydocumentService ,private applyService: ApplyformService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
      console.log(this.email);
      this.applyService.getProfileByEmail(this.email).subscribe(data => {
          console.log(data)
          this.Applieddocuments= data;
        }, error => console.log(error));
  }
  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.productImage = inputElement.files[0];
    }
  }

    onUpload() {

   
    this.docService.uploadDocument(this.productImage, this.id).subscribe(
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
  onSubmit(email:string){
    this.router.navigate(['/applyres',email]);  
  }
}

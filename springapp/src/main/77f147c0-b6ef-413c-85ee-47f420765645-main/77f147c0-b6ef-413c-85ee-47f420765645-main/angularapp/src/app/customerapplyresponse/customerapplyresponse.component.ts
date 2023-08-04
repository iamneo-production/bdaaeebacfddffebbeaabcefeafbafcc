import { Component, OnInit } from '@angular/core';
import { Applyform } from '../userservice/applyform';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApplyformService } from '../userservice/applyform.service';

@Component({
  selector: 'app-customerapplyresponse',
  templateUrl: './customerapplyresponse.component.html',
  styleUrls: ['./customerapplyresponse.component.css']
})
export class CustomerapplyresponseComponent implements OnInit {
  
  Applieddocuments:Applyform = new Applyform()
  email:string
  constructor(private route: ActivatedRoute ,private http: HttpClient,private router: Router,private applyService: ApplyformService) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email'];
    console.log(this.email);
    this.applyService.getProfileByEmail(this.email).subscribe(data => {
        console.log(data)
        this.Applieddocuments= data;
      }, error => console.log(error));
}
home(){
  this.router.navigateByUrl('/home');
}

}

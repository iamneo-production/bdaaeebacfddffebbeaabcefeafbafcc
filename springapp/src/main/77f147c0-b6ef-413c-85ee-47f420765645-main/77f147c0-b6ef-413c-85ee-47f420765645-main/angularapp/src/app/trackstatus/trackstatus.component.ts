import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Applyform } from '../userservice/applyform';
@Component({
  selector: 'app-trackstatus',
  templateUrl: './trackstatus.component.html',
  styleUrls: ['./trackstatus.component.css']
})
export class TrackstatusComponent {
  id:number
  Applieddocuments: Applyform =new Applyform ();
  
  constructor(private router: Router){}

  ngOnInit(): void{}

  track(id:number){ 
    this.router.navigateByUrl(`/status/${this.id}`);
  
}
}

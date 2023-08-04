import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplieddocService } from '../adminservice/applieddoc.service';
import { Applieddoc } from '../adminservice/applieddoc';

@Component({
  selector: 'app-applieddocuments',
  templateUrl: './applieddocuments.component.html',
  styleUrls: ['./applieddocuments.component.css']
})
export class ApplieddocumentsComponent {
  users: Observable<Applieddoc[]>;

  constructor(private router: Router,private newService: ApplieddocService) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.newService.getAllAppliedProfile();
  }
  viewDoc(id: number){
    this.router.navigateByUrl(`/verify/${id}`);
  }

}

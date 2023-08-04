import { Component, OnInit } from '@angular/core';
import { Applieddoc } from '../adminservice/applieddoc';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CorrectiondocsService } from '../adminservice/correctiondocs.service';

@Component({
  selector: 'app-correctiondocuments',
  templateUrl: './correctiondocuments.component.html',
  styleUrls: ['./correctiondocuments.component.css']
})
export class CorrectiondocumentsComponent implements OnInit {

  users: Observable<Applieddoc[]>;
  constructor(private router: Router,private newService: CorrectiondocsService) {}

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.newService.getAllUpdatedProfile();
  }
  viewDoc(id: number){
    this.router.navigateByUrl(`/verify/${id}`);
  }

}

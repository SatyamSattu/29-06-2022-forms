import { Component, OnInit } from '@angular/core';
import { ShareserviceService } from '../shareservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  employeeData! :any;

  constructor(private api:ShareserviceService, private router:Router) { }

  ngOnInit(): void {
    this.gateemployee()
  }
  gateemployee(){
    this.api.getData().subscribe(res=>{
      this.employeeData=res
    })
   }

}


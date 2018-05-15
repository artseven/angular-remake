import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  result: {};

  constructor(private apiServ: ApiService) { }

  ngOnInit() {
    this.apiServ.invokeService('GET', 'profile/success/me.json', null, null)
    .subscribe(response => {
      this.result = response;
      console.log(this.result);
    });
  }

}

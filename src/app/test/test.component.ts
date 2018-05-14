import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private apiServ: ApiService) { }


  ngOnInit() {

    this.apiServ.invokeService('GET', 'profile/me', null, null)
    .subscribe(response => {
      const result = response;
      console.log(result);
    });

  }

}

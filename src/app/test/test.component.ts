import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private apiServ: ApiService) { }

  ngOnInit() {



  }

}

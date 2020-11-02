import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  title = 'EMR-API';
  constructor() { }

  ngOnInit(): void {
  }

}


// "bootstrap": "^5.0.0-alpha2",
//     "ngx-bootstrap": "^6.1.0",
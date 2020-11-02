import { Component, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EMR-API';

  constructor() {
    
  }

  // constructor(private httpClient: HttpClient) {
  //   this.httpClient.get('http://127.0.0.1:5000/login/root').subscribe(data => {
  //     //this.pass = data.response;
  //   })
  // }
}

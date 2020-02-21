import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrapetestFrontend';
  private result;
  
  constructor(private data: ApiserviceService) {

  }
  ngOnInit() {
    this.data.getAll().subscribe(resultjson => {
      console.log(resultjson);
      this.result = resultjson;

    })
  }
}


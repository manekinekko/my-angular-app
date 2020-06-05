import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `<div>Message from API: {{ value }}</div>`,
})
export class AppComponent implements OnInit {
  value = '...';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(environment.apiRoot + '/HelloWorld?name=SWA').subscribe((res: any) => {
      this.value = res.message;
    });
  }
}

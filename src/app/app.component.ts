import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from './api-node.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Propuesta';
  data: any;

  constructor(public router: Router, private apiService: ApiNodeService) { }


  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}

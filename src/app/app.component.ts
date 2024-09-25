import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from './api-node.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Propuesta';
  data: any;

  constructor(public router: Router, private apiService: ApiNodeService, private http: HttpClient) { }

  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
    this.checkSession();
  }

  // Esto no sirve jaja salu2, bueno si sirve, pero no hace nada
  checkSession() {
    this.http.get<any>('http://localhost:3000/api/session', { withCredentials: true })
      .subscribe(response => {
        if (response.loggedIn) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      }, error => {
        this.isLoggedIn = false;
      });
  }

  isLoginPage(): boolean {
    return this.router.url === '/login';
  }


}

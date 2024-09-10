// login.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  private apiUrl = 'http://localhost:3000/api/login'; // URL del backend

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const credentials = { email: this.email, password: this.password };

    this.http.post(this.apiUrl, credentials).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/src/app/collage']); // Redirige a la página de inicio
      },
      (error) => {
        alert('Credenciales inválidas');
        console.error(error);
      }
    );
  }
}

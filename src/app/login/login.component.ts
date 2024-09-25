import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiNodeService } from '../api-node.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) { }

  onSubmit() {
    this.http.post<any>('http://localhost:3000/api/login', { email: this.email, password: this.password }, { withCredentials: true })
      .subscribe(response => {
        if (response.success) {
          // alert('Inicio de sesión exitoso.');
          this.router.navigate(['/collage']);
        } else {
          // alert('Correo electrónico o contraseña incorrectos.');
        }
      }, error => {
        console.error('Error en el servidor:', error);
        alert('Ocurrió un error en el servidor.');
      });
  }
}

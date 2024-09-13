import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'andrea17.99@gmail.com' && this.password === '22-09-21') {
      alert('Inicio de sesión exitoso.');
      // Redirigir a la pantalla de collage
      this.router.navigate(['/collage']);
    } else {
      alert('Correo electrónico o contraseña incorrectos.');
    }
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private http: HttpClient, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.http.get<any>('http://localhost:3000/api/session', { withCredentials: true }).pipe(
      map(response => {
        if (response.loggedIn) {
          this.router.navigate(['/collage']);
          return false;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al verificar la sesión', error);
        return of(true);
      })
    );
  }
}

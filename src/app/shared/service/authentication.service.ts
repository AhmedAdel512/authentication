import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  accessToken: string = '';
  idToken: string = '';

  
  authenticateToken() {
    localStorage.setItem('access token', this.accessToken);
    localStorage.setItem('id token', this.idToken);
  }

  isAuthenticated(): boolean {
    console.log(localStorage.getItem('access token') === this.accessToken)
    console.log(localStorage.getItem('access token'))
    return localStorage.getItem('access token') === this.accessToken &&  localStorage.getItem('id token') === this.idToken;
  }
  
  unauthenticateToken() {
    localStorage.removeItem('access token')
    localStorage.removeItem('id token')
    }
}

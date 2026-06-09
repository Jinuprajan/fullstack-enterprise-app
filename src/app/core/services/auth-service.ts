import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username= '';

  login(){
    // Simulate login logic
    this.username = 'JohnDoe';
  }

  getUsername() {
    return this.username;
  }

  logout() {
    // Simulate logout logic
    this.username = '';
  }
  
}

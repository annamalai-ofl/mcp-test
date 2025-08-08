import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  login(username: string, password: string): boolean {
    // Mock authentication: username and password must both be 'admin'
    return username === 'admin' && password === 'admin';
  }
}

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  public async login(email: string, password: string) {
    const { data } = await axios.post(
      'https://tutor-connect-api.vercel.app/api/users/login',
      {
        email,
        password,
      }
    );

    return data || null;
  }

  public async signUp(email: string, password: string) {
    const { data } = await axios.post(
      'https://tutor-connect-api.vercel.app/api/users/register',
      {
        email,
        password,
        userType: 'student',
      }
    );

    return data || null;
  }
}

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  public async updateProfile(newProfile: any) {
    const { data } = await axios.put(
      'https://tutor-connect-api.vercel.app/api/users/updateProfile',
      newProfile,
      {
        headers: {
          Authorization:
            'Bearer ' +
            JSON.parse(localStorage.getItem('user') || '{}').access_token,
        },
      }
    );

    return data || null;
  }
}

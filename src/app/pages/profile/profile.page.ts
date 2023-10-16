import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public user: any;

  constructor(private router: Router, private location: Location) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.user.joinedDate = new Date(this.user.joinedDate).toLocaleDateString(
      'vi-VN'
    );
    if (this.user.birthday)
      this.user.birthday = new Date(this.user.birthday).toLocaleDateString(
        'vi-VN'
      );
  }

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
  public handleEditProfile(): void {
    this.router.navigate(['/tabs/edit-profile']);
  }
}

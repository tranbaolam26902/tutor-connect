import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
  public handleLogout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}

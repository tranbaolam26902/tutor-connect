import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
}

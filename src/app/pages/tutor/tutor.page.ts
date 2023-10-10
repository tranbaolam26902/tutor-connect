import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.page.html',
  styleUrls: ['./tutor.page.scss'],
})
export class TutorPage implements OnInit {
  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
}

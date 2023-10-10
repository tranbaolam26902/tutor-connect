import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  public scheduleState: string = 'incoming';

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleChangeState(event: any): void {
    this.scheduleState = event.target.value;
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
}

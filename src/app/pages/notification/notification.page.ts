import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notificationState: string = 'incoming';
  constructor(private location: Location) {}

  ngOnInit() {}

  public handleBack(): void {
    this.location.back();
  }
  public handleChangeState(event: any): void {
    this.notificationState = event.target.value;
  }
}

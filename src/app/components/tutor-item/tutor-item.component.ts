import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-item',
  templateUrl: './tutor-item.component.html',
  styleUrls: ['./tutor-item.component.scss'],
})
export class TutorItemComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public handleNavigateTutorProfile(): void {
    this.router.navigate(['/tabs/tutor/id']);
  }
}

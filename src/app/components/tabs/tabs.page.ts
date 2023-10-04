import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  public selectedTab: string = 'home';

  constructor() {}

  ngOnInit() {}

  public handleChangeTab(event: any): void {
    this.selectedTab = event.tab;
  }
}

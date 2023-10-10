import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'schedule',
        loadChildren: () =>
          import('../../pages/schedule/schedule.module').then(
            (m) => m.SchedulePageModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../../pages/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('../../pages/setting/setting.module').then(
            (m) => m.SettingPageModule
          ),
      },
      {
        path: 'notification',
        loadChildren: () =>
          import('../../pages/notification/notification.module').then(
            (m) => m.NotificationPageModule
          ),
      },
      {
        path: 'tutor/:id',
        loadChildren: () =>
          import('../../pages/tutor/tutor.module').then(
            (m) => m.TutorPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SubjectTagComponent } from 'src/app/components/subject-tag/subject-tag.component';
import { TutorItemComponent } from 'src/app/components/tutor-item/tutor-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, SubjectTagComponent, TutorItemComponent],
})
export class HomePageModule {}

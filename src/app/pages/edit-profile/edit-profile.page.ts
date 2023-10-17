import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  private alert: any;
  public user: any;
  public updateForm: FormGroup;

  constructor(
    private router: Router,
    private location: Location,
    private alertController: AlertController,
    private profileService: ProfileService,
    public formBuilder: FormBuilder
  ) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    if (this.user.birthday)
      this.user.birthday = new Date(this.user.birthday).toLocaleDateString(
        'vi-VN'
      );

    this.updateForm = formBuilder.group({
      fullname: [''],
      birthday: [''],
      phone: [''],
      address: [''],
    });
  }

  ngOnInit() {}

  private showAlert = async (message: string, subHeader: string = '') => {
    this.alert = await this.alertController.create({
      header: 'Notification',
      subHeader,
      message,
      buttons: ['OK'],
    });
    await this.alert.present();
  };
  private validateProfile(): boolean {
    if (
      this.updateForm.value.fullname === '' &&
      this.updateForm.value.birthday === '' &&
      this.updateForm.value.phone === '' &&
      this.updateForm.value.address === ''
    )
      return false;
    if (
      this.updateForm.value.birthday !== '' &&
      new Date(this.updateForm.value.birthday).toString() === 'Invalid Date'
    ) {
      this.showAlert('Invalid birthday.');
      return false;
    }

    return true;
  }

  public handleBack(): void {
    this.location.back();
  }
  public handleNavigateNotification(): void {
    this.router.navigate(['/tabs/notification']);
  }
  public async handleUpdateProfile() {
    if (!this.validateProfile()) return;

    let newProfile = {};
    if (this.updateForm.value.fullname !== '')
      newProfile = { ...newProfile, fullname: this.updateForm.value.fullname };
    if (this.updateForm.value.birthday !== '')
      newProfile = { ...newProfile, birthday: this.updateForm.value.birthday };
    if (this.updateForm.value.phone !== '')
      newProfile = { ...newProfile, phone: this.updateForm.value.phone };
    if (this.updateForm.value.address !== '')
      newProfile = { ...newProfile, address: this.updateForm.value.address };

    const updateResult = await this.profileService.updateProfile(newProfile);

    if (updateResult.isSuccess) {
      localStorage.setItem('user', JSON.stringify(updateResult.result));
      window.location.pathname = '/tabs/profile';
    } else this.showAlert(updateResult._errors[0]);
  }
}

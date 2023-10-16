import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  public signUpForm: FormGroup;
  private alert: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertController: AlertController,
    public formBuilder: FormBuilder
  ) {
    this.signUpForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
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
  private validateSignUp(): boolean {
    if (
      this.signUpForm.value.email.trim() === '' ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.signUpForm.value.email
      )
    ) {
      this.showAlert('Invalid email.');
      return false;
    }
    if (this.signUpForm.value.password === '') {
      this.showAlert('Invalid password.');
      return false;
    }
    if (
      this.signUpForm.value.password !== '' &&
      this.signUpForm.value.confirmPassword !== '' &&
      this.signUpForm.value.password !== this.signUpForm.value.confirmPassword
    ) {
      this.showAlert('Password and Confirm password does not match.');
      return false;
    }

    return true;
  }

  public async handleSignUp() {
    if (!this.validateSignUp()) return;

    const signUpResult = await this.authService.signUp(
      this.signUpForm.value.email,
      this.signUpForm.value.password
    );

    if (signUpResult.isSuccess) {
      localStorage.setItem('user', JSON.stringify(signUpResult.result));
      window.location.pathname = '/tabs/home';
    } else this.showAlert(signUpResult._errors[0]);
  }
}

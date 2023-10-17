import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  private alert: any;

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    public formBuilder: FormBuilder
  ) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
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
  private validateLogin(): boolean {
    if (
      this.loginForm.value.email.trim() === '' ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        this.loginForm.value.email
      )
    ) {
      this.showAlert('Invalid email.');
      return false;
    }
    if (this.loginForm.value.password === '') {
      this.showAlert('Invalid password.');
      return false;
    }
    return true;
  }

  public async handleLogin() {
    if (!this.validateLogin()) return;

    const loginResult = await this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );

    if (loginResult.isSuccess) {
      localStorage.setItem('user', JSON.stringify(loginResult.result));
      window.location.pathname = '/tabs/home';
    } else this.showAlert(loginResult._errors[0]);
  }
}

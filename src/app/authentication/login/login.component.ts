import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppDataService } from 'src/app/core/services/app-data.service';
import { FrequentDataService } from 'src/app/core/services/frequent-data.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //hide
  hide = true;

  //form
  loginForm: FormGroup

  constructor(private router: Router,
    private appDataService: AppDataService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.setLoginForm()
  }

  setLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    })
  }

  async onLogin() {
    if (this.loginForm.errors == null) {
      const loginData = this.loginForm.getRawValue()
      await this.loginService.login(loginData.email, loginData.password).then((result) => {
        if (result) {
          this.snackBar.open(result.message, 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
          this.appDataService.setUserInfo(result)
          this.appDataService.setAccessToken('aktif', 360000)
          this.router.navigateByUrl('/marketplace')
        }
      })

    }


  }

}

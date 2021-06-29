import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import { LoginComponent } from '../login/login.component';
import { RegisterPageService } from './registerPage.service';

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:[slideInAnimation]
})
export class RegisterPageComponent implements OnInit {

  //form
  registerForm: FormGroup

  //hide
  hidePass = true;
  hideCPass = true;

  //matcher
  matcher = new MyErrorStateMatcher();

  constructor(private dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder,
    private registerService: RegisterPageService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.registForm()
  }

  registForm(){
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      gender: ['', Validators.required],
      phone: [, [Validators.maxLength(12), Validators.required]],
      dob: ['', Validators.required]
    }, {validators: this.checkPasswords})
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : { notSame: true }
  }

  async submitRegistration(){
    if(this.registerForm.errors == null){
      const registData = this.registerForm.getRawValue();
      const userSave = {
        address: registData.address,
        doB: new Date(registData.dob),
        email: registData.email,
        name: registData.name,
        password: registData.password,
        phoneNumber: registData.phone.toString(),
        gender: registData.gender
      }
      await this.registerService.addUser(userSave).then((result)=>{
        if (result.status){
          this.snackBar.open("Success register..", 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
          this.router.navigateByUrl('/home')
        }else{
          this.snackBar.open(result.message, 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
        }
      })
    }
  }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent)

    dialogRef.afterClosed().subscribe(result => {

    })
  }

  cancelOnClick(){
    this.router.navigateByUrl('/home')
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control?.invalid && control?.parent?.dirty);
    const invalidParent = !!(control?.parent?.invalid && control?.parent?.dirty);

    return invalidCtrl || invalidParent;
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommissionService } from '../commission/commission.service';

@Component({
  selector: 'app-money-confirm-password',
  templateUrl: './money-confirm-password.component.html',
  styleUrls: ['./money-confirm-password.component.scss']
})
export class MoneyConfirmPasswordComponent implements OnInit {

  drawForm: FormGroup
  hide = true;

  constructor(
    public dialogRef: MatDialogRef<MoneyConfirmPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private formBuilder: FormBuilder,
    private commissionService: CommissionService,
    private snackBar: MatSnackBar
  ) {

   }

  async ngOnInit() {
    await this.createForm()
  }

  createForm(){
    this.drawForm = this.formBuilder.group({
      drawBalance: [,[Validators.min(10000), Validators.max(this.data.balance), Validators.required]],
      password: [,Validators.required]
    })
  }

  changeBalanceToMax(){
    if(this.drawForm.get('drawBalance').value > this.data.balance){
      this.drawForm.get('drawBalance').patchValue(this.data.balance)
    }
  }

  getErrorMessageDraw() {
    if (this.drawForm.get('drawBalance').hasError('min')) {
      return 'Minimal balance: ' + 10000;
    }else if(this.drawForm.get('drawBalance').hasError('max')){
      return 'Maximal balance: ' + this.data.balance;
    }

    return this.drawForm.get('drawBalance').hasError('required') ? 'You must enter value..' : '';
  }

  getErrorMessagePassword() {
    return this.drawForm.get('password').hasError('required') ? 'You must enter value..' : '';
  }

  getAllErrorMessage(){
    this.getErrorMessageDraw();
    this.getErrorMessagePassword();
  }

  getSnackBar(message){
    this.snackBar.open(message, 'Ok', {
      verticalPosition: 'top',
      duration: 5000
    });
  }

  async save(){
    this.getAllErrorMessage()
    if(this.drawForm.errors == null){
      const formData = this.drawForm.getRawValue()
      await this.commissionService.drawMoney(this.data.userId, formData.drawBalance, formData.password).then(response=>{
        if(response.status){
          this.getSnackBar(response.message);
          this.dialogRef.close('success')
        }else{
          this.getSnackBar(response.message);
        }
      })
    }
  }

}

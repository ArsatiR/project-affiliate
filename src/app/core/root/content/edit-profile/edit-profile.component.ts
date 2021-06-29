import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppDataService } from 'src/app/core/services/app-data.service';
import { EditProfileService } from './edit-profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  editForm: FormGroup
  user:any
  constructor(
    public dialogRef: MatDialogRef<EditProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private appDataService: AppDataService,
    private datePipe: DatePipe,
    private editProfileService: EditProfileService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getUser()
  }

  async getUser(){
    this.user = await this.appDataService.getUserInfoWithoutPromise()
    console.log(this.user)
    this.createForm()
  }

  createForm(){
    this.editForm = this.formBuilder.group({
      id: [this.user.id],
      name: [this.user.name, Validators.required],
      gender: [this.user.gender, Validators.required],
      address: [this.user.address],
      email: [this.user.email, [Validators.email, Validators.required]],
      phone: [this.user.phoneNumber, [Validators.minLength(12), Validators.maxLength(12)]],
      dob: [this.datePipe.transform(this.user.doB, 'yyyy-MM-dd')]
    })
  }

  async save(){
    if (this.editForm.errors == null) {
      const editData = this.editForm.getRawValue();
      const userSave = {
        id: editData.id,
        address: editData.address,
        doB: new Date(editData.dob),
        email: editData.email,
        name: editData.name,
        password: editData.password,
        phoneNumber: editData.phone.toString(),
        gender: editData.gender
      }
      await this.editProfileService.save(userSave).then((result)=>{
        if (result.status){
          this.snackBar.open(result.message, 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
          let objUser = JSON.parse(result.code)
          const save={
            doB: objUser.dob,
            address: objUser.address,
            commissionMoney: objUser.commissionMoney,
            email: objUser.email,
            gender: objUser.gender,
            id: objUser.id,
            name: objUser.name,
            phoneNumber: objUser.phoneNumber
          }
          this.appDataService.setUserInfo(save)
        }else{
          this.snackBar.open(result.message, 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
        }
      })
    }
  }

}

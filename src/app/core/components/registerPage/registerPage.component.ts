import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { slideInAnimation } from 'src/app/animations';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registerPage',
  templateUrl: './registerPage.component.html',
  styleUrls: ['./registerPage.component.scss'],
  animations:[slideInAnimation]
})
export class RegisterPageComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
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

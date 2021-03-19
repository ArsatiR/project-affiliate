import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../authentication/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent)

    dialogRef.afterClosed().subscribe(result => {

    })
  }
}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../authentication/login/login.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(public dialog : MatDialog) { }
 ngOnInit(){
   localStorage.clear()
 }
 openLogin(){
  const dialogRef = this.dialog.open(LoginComponent)

  dialogRef.afterClosed().subscribe(result => {

  })
}
}

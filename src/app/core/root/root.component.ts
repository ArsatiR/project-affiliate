import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AppDataService } from '../services/app-data.service';
import { FrequentDataService } from '../services/frequent-data.service';
import { EditProfileComponent } from './content/edit-profile/edit-profile.component';

@Component({
  selector: 'app-content-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, AfterViewInit {

  isUser = false
  user
  ELEMENT: any = [
    { name: 'Marketplace', route: '/marketplace' },
    { name: 'Referral', route: '/referral' },
    { name: 'Commission', route: '/commission' },
  ];
  @ViewChild('drawer') drawer: MatDrawer

  constructor(public dialog: MatDialog, private freqData: FrequentDataService,
    private router: Router,
    private appDataService: AppDataService) {
      this.user = this.appDataService.getUserInfoWithoutPromise()
    }

  ngOnInit() {

    if (this.appDataService.checkIsTokenExists() && this.user) {
      this.switchUserMode()
    } else this.switchGuestMode()
  }

  ngAfterViewInit() {

    if(this.isUser){

      this.drawer.toggle()
    }
  }

  switchUserMode() {
    this.isUser = true
  }

  switchGuestMode() {
    this.appDataService.removeAllSessionCookiesData();
    this.appDataService.removeAllSessionObjectData();
    this.isUser = false;
  }

  composeDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      // width: '630px',
      // height: '188px',
      panelClass: 'edit-profile'
    })

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

    });
  }


  onLogout() {
    this.appDataService.removeAllSessionCookiesData();
    this.appDataService.removeAllSessionObjectData();
    this.router.navigateByUrl('home');
  }
}

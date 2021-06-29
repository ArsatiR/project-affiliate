import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { AppDataService } from './core/services/app-data.service';

// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [slideInAnimation]
})
export class AppComponent {
  title = 'project-affiliate';

  showOverlay = true;
  isUserLogon = false;

  constructor(private route: Router, public dialog: MatDialog,
    private appDataService: AppDataService) {

    this.route.events.subscribe(async (event: RouterEvent) => {
      this.isUserLogon = await this.checkUserLogon()
      if(!this.isUserLogon)this.navigationInterceptor(event)
      else this.showOverlay = false
    })
    // console.log(this.showOverlay);
  }

  async checkUserLogon(){
    const userExist = await this.appDataService.checkIsTokenExists()
    if(userExist)return true;
    return false
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => { // here
        this.showOverlay = false;
        this.dialog.closeAll()
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => { // here
        this.showOverlay = false;
      }, 2000);
      this.dialog.closeAll()
    }
    if (event instanceof NavigationError) {
      setTimeout(() => { // here
        this.showOverlay = false;
      }, 2000);
      this.dialog.closeAll()
    }
  }
}

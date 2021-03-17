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

// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [slideInAnimation]
})
export class AppComponent {
  title = 'project-affiliate';

  public showOverlay = true;

  constructor(private route: Router, public dialog: MatDialog) {
    this.route.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
    // console.log(this.showOverlay);
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

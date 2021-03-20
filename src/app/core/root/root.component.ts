import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { FrequentDataService } from '../services/frequent-data.service';

@Component({
  selector: 'app-content-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, AfterViewInit {

  isDisabled = false

  ELEMENT = [
    'Home',
    'Referral',
    'Komisi'
  ]
  @ViewChild('snav') snav: MatDrawer

  constructor(private freqData: FrequentDataService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    this.checkUserLogger()
  }

  checkUserLogger(){
    let user = this.freqData.getUser() ? this.freqData.getUser : ''
    this.switchUserMode(user)
  }

  switchUserMode(logger:any){
    if(logger){
      this.isDisabled = true
      this.snav.open()
    }
  }

}

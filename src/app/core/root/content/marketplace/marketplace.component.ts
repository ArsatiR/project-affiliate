import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from 'src/app/authentication/login/login.component';
import { AppDataService } from 'src/app/core/services/app-data.service';
import { PromotionPopupComponent } from '../promotion-popup/promotion-popup.component';
import { MarketplaceService } from './marketplace.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  limit = 100;
  user: any

  //data
  listType = []
  listData = []

  //filter
  sliderCommission = 0;
  commissionStatus = 2;
  sliderTransaction = 0;
  typeSales = "Stock";
  search = "";

  constructor(public dialog: MatDialog,
    private marketplaceService: MarketplaceService,
    private appDataService: AppDataService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.user = this.appDataService.getUserInfoWithoutPromise()
    this.listType = LIST_TYPE
    this.loadAllItem()
  }

  async loadAllItem() {
    let data = await this.marketplaceService.getAllData(this.limit);
    this.listData = data

  }

  async loadAdvanceFilter() {
    let data = await this.marketplaceService.advanceSearch(this.sliderTransaction, this.typeSales, this.search, this.sliderCommission, this.commissionStatus)
    this.listData = data
  }

  changeStatus() {
    this.sliderCommission = 0
  }



  async openDialogPromotion(itemId) {
    if(this.appDataService.checkIsTokenExists()){
      await this.marketplaceService.savePromotion(this.user.id, itemId).then((result) => {
        if (result) {
          this.snackBar.open("Promote Success", 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
          this.openDialog(result)
        }
      });
    }else{
      const dialogRef = this.dialog.open(LoginComponent)
      dialogRef.afterClosed().subscribe(result => {

      });
    }

  }

  openDialog(result) {
    const dialogRef = this.dialog.open(PromotionPopupComponent, {
      width: '630px',
      height: '188px',
      panelClass: 'dialog',
      data: result
    })

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  formatLabelKomisi(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  formatLabelKomisiPercent(value: number) {
    return value + '%';
  }
  formatLabelPenjualan(value: number) {
    // if (value >= 10) {
    //   return Math.round(value / 10);
    // }

    return value;
  }
  searchOnChange() {
    this.loadAdvanceFilter()
  }
}


const LIST_TYPE: any = [
  { id: 1, name: "Stock" },
  { id: 2, name: "Non Stock" },
  { id: 3, name: "Service" },
];

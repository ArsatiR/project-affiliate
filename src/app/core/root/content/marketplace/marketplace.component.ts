import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
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
  listDataTemp = []

  //filter
  sliderCommission = 0;
  commissionStatus = 0;
  sliderTransaction = 0;
  toggleCommissionStatus = false;
  typeSales = "None";
  search = "";

  //paging
  totalElements = 0;
  page = 0;
  limitPage = 10;

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
    this.totalElements = data.length;
    this.page = 0;

    this.totalElements = data.length;
    this.page = 0;
    this.listDataTemp = data
    this.listData = this.listDataTemp.slice((this.page*this.limitPage), (this.page*this.limitPage+this.limitPage))
  }

  async loadAdvanceFilter() {
    let data = []
    if(this.typeSales == "None"){
      data = await this.marketplaceService.advanceSearch(this.sliderTransaction, "", this.search, this.sliderCommission, this.commissionStatus)
    }else{
      data = await this.marketplaceService.advanceSearch(this.sliderTransaction, this.typeSales, this.search, this.sliderCommission, this.commissionStatus)
    }
    this.totalElements = data.length;
    this.page = 0;
    this.listDataTemp = data
    this.listData = this.listDataTemp.slice((this.page*this.limitPage), (this.page*this.limitPage+this.limitPage))
  }

  changePage(event:PageEvent){
    this.page = event.pageIndex;
    this.listData = this.listDataTemp.slice((this.page*this.limitPage), (this.page*this.limitPage+this.limitPage))
  }

  changeStatus() {
    this.sliderCommission = 0
    this.searchOnChange()
  }



  async openDialogPromotion(itemId) {
    if(this.appDataService.checkIsTokenExists()){
      await this.marketplaceService.savePromotion(this.user.id, itemId).then((result) => {
        if (result.status) {
          this.snackBar.open("Promote Success", 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
          this.openDialog(result)
        }else{
          this.snackBar.open("Error..", 'Ok', {
            verticalPosition: 'top',
            duration: 5000
          });
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

  toggleCommission(){
    this.toggleCommissionStatus = !this.toggleCommissionStatus

    if(!this.toggleCommissionStatus){
      this.commissionStatus = 0
      this.sliderCommission = 0
      this.loadAdvanceFilter()
    }
  }
}


const LIST_TYPE: any = [
  { id: 0, name: "None" },
  { id: 1, name: "Clothing" },
  { id: 2, name: "Food" },
  { id: 3, name: "Beverage" },
];

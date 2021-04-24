import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromotionPopupComponent } from '../promotion-popup/promotion-popup.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogPromotion() {
    const dialogRef = this.dialog.open(PromotionPopupComponent, {
      width: '630px',
      height: '188px',
      panelClass: 'dialog'
    })

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');

    });
  }

formatLabel(value: number) {
  if (value >= 1000) {
    return Math.round(value / 1000) + 'k';
  }

  return value;
}
}

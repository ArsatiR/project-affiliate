import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MarketplaceService } from '../marketplace/marketplace.service';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrls: ['./promotion-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromotionPopupComponent implements OnInit {

  affiliateLink:string

  constructor(
    public dialogRef: MatDialogRef<PromotionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private marketPlaceService: MarketplaceService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit() {
    this.affiliateLink = this.data.message
  }

  routing(){
    this.dialogRef.close()
  }

}

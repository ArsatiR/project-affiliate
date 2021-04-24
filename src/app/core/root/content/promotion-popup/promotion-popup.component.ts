import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-promotion-popup',
  templateUrl: './promotion-popup.component.html',
  styleUrls: ['./promotion-popup.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PromotionPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PromotionPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}

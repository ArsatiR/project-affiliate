import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AppDataService } from 'src/app/core/services/app-data.service';
import { ReferralService } from './referral.service';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

  user:any
  data:any

  //table
  dataSource:MatTableDataSource<referral>
  displayedColumns = ["halaman", "tanggal", "pengunjung", "transaksi"]

  private paginator: MatPaginator
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator){
    this.paginator = mp;
    this.dataSource.paginator = this.paginator
  }

  private sort : MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort){
    this.sort = ms;
    this.dataSource.sort = this.sort;
  }

  constructor(
    private referralService: ReferralService,
    private appDataService: AppDataService,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource([])
   }

  ngOnInit() {
    this.user = this.appDataService.getUserInfoWithoutPromise()
    this.getAllData()
  }

  async getAllData(){
    await this.referralService.getByPromoter(this.user.id).then((data)=>{
      this.data = data
    })
    let listData = await this.referralService.getAllByPromoter(this.user.id)
    this.setDataSource(listData)
  }

  refreshCode(){

  }

  async setStatus(status){
    await this.referralService.changeStatus(this.user.id, status).then((result)=>{
      if(result){
        this.snackBar.open(result, 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
        this.data.status = status
      }else{
        this.snackBar.open("Error..", 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
      }
    })
  }

  async regenerateCode(){
    await this.referralService.getGeneratedBySystem(this.user.id).then((result)=>{
      if(result){
        this.snackBar.open("Generate Code Success", 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
        this.data.referralBySystem = result
      }else{
        this.snackBar.open("Error..", 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
      }
    });
  }

  async setManualCode(){
    await this.referralService.getGeneratedByUser(this.data.referralByUser, this.user.id).then((result)=>{
      if(result){
        this.snackBar.open(result, 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
      }else{
        this.snackBar.open(result, 'Ok', {
          verticalPosition: 'top',
          duration: 5000
        });
      }
    });
  }

  setDataSource(data){
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
  }


}

const ELEMENT_DATA: referral[] = [
  {halaman: "mimi-affiliate.com/1000/toletole/XRYI12895JNDB", tanggal: "20/12/2020", pengunjung: 5, transaksi: 2},
  {halaman: "mimi-affiliate.com/1000/toletole/XRYI12895JNDB", tanggal: "20/12/2020", pengunjung: 5, transaksi: 2},
  {halaman: "mimi-affiliate.com/1000/toletole/XRYI12895JNDB", tanggal: "20/12/2020", pengunjung: 5, transaksi: 2},
  {halaman: "mimi-affiliate.com/1000/toletole/XRYI12895JNDB", tanggal: "20/12/2020", pengunjung: 5, transaksi: 2},
  {halaman: "mimi-affiliate.com/1000/toletole/XRYI12895JNDB", tanggal: "20/12/2020", pengunjung: 5, transaksi: 2},
]

export interface referral{
  halaman: string;
  tanggal: string;
  pengunjung: number;
  transaksi: number;
}

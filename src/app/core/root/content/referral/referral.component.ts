import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.component.html',
  styleUrls: ['./referral.component.scss']
})
export class ReferralComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
    this.setDataSource()
  }

  setDataSource(){
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
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

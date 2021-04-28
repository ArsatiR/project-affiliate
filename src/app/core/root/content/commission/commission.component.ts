import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as moment from "moment";
import { Moment } from "moment";
import { LocaleConfig } from "ngx-daterangepicker-material";

@Component({
  selector: 'app-commission',
  templateUrl: './commission.component.html',
  styleUrls: ['./commission.component.scss']
})
export class CommissionComponent implements OnInit {
  //calender
  moment = moment;
  calendarLocale: LocaleConfig;
  ranges: any;
  calendarPlaceholder: string;
  selectedRange: any;
  minDate: Moment;
  maxDate: Moment;
  dateNow = moment()

  //table
  dataSourceMerchant: MatTableDataSource<merchant>;
  displayedColumnsMerchant = ['nama', 'link', 'pengunjung', 'transaksi', 'komisi']

  private paginator: MatPaginator
  @ViewChild(MatPaginator)set matPaginator(mp: MatPaginator){
    this.paginator = mp;
    this.dataSourceMerchant.paginator = this.paginator
  }
  private sort: MatSort
  @ViewChild(MatSort)set matSort(ms: MatSort){
    this.sort = ms;
    this.dataSourceMerchant.sort = this.sort
  }


  //options chart
  chartData = []
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Nama Merchant';
  showYAxisLabel = true;
  yAxisLabel = 'Total Komisi';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.calendarLocale = {
      customRangeLabel: "Pick a date...",
      applyLabel: "Apply",
      clearLabel: "Clear",
      format: "MM/DD/YYYY",
      daysOfWeek: ["su", "mo", "tu", "we", "th", "fr", "sa"],
      monthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      firstDay: 1,
    };
    this.ranges = {
      Today: [moment(), moment()],
      Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
      "Last Week": [moment().subtract(6, "days"), moment()],
      "Last Month": [
        moment().subtract(1, "month").startOf("month"),
        moment().subtract(1, "month").endOf("month"),
      ],
    };

    this.calendarPlaceholder = "Select Date ";

    this.minDate = moment().subtract(10, "years");
    this.maxDate = moment().clone().add(10, "years");

    this.chartData = CHART_DATA
  }

  ngOnInit() {

    this.setDataSource()
    this.selectedRange = {
      startDate: moment(this.dateNow.format("YYYY-MM-DD")),
      endDate: moment(this.dateNow.format("YYYY-MM-DD")),
    };
  }

  dateChange($event) {
    const { startDate, endDate } = $event;
    this.selectedRange = $event;

    if (startDate && endDate) {

    }
  }

  setDataSource(){
    this.dataSourceMerchant = new MatTableDataSource(ELEMENT_DATA);
    this.dataSourceMerchant.paginator = this.paginator;
    this.dataSourceMerchant.sort = this.sort
  }

}

const CHART_DATA = [
  {
    "name": "Mohisa Geming",
    "value": 20000
  },
  {
    "name": "TechLogo",
    "value": 15000
  },
  {
    "name": "Sukujan",
    "value": 7500
  }
]

const ELEMENT_DATA: merchant[] = [
  {nama: "Mohisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
  {nama: "TechLogo", link: "mimi-affiliate.com/13/3/XRYI1289OETP3", pengunjung: 50, transaksi: 35, komisi: 15000},
  {nama: "Sukujan", link: "mimi-affiliate.com/1/10/XKW234JNDB", pengunjung: 20, transaksi: 15, komisi: 7500},
  {nama: "MOhisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
  {nama: "MOhisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
  {nama: "MOhisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
  {nama: "MOhisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
  {nama: "MOhisa Geming", link: "mimi-affiliate.com/50/13/XRYI12895JNDB", pengunjung: 100, transaksi: 10, komisi: 20000},
]

export interface merchant{
  nama:string;
  link:string;
  pengunjung:number;
  transaksi:number;
  komisi:number;
}

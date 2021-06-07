import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { RestApiConnectorService } from 'src/app/core/services/restapi-connector.service';
import { AppDataService } from 'src/app/core/services/app-data.service';

@Injectable()
export class CommissionService implements Resolve<any>  {
  data: any[];
  message: any[];
  onDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMessageChanged: BehaviorSubject<any> = new BehaviorSubject({});
  storeId: any;
  _classUrl = "apis/commission/";

  constructor(
    private http: HttpClient,
    private restApiConnector: RestApiConnectorService,
    private appDataService: AppDataService
  ) { }

/**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
 resolve(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<any> | Promise<any> | any {
  return new Promise<void>((resolve, reject) => {
    Promise.all([]).then(() => {
      resolve();
    }, reject);
  });
}

drawMoney(promoterId:any, balance: any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "drawMoney", '&promoterId=' + promoterId + '&balance=' + balance)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}

getPromoterBalance(promoterId:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "getPromoterBalance", '&promoterId=' + promoterId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}

getCommissionSummary(promoterId: any, startDate:any, endDate:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "getCommissionSummary", '&promoterId=' + promoterId + '&startDate=' + startDate + '&endDate=' + endDate)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}


}

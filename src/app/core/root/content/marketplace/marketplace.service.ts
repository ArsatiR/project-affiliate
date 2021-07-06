import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { RestApiConnectorService } from 'src/app/core/services/restapi-connector.service';
import { AppDataService } from 'src/app/core/services/app-data.service';

@Injectable()
export class MarketplaceService implements Resolve<any>  {
  data: any[];
  message: any[];
  onDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMessageChanged: BehaviorSubject<any> = new BehaviorSubject({});
  storeId: any;
  _classUrl = "apis/marketplace/";

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

advanceSearch( totalTransaction:any, type:any, itemName:any, commissionRange:any, commissionStatus:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "advanceSearch", '&totalTransaction=' + totalTransaction + '&type=' + type + '&itemName=' + itemName + '&commissionRange=' + commissionRange + '&commissionStatus=' + commissionStatus)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
getAllData(limit: any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "getAllDataItem", '&limitData=' + limit)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
savePromotion(promoterId: any, itemId:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get('apis/peripheral/' + "promote", '&promoterId=' + promoterId + '&itemId=' + itemId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}


}

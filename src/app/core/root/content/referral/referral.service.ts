import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { RestApiConnectorService } from 'src/app/core/services/restapi-connector.service';
import { AppDataService } from 'src/app/core/services/app-data.service';

@Injectable()
export class ReferralService implements Resolve<any>  {
  data: any[];
  message: any[];
  onDataChanged: BehaviorSubject<any> = new BehaviorSubject({});
  onMessageChanged: BehaviorSubject<any> = new BehaviorSubject({});
  storeId: any;
  _classUrl = "apis/referralCode/";

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

getByPromoter(promoterId: any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get(this._classUrl + "getByPromoter", '&promoterId=' + promoterId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
getGeneratedBySystem(promoterId:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .getString(this._classUrl + "getGeneratedBySystem", '&promoterId=' + promoterId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
getAllByPromoter(promoterId:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .get("apis/peripheral/" + "getAllByPromoter", '&promoterId=' + promoterId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
getGeneratedByUser(referralCode: any, promoterId:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .getString(this._classUrl + "getGeneratedByUser", '&referralCode=' + referralCode + '&promoterId=' + promoterId)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}
changeStatus(promoterId:any, status:any): Promise<any> {
  return new Promise((resolve, reject) => {
    this.restApiConnector
      .getString(this._classUrl + "changeStatus", '&promoterId=' + promoterId + '&status=' + status)
      .subscribe((response: any) => {
        this.message = response;
        this.onMessageChanged.next(this.message);
        resolve(response);
      }, reject);
  });
}


}

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AboutService } from '../../service/about.service';
import { DataService } from "src/app/service/data.service";
import { DataResponse } from '../../shared/models/data.model';
import { HttpResponse } from '@angular/common/http';

/**
 * 
 * RESOLVER to get the new market index form object
 */
@Injectable()
export class MarketIndexFormResolver implements Resolve<HttpResponse<DataResponse>> {

  constructor(public as: AboutService, public ds: DataService) {
  }

  /**
   * Return an obs. that gives some Object value. 
   * This is run before route component view is created.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<DataResponse>> {
      //let param = route.params['name'];
      let sub = this.ds.getMarketIndexForm$();
      return sub;
  }
}
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CalcService } from "../../service/calc.service";
import { DataService } from "../../service/data.service";
import { PanelItem } from "../../shared/models/panel.model";
import { DataResponse } from "../../shared/models/data.model";
import { ToastrService } from 'ngx-toastr';

/**
 * 
 * Resolver for Details route
 */
@Injectable()
export class DetailsResolver implements Resolve<HttpResponse<DataResponse>> {

  rawData: DataResponse = null;
  
  constructor(public cs: CalcService, public ds: DataService, public ts: ToastrService) {
  }

  /**
   * Return an obs. that gives the PanelItem 
   * This is run before route component view is created.
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    Observable<HttpResponse<DataResponse>> | HttpResponse<DataResponse> {
      let panelId = route.params['panelId'];
      let obs$: Observable<HttpResponse<DataResponse>> = this.ds.getAllData$();
      return obs$;
  }
}
import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Router, ActivatedRoute, Data, Params } from '@angular/router';

@Component({
  selector: 'admin-landing',
  templateUrl: 'admin-landing.component.html'
})

export class AdminLandingComponent implements OnInit {

  queryParamInfo: string;
  lastAction: string;
  panelIdOfAction: string;
  silingId: string;

  constructor(public ts: TitleService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.setPageTitle();
    this.getLastAction();
  }

  setPageTitle() {
    this.route.data.subscribe(
      (data: Data) => {
        this.ts.setPageTitle(data.title);
      }
    );
  }

  getLastAction() {
    this.route.queryParams.subscribe(
      (params: Params)=> {
        this.queryParamInfo = JSON.stringify(params);
        this.translateLastAction(params);
      }
    )
  }

  translateLastAction(paramInfo) {
    this.lastAction = paramInfo.lastAction;
    this.panelIdOfAction = paramInfo.panelId;
    this.silingId = paramInfo.silingId;
  }

  onActionAlertDismiss() {
    this.router.navigate(['./'], {relativeTo: this.route, queryParamsHandling: null});
  }
}
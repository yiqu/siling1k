import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import bootstrap into project. (required if want to use BS+JQ)
// Now dont need to import BS again in angular.json
import 'bootstrap';

if (environment.production) {
  console.log("Prod Mode");
  enableProdMode();
} else {
  //console.log("Dev Mode");
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

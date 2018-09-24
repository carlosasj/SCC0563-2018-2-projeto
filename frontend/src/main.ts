import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { bootloader, hmrModule } from '@angularclass/hmr';



// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.log(err));


export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule)
    // use `hmrModule` or the "@angularclass/hmr-loader"
    .then((ngModuleRef: any) => {
      // `module` global ref for webpackhmr
      // Don't run this in Prod
      return hmrModule(ngModuleRef, module);
    })
    .catch(err => console.log(err));;
}

if (environment.production) {
  enableProdMode();
  // boot on document ready
  bootloader(main);
} else {
  if (document.readyState === 'complete') {
    main()
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
}

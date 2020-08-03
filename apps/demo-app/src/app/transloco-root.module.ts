import { NgModule } from '@angular/core';
import {
  translocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
} from '@ngneat/transloco';
import { environment } from '../environments/environment';

@NgModule({
  exports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_CONFIG,
      useValue: translocoConfig({
        availableLangs: ['en', 'es'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: environment.production,
      }),
    },
  ],
})
export class TranslocoRootModule {}

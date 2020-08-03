import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from 'transloco.loader';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [ButtonComponent],
  exports: [ButtonComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'ui',
        loader: loader((lang, root) => import(`./${root}/${lang}.json`)),
      },
    },
  ],
})
export class UiModule {}

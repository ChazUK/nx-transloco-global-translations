import { Component } from '@angular/core';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { loader } from 'transloco.loader';

@Component({
  selector: 'nx-transloco-global-translations-button',
  template: `
    <ng-template transloco let-t>
      <button>{{ t('ui.button') }} Text: {{ t('button.title') }}</button>
    </ng-template>
  `,
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'button',
        loader: loader((lang, root) => import(`./${root}/${lang}.json`)),
      },
    },
  ],
})
export class ButtonComponent {}

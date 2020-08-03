import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiModule } from '@nx-transloco-global-translations/ui';
import { AppComponent } from './app.component';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UiModule, HttpClientModule, TranslocoRootModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

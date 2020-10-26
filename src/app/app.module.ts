import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {FlomodoriComponent} from './flomodori/flomodori.component';
import {TimeFormatPipe} from './timeFormat.pipe';
import { ProgressComponent } from './progress/progress.component';
import { TimeUnitPipe } from './time-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FlomodoriComponent,
    TimeFormatPipe,
    ProgressComponent,
    TimeUnitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

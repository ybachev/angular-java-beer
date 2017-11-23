import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {EventsComponent} from './events/events.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {EventService} from "./event.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

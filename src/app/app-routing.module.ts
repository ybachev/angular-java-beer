import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EventsComponent} from "./events/events.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {EventDetailComponent} from "./event-detail/event-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: EventDetailComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})
export class AppRoutingModule {
}

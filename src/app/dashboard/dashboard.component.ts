import { Component, OnInit } from '@angular/core';
import {EventService} from "../event.service";
import {Event} from "../events/event";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) { }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  ngOnInit() {
    this.getEvents();
  }

}

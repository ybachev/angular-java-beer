import {Component, OnInit} from '@angular/core';
import {Event} from "./event";
import {EventService} from "../event.service";
import {pipe} from "rxjs/Rx";
/*import {EVENTS} from "./mock-events";*/

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[];

  constructor(private eventService: EventService) {
  }

  getEvents(): void {
    this.eventService.getEvents().subscribe(events => this.events = events);
  }

  ngOnInit() {
    this.getEvents();
  }

}

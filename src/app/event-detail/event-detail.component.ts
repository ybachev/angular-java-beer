import {Component, Input, OnInit} from '@angular/core';
import {Event} from "../events/event";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() selectedEvent: Event;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

import {EventService} from "../event.service";
import {Event} from "../events/event";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location) { }

  ngOnInit() {
    this.getEvent();
  }

  private getEvent(): void {
      const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id).subscribe(event => this.event = event)
  }

  goBack(): void {
    this.location.back();
  }
}

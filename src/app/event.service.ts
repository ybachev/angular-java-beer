import { Injectable } from '@angular/core';
import {Event} from "./events/event";
import {EVENTS} from "./events/mock-events";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class EventService {

  constructor() { }

  getEvents():Observable< Event[]>{
    return of(EVENTS);
  }

}

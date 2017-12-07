import {Injectable} from '@angular/core';
import {Event} from "./events/event";
import {EVENTS} from "./events/mock-events";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {HttpClient} from "@angular/common/http";
import {EventServiceResponse} from "./event-service-response";
import {forEach} from "@angular/router/src/utils/collection";
import {tap} from "rxjs/operators";

@Injectable()
export class EventService {


  constructor(private http: HttpClient) {
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:8080/events-tmp')
      .pipe(
        tap(source => {
          console.log("events-tmp");
          source.forEach(value => console.log(value.name))
        })
      );
  }


  getEvent(id: number): Observable<Event> {
    //return of(EVENTS.find(event => event.id === id));
    const url = `http://localhost:8080/events-tmp/${id}`;
    return this.http.get<Event>(url).pipe(
      tap(n => console.log(`display component id=${id}` + n.name)),
      //catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

}

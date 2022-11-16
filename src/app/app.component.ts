import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
public year: any ={};
public age: any ={};
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth'
  };

  name = 'Gayathri';
  test = "This is test text"

}
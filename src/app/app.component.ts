import {Component, OnInit} from '@angular/core';
import {Moment} from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  travelDate: Moment;

  diff: Moment = moment(moment('2022-03-12').diff(moment()));

  ngOnInit(): void {

    this.travelDate = moment('2022-03-12');

    setInterval((): void => {

      this.diff = moment(this.travelDate.diff(moment()));

    }, 1000);
  }
}

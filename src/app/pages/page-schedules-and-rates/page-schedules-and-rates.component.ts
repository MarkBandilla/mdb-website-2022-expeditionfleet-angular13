import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-schedules-and-rates',
  templateUrl: './page-schedules-and-rates.component.html',
  styleUrls: ['./page-schedules-and-rates.component.css']
})
export class PageSchedulesAndRatesComponent implements OnInit {
  location: any = window.location.pathname;
  
  constructor() { }

  ngOnInit(): void {
  }

}

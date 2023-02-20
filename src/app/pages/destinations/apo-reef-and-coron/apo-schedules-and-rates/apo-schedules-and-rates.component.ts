import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-apo-schedules-and-rates',
  templateUrl: './schedules-and-rates.component.html',
  styleUrls: ['./schedules-and-rates.component.css']
})
export class ApoSchedulesAndRatesComponent implements OnInit {
  router:Router;
  links = [
    {name: 'About', url: '/destinations/apo-reef-and-coron/'},
    {name: 'Schedules & Rates', url: '/destinations/apo-reef-and-coron/schedules-and-rates', active: 'active'},
    {name: 'Route & Itinerary', url: '/destinations/apo-reef-and-coron/route-and-itinerary'},
    {name: 'FAQ', url: '/destinations/apo-reef-and-coron/faq'},
  ]

  constructor(private r:Router, private ar:ActivatedRoute) {
    this.router = r;
    r.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        
      }
    });
  }

  ngOnInit(): void {
  }

}

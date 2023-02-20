import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-apo-reef-and-coron',
  templateUrl: './apo-reef-and-coron.component.html',
  styleUrls: ['./apo-reef-and-coron.component.css']
})
export class ApoReefAndCoronComponent implements OnInit {
  router:Router;
  links = [
    {name: 'About', url: '/destinations/apo-reef-and-coron/', active: 'active'},
    {name: 'Schedules & Rates', url: '/destinations/apo-reef-and-coron/schedules-and-rates'},
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

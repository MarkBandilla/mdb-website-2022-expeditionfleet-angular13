import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-apo-route-and-itinerary',
  templateUrl: './apo-route-and-itinerary.component.html',
  styleUrls: ['./apo-route-and-itinerary.component.css']
})
export class ApoRouteAndItineraryComponent implements OnInit {
  router:Router;
  links = [
    {name: 'About', url: '/destinations/apo-reef-and-coron/'},
    {name: 'Schedules & Rates', url: '/destinations/apo-reef-and-coron/schedules-and-rates'},
    {name: 'Route & Itinerary', url: '/destinations/apo-reef-and-coron/route-and-itinerary', active: 'active'},
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

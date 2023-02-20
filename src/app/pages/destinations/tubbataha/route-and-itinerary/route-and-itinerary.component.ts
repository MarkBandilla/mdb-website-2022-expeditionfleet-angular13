import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-route-and-itinerary',
  templateUrl: './route-and-itinerary.component.html',
  styleUrls: ['./route-and-itinerary.component.css']
})
export class RouteAndItineraryComponent implements OnInit {
  router:Router;
  links = [
    {name: 'About', url: '/destinations/tubbataha/'},
    {name: 'Schedules & Rates', url: '/destinations/tubbataha/schedules-and-rates'},
    {name: 'Route & Itenerary', url: '/destinations/tubbataha/route-and-itinerary', active: 'active'},
    {name: 'Dive Maps', url: '/destinations/tubbataha/dive-maps'},
    {name: 'FAQ', url: '/destinations/tubbataha/faq'},
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

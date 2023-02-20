import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-apo-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class ApoFaqComponent implements OnInit {
  router:Router;
  links = [
    {name: 'About', url: '/destinations/apo-reef-and-coron/'},
    {name: 'Schedules & Rates', url: '/destinations/apo-reef-and-coron/schedules-and-rates'},
    {name: 'Route & Itinerary', url: '/destinations/apo-reef-and-coron/route-and-itinerary'},
    {name: 'FAQ', url: '/destinations/apo-reef-and-coron/faq', active: 'active'},
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

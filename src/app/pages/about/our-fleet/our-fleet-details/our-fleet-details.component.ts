import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FleetService } from '../our-fleet.service';

@Component({
  selector: 'app-our-fleet-details',
  templateUrl: './our-fleet-details.component.html',
  styleUrls: ['./our-fleet-details.component.css']
})
export class OurFleetDetailsComponent implements OnInit {
  router:Router;
  fleet:any;
  fleetUrl:any;
  
  links = [
    {name: 'Eco Explorer', url: '/about/our-fleet/eco-explorer'},
    {name: 'Oceanic Explorer', url: '/about/our-fleet/oceanic-explorer'},
    {name: 'Stella Maris Explorer', url: '/about/our-fleet/stella-maris-explorer'},
    {name: 'Crystal Explorer', url: '/about/our-fleet/crystal-explorer'},
  ]

  constructor(private r:Router, private ar:ActivatedRoute, private fs:FleetService) {
    this.router = r;
    r.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.fleetUrl = this.ar.snapshot.paramMap.get('fleet');
        this.fleet = this.fs.findByUrl(this.fleetUrl);
      }
    });
  }

  ngOnInit(): void {
  }

}

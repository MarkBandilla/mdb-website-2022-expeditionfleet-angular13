import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FleetService } from './our-fleet.service';

@Component({
  selector: 'app-our-fleet',
  templateUrl: './our-fleet.component.html',
  styleUrls: ['./our-fleet.component.css']
})
export class OurFleetComponent implements OnInit {
  location: any = window.location.pathname;
  fleets: any[] = [];
  router:Router;

  constructor(private r: Router, private fs: FleetService) {
    this.router = r;
  }

  ngOnInit(): void {
    this.fleets = this.fs.get();
  }

}

import { Component, OnInit } from '@angular/core';
import { FleetService } from '../about/our-fleet/our-fleet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fleets: any[] = [];

  constructor(private fs: FleetService) { }

  ngOnInit(): void {
    this.fleets = this.fs.get();
  }
}

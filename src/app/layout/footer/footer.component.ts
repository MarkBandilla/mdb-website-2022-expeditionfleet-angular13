import { Component, OnInit } from '@angular/core';
import { Variables } from '../../app-variables.module';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  vars = Variables;

  constructor() { }

  ngOnInit(): void {
  }

}

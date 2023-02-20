import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'ui-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if ($('.js-slider').length) {
      $('.js-slider').slick();
    }
  }

}

import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

declare const $:any;

@Component({
  selector: 'ui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    if($('#main-slider').length) {
      var sliderWidth = $("#main-slider").data("slider-width");
      var sliderHeigth = $("#main-slider").data("slider-height");
      var sliderArrows = $("#main-slider").data("slider-arrows");
      var sliderButtons = $("#main-slider").data("slider-buttons");

      $('#main-slider' ).sliderPro({
        width:  sliderWidth,
        height: sliderHeigth,
        arrows: sliderArrows,
        buttons: sliderButtons,
        fade: true,
        fullScreen: true,
        touchSwipe: false,
        autoplay: true
      });
    }
  }

}

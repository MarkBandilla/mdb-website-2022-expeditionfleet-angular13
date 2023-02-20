import { Component, OnInit, Input } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';

declare let $:any;

@Component({
  selector: 'ui-slider-gallery',
  templateUrl: './slider-gallery.component.html',
  styleUrls: ['./slider-gallery.component.css']
})
export class SliderGalleryComponent implements OnInit {

  @Input() images: string[] = [
    "./assets/_live/img/fleet/eco-explorer/img1.png",
    "./assets/_live/img/fleet/eco-explorer/img2.png",
    "./assets/_live/img/fleet/eco-explorer/img3.png"
  ]

  // constructor(private router:Router) {
  //   router.events.subscribe((val) => {
  //     if(val instanceof NavigationEnd) {
  //       this.initSlick();
  //     }
  //   });
  // }

  ngOnInit(): void {
    // this.initSlick();
  }
  
  initSlick() {
    if(!$('.js-slider-for').hasClass('slick-initialized')) {
      if ($('.js-slider-for').length) {
        $('.js-slider-for').slick({
          arrows: true,
          fade: true,
          asNavFor: '.js-slider-nav'
        });
        $('.js-slider-nav').slick({
          slidesToShow: 5,
          slidesToScroll: 1,
          asNavFor: '.js-slider-for',
          focusOnSelect: true
        });
      }
    } else {
      // $('.js-slider-for').slick({settings: 'unslick'});
    }
  }

}

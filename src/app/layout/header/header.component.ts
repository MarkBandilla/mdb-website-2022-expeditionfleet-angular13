import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  phone: string = '+632 577 4305 | +63 917 550 1936';
  email: string = 'expeditionfleet1539@gmail.com';
  route: any;
  routes: any;
  mobileMenu: boolean = false;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.route = this.router.url.split("?")[0].split("/");
        this.routes = this.router.config;
        // console.log('configured routes: ', this.router, this.route, this.routes);
      }
    });
  }

  trigger = $('.menu-mobile-button');

  showMenu() {
    $('#nav').addClass('navbar-scrolling-fixing');
    if ($('.menu-mobile-button').hasClass("js-toggle-screen")) {
      $('#fixedMenu').delay(0).fadeIn(300);
    }
    $('.mobile-slidebar').addClass('show');

    $('.menu-mobile-button').addClass('is-open');
    this.mobileMenu = false;
  }

  hideMenu() {
    $('#fixedMenu').fadeOut(100);
    $('#nav').removeClass('navbar-scrolling-fixing');
    $('.menu-mobile-button').removeClass('is-open');
    $('.mobile-slidebar').removeClass('show');
    this.mobileMenu = true;
  }
  
  toggleMobileMenu() {
    // console.log(this.mobileMenu);
    if(this.mobileMenu) {
      this.showMenu();
    } else {
      this.hideMenu();
    }
  }

  hover(item: any) {
    // console.log(item);
    item.showChildren = true;
  }
  unHover(item: any) {
    // console.log(item);
    item.showChildren = false;
  }
  filterParent(parent:any[]):any[] {
    let parents:any[] = [];

    if(!parent) return parents;

    for(let p of parent) {
      if(p.path !== '**') parents.push(p);
    }
    
    return parents;
  }
  filterChildren(children:any[]):any[] {
    let childs:any[] = [];
    for(let child of children) {
      if(child.path && child.path !== '') childs.push(child);
    }
    // console.log(childs);
    return childs;
  }

  ngOnInit(): void {

  }

}

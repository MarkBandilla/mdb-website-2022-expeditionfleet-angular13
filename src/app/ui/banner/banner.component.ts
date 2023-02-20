import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ui-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  title:string | undefined;
  route:any;
  routes:any;
  links:any = [];
  lCount = 1;

  constructor(private router:Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.init();
      }
    });
  }

  init() {
    // redirect on search query
    // console.log(this.router.url.split("?").length);
    if(this.router.url.split("?").length > 1) this.router.navigateByUrl('');

    this.links = [];
    this.lCount = 1;

    this.route = this.router.url.split("?")[0].split("/");
    this.routes = this.router.config;
    this.getLinks(this.routes, this.route[this.lCount]);
    this.title = this.route[this.route.length - 1].replaceAll('-', ' ');
  }

  getLinks(routes:any, path:string) {
    for(let x of routes) {
      if(x.path === path) {
        this.links.push(x);
        if(x.children) {
          this.lCount ++;
          this.getLinks(x.children, this.route[this.lCount]);
        }
      }
    }
  }

  ngOnInit(): void {
    this.init();
  }

}

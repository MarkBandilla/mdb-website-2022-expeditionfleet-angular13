import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'layout-sub-nav',
  templateUrl: './sub-nav.component.html',
  styleUrls: ['./sub-nav.component.css']
})
export class SubNavComponent implements OnInit {

  title:string = "";
  link:string = "";
  links:any;
  route:any;
  routes:any;
  subMenu:any;
  lCount:number = 0;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
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

  getSubMenu() {
    for(let r of this.routes) {
      if(r.data.label == this.title) {
        this.link = r.path;
        // console.log(r);
        return r.children;
      }
    }
  }

  filterChildren(children:any[]):any[] {
    let childs:any[] = [];
    for(let child of children) {
      if(child.data) if(child.path && child.path !== '') childs.push(child);
    }
    // console.log(childs);
    return childs;
  }

  ngOnInit(): void {
    this.links = [];
    this.lCount = 1;

    this.route = this.router.url.split("?")[0].split("/");
    this.routes = this.router.config;
    // console.log(this.routes);
    this.getLinks(this.routes, this.route[this.lCount]);
    console.log(this.links);
    this.title = this.links[0].data.label;
    this.subMenu = this.getSubMenu();
    // console.log(this.subMenu);
  }

}

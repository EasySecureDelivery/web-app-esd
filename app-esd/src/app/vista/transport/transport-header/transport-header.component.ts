import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transport-header',
  templateUrl: './transport-header.component.html',
  styleUrls: ['./transport-header.component.css']
})
export class TransportHeaderComponent implements OnInit {

  isDarkTheme: boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) { }

  ngOnInit() {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

  storeThemeSelection() {
    localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
  }
  redireccion(){
    this.router.navigate(['myshipmentstransport']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myshipmentstransport',
  templateUrl: './myshipmentstransport.component.html',
  styleUrls: ['./myshipmentstransport.component.css']
})
export class MyshipmentstransportComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigate(['transport-header/myaccount']);
  }
  next():void{
    this.router.navigate(['transport-header/registershipments']);
  }
}

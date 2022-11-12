import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registershipments',
  templateUrl: './registershipments.component.html',
  styleUrls: ['./registershipments.component.css']
})
export class RegistershipmentsComponent implements OnInit {

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

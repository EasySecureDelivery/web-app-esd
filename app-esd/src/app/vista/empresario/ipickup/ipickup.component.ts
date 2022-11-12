import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ipickup',
  templateUrl: './ipickup.component.html',
  styleUrls: ['./ipickup.component.css']
})
export class IpickupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigate(['empresario-header/profile']);
  }
  next():void{
    this.router.navigate(['empresario-header/addresse']);
  }
}

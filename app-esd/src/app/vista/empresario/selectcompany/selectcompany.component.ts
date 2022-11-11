import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectcompany',
  templateUrl: './selectcompany.component.html',
  styleUrls: ['./selectcompany.component.css']
})
export class SelectcompanyComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  back():void{
    this.router.navigate(['empresario-header/dataperson']);
  }
  next():void{
    this.router.navigate(['empresario-header/ticketshipment']);
  }
}

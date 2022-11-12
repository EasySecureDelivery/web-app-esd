import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketshipment',
  templateUrl: './ticketshipment.component.html',
  styleUrls: ['./ticketshipment.component.css']
})
export class TicketshipmentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next():void{
    this.router.navigate(['empresario-header/shippingstatus'])
  }

}

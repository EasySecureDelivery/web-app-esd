import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresse',
  templateUrl: './addresse.component.html',
  styleUrls: ['./addresse.component.css']
})
export class AddresseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back():void{
      this.router.navigate(['empresario-header/ipickup']);
  }
  next():void{
    this.router.navigate(['empresario-header/dataperson']);
  }
}

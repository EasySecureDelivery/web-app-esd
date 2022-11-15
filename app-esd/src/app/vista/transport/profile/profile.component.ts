import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../model/profile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  element:Profile;
  constructor(private profileService:ProfileService,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.profileService.get().subscribe((dato:any)=>{
      this.element=dato;
    })
  }
  edit(){
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent implements OnInit {

  form: FormGroup;
  loading = false;
  
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form= this.fb.group({
      Tracking_code: ['',Validators.required ],
      Name: ['',Validators.required ],
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.form);
    const username=this.form.value.Tracking_code;
    const password=this.form.value.Name;

    if(username == '17074' && password=='sasha'){
      //redireccionamos 
      this.fakeLoading();

    }else{
      //error
      this.error();
      this.form.reset();

    }


  }

  error(){
    this._snackBar.open('username or password invalid', '', {
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top',
    })
  }

  fakeLoading(){
    this.loading =true;
    setTimeout(() => {

      this.router.navigate(['registro'])
    }, 1500);
  }
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  loading = false;
  
  constructor(private fb:FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form= this.fb.group({
      Username: ['',Validators.required ],
      Password: ['',Validators.required ],
    })
  }

  ngOnInit(): void {
  }

  login(){
    console.log(this.form);
    const username=this.form.value.Username;
    const password=this.form.value.Password;

    if(username == 'sasha' && password=='1234567'){
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//modulos 
import { ReactiveFormsModule } from '@angular/forms';



//angular material
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatSlideToggleModule

  ],
  exports:[
    MatListModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatRadioModule,
    MatCardModule,
    MatSidenavModule,
    MatSlideToggleModule
  ]
})
export class SharedModule { }
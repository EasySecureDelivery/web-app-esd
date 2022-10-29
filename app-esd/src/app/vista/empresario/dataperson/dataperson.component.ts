import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Shipment } from '../../model/shipment';
import { ShipmentService } from '../../services/shipment.service';
@Component({
  selector: 'app-dataperson',
  templateUrl: './dataperson.component.html',
  styleUrls: ['./dataperson.component.css']
})
export class DatapersonComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private ShipmentService: ShipmentService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(60)]],
      dni: ['', [Validators.required, Validators.maxLength(8)]],
      content: ['', [Validators.required]],
      weight: ['', [Validators.required, Validators.maxLength(3)]],
      recipe: ['', [Validators.required]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]],
      contact: ['', [Validators.required]],
    });
  }
  saveShipment(): void {
    const Shipment: Shipment = {
      id: 0,
      name:this.myForm.get('name')!.value,
      dni:this.myForm.get('dni')!.value,
      content: this.myForm.get('content')!.value,
      weight:this.myForm.get('weight')!.value,
      recipe:this.myForm.get('recipe')!.value,
      date: this.myForm.get('date')!.value,
      status: this.myForm.get('status')!.value,
      contact: this.myForm.get('contact')!.value,
    };
    this.ShipmentService.addShipment(Shipment).subscribe({
      next: (data) => {
        this.snackBar.open('El Shipment fue registrado con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['shipments']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

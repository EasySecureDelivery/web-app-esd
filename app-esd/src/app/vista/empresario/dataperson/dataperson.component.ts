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
        this.router.navigate(['empresario-header/selectcompany']);
      }
  }

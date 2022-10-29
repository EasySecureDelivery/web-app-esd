import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Shipment } from '../../model/shipment';
import { ShipmentService } from '../../services/shipment.service';

@Component({
  selector: 'app-myshipments',
  templateUrl: './myshipments.component.html',
  styleUrls: ['./myshipments.component.css']
})
export class MyshipmentsComponent implements OnInit {
  displayedColumns: String[] = [
    'id',
    'content',
    'date',
    'status',
    'contact',
  ];
  dataSource= new MatTableDataSource<Shipment>();
  
  clickedRows = new Set<Shipment>();
  Shipment!: Shipment[];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  constructor(private ShipmentService: ShipmentService, private snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.getShipment();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getShipment() {
    this.ShipmentService.getShipment().subscribe((data: Shipment[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteShipment(id: number) {
    this.ShipmentService.deleteShipment(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Shipment) => {
        return e.id !== id ? e : false;
      });
    });
  }
}
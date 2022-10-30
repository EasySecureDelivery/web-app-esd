import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ShipmentService } from '../../services/shipment.service';
import { Shipment } from '../../model/shipment';
@Component({
  selector: 'app-shippingstatus',
  templateUrl: './shippingstatus.component.html',
  styleUrls: ['./shippingstatus.component.css']
})
export class ShippingstatusComponent implements OnInit {
  displayedColumns: string[] = ['id','content','date','status', 'contact','actions'];
  dataSource = new MatTableDataSource<Shipment>();
  Shipment!: Shipment[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private ShipmentService: ShipmentService,
    private snackBar: MatSnackBar
  ) {}

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
      this.snackBar.open('El Shipment fue eliminado con exito!', '', {
        duration: 6000
      });
    });
  }
}

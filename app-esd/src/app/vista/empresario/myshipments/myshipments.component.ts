import { HttpClient } from '@angular/common/http';
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
  Shipments:any[]=[]; 
  displayedColumns: String[] = [
    'id',
    'content',
    'date',
    'status',
    'contact',
    'action'
  ];
  dataSource = new MatTableDataSource <any>(this.Shipments);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  clickedRows = new Set<Shipment>();
  Shipment!: Shipment[];
  constructor(private ShipmentService: ShipmentService, private snackBar: MatSnackBar,private http:HttpClient) { }
  ngOnInit(): void {
    this.ShipmentService.getall().subscribe((datos:any)=>{
      this.Shipments=datos;
    })
    this.getAll();
  }
  getAll(){
    this.ShipmentService.getall().subscribe(
      res => {
    this.dataSource = new MatTableDataSource<any>(this.Shipments);
    this.dataSource.paginator = this.paginator;
      },
      err=>{
        console.log(err);
      });
  
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delete(x:any){
    const ok = confirm('estas seguro?');
    if(ok){
      this.ShipmentService.delete(x).subscribe(()=>{
        this.getAll();
      })
    }
  }
}
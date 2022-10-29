import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Shipment } from '../model/shipment';
@Injectable({
  providedIn:'root'
})
export class ShipmentService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }
  getShipment() {
    return this.http.get<Shipment[]>(this.basePath);
  }

  getShipmentId(id: any) {
    return this.http.get<Shipment>(`${this.basePath}/${id}`);
  }

  addShipment(Shipment: Shipment) {
    return this.http.post<Shipment>(this.basePath, Shipment);
  }

  updateShipment(id: any, Shipment: Shipment) {
    return this.http.put<Shipment>(`${this.basePath}/${id}`, Shipment);
  }

  deleteShipment (id: any) {
    return this.http.delete<Shipment>(`${this.basePath}/${id}`);
  }
}

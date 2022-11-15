import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})
export class ShipmentService {
 
  constructor(private http: HttpClient) { }

  getall(){
    return this.http.get("http://localhost:8080/shipments");
  }
  create(x:any){
    return this.http.post("http://localhost:8080/shipments",x);
  }
  update(id:number,x:any){
    return this.http.put("http://localhost:8080/shipments/"+id,x);
  }
  delete(id:string){
    return this.http.delete("http://localhost:8080/shipments/"+id);
  }
}

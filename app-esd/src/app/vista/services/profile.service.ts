import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get("http://localhost:8080/profiles/1");
  }
  create(x:any){
    return this.http.post("http://localhost:8080/profiles",x);
  }
  update(id:number,x:any){
    return this.http.put("http://localhost:8080/profiles"+id,x);
  }
  delete(id:string){
    return this.http.delete("http://localhost:8080/profiles"+id);
  }
}
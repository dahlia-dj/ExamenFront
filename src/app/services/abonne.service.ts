import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Abonne } from '../models/Abonne.models';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  CREATE_ABONNE = "http://127.0.0.1:8000/api/abonne";


  save(abonne: Abonne): any {

    const req = this.client.post<any>(`${this.CREATE_ABONNE}`, abonne);
    req.subscribe(data => {
      console.log(data);
      return data;
    },
      error => { return null; }
    );
  }

  getAbonne(): Observable<Abonne[]>{
    return this.client.get<any>(`${this.CREATE_ABONNE}`);
    
  }

  deleteAbonne(id:number): Observable<Abonne[]>{
    return this.client.delete<any>(`${this.CREATE_ABONNE}/${id}`);
    
  }
  updateAbonne(ab:Abonne):Observable<Abonne[]>{
    return this.client.put<any>(`${this.CREATE_ABONNE}/${ab.id}`,ab);
  }
  
  constructor(public client: HttpClient) { }

  // postAbonne(data: any) {
  //   return this.http.post<any>(`${this.CREATE_ABONNE}`, data).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // getAbonne() {
  //   return this.http.get<any>(`${this.CREATE_ABONNE}`).pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }

  // updateAbonne(data: any,id:number){
  //   return this.http.put<any>(`${this.CREATE_ABONNE}`+id,data).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // deleteAbonne(id:number){
  //   return this.http.delete<any>(`${this.CREATE_ABONNE}`+id).pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

 
}

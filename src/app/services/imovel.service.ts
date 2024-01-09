import { Injectable } from '@angular/core';
import { Imovel } from '../models/imovel.model';
import { HttpClient } from '@angular/common/http';
import { path } from './path';
import { Observable, Subject, of } from 'rxjs';
import IMOVEIS  from 'src/assets/08-01-24.json';
 
@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { 
 }
 
  setGroupFilter$ = new Subject<any>();
	getGroupFilter = this.setGroupFilter$.asObservable();

  fetchImoveis(): Observable<any> {
    return of(IMOVEIS);
  }


  cadastrarImovel(imovel: any) {
    console.log(imovel)
    return this.http.post(`${path}/imovel`, imovel);
  }

  buscarInfoCEP(cep: number){
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  buscarImoveis(){
    return this.http.get(`${path}/imovel`);
  }


  buscarImovel(id: number){
    return this.http.get(`${path}/imovel/${id}`);
  }

}

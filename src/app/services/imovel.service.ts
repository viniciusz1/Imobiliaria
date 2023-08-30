import { Injectable } from '@angular/core';
import { Imovel } from '../models/imovel.model';
import { HttpClient } from '@angular/common/http';
import { path } from './path';
@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  constructor(private http: HttpClient) { }
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

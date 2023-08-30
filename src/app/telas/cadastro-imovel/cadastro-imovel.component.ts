import { ImovelService } from './../../services/imovel.service';
import { Component } from '@angular/core';
import { ImovelForm } from 'src/app/forms/imovel.form';
import { FormGroup, FormControl } from "@angular/forms";
import { Imovel } from 'src/app/models/imovel.model';

@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent {
  imovelForm = ImovelForm;
  constructor(private imovelService: ImovelService) {
   }
  onSubmit(){
    this.imovelService.cadastrarImovel(this.imovelForm.value).subscribe((res: Imovel) => {
      console.log(res)
    });
  }


  buscarInfoCEP(cep: any){
    console.log(cep)
    this.imovelService.buscarInfoCEP(cep).subscribe((res: any) => {

      this.imovelForm.patchValue({
        localizacao: {
          cep: res.cep,
          logradouro: res.logradouro,
          bairro: res.bairro,
          cidade: res.localidade,
          estado: res.uf
        }
      })

    });
  }
}

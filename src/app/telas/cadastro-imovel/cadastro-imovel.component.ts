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
  constructor() {
   }
  onSubmit(){
    console.log(this.imovelForm.value)
  }
}

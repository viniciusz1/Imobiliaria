import { Component } from '@angular/core';
import { PessoaForm } from 'src/app/forms/pessoa.form';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {
  pessoaForm = PessoaForm;
  tipoCadastro = [
    'Cliente',
    'Corretor',
    'Proprietário',
    'Locatário',
    'Interessado',
    'Outros'
  ]
  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaImovelComponent } from './lista-imovel/lista-imovel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdown, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ImobFilteringComponent } from './imob-filtering/imob-filtering.component';



@NgModule({
  declarations: [
    CadastroImovelComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    ListaImovelComponent,
    ImobFilteringComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class TelasModule { }

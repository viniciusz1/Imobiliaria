import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroImovelComponent } from './telas/cadastro-imovel/cadastro-imovel.component';
import { CadastroClienteComponent } from './telas/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [{
  path: 'imovel/:id',
  component: CadastroImovelComponent
},{
  path: 'pessoa/:id',
  component: CadastroClienteComponent
},
// {
//   path: 'imobiliarias',
//   component: ImobFilteringComponent
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

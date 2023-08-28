import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroImovelComponent } from './telas/cadastro-imovel/cadastro-imovel.component';

const routes: Routes = [{
  path: 'imovel/:id',
  component: CadastroImovelComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

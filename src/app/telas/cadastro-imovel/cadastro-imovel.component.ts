import { ImovelService } from './../../services/imovel.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import localeJson from 'src/assets/data.json'
import { ImovelForm } from 'src/app/forms/imovel.form';
import { Imovel } from 'src/app/models/imovel.model';
import { Validators, Editor, Toolbar } from 'ngx-editor';
@Component({
  selector: 'app-cadastro-imovel',
  templateUrl: './cadastro-imovel.component.html',
  styleUrls: ['./cadastro-imovel.component.scss']
})
export class CadastroImovelComponent implements OnInit, OnDestroy {
  imovelForm = ImovelForm;
  localeJson = localeJson as any
  cidadesOpcoes: any
  estadosOpcoes: any
  bairrosOpcoes: any
  medidasOpcoes: string[] = []
  editores = {
    descricao: new Editor(),
    observacao: new Editor()
  }
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  html = '';

  constructor(private imovelService: ImovelService) {
    this.estadosOpcoes = Object.keys(localeJson)
    this.medidasOpcoes = [
      'm²',
      'km²',
      'Hectares',
      'Alqueires',
      'Alqueires paulistas',
      'Alqueires mineiros',
      'Alqueires baianos',
      'Alqueires do norte',
    ]
  }
  ngOnInit(): void {
    
  }

  // make sure to destory the editor
  ngOnDestroy(): void {
    this.editores.descricao.destroy();
    this.editores.observacao.destroy();
  }

  searchBairros(estado: any, cidade: any){
    this.bairrosOpcoes = this.localeJson[estado][cidade.value]
  }

  searchCities(event: any){
    let state = event.target.value
    this.cidadesOpcoes = Object.keys(this.localeJson[state])
    this.bairrosOpcoes = []
  }

  onSubmit(){
    this.imovelService.cadastrarImovel(this.imovelForm.value).subscribe((res: Imovel) => {
      console.log(res)
    });
  }


  buscarInfoCEP(cep: any){
    this.imovelService.buscarInfoCEP(cep).subscribe((res: any) => {
      this.bairrosOpcoes = this.localeJson[res.uf][res.localidade]
      this.cidadesOpcoes = Object.keys(this.localeJson[res.uf])
      this.imovelForm.patchValue({
        localizacao: {
          cep: res.cep,
          logradouro: res.logradouro,
          bairro: {nome: res.bairro } ,
          cidade:  {nome: res.localidade},
          estado:  {nome: res.uf}
        }
      })

    });
  }
}

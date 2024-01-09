import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ImovelService } from 'src/app/services/imovel.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() groupFilters: Object = Object;
  @Input() searchByKeyword: string = '';
  imoveis: any[] = []
  filteredImoveis: any[] = [];
  page = 1
  pageSize = 40
  collectionSize = 0
  
  constructor(private imovelService: ImovelService) {

  }

  filterImovelList(filters: any, imoveis: any): void {
    this.filteredImoveis = this.imoveis;
    const keys = Object.keys(filters);

    const filterImovel = (imovel: any) => {
      let result = keys.map(key => {
        console.log(key)
        if (!((key == 'minimo') || (key == 'maximo'))) {
          if (imovel[key]) {
            return String(imovel[key]).toLowerCase().includes(String(filters[key]).toLowerCase())
          } else {
            return false;
          }
        }

        return undefined
      });
      result = result.filter(it => it !== undefined);

      if (filters['minimo'] && filters['maximo']) {
        let valor = parseFloat(imovel['valor'].replace('R$', '').replaceAll('.',''))
        
        if (imovel['valor']) {
          if (valor >= +filters['minimo'] && valor <= +filters['maximo']) {
            result.push(true);
          } else {
            result.push(false);
          }
        } else {
          result.push(false);
        }
      }
      let teste = result.reduce((acc, cur: any) => { return acc & cur }, 1)
      return teste
    }
    this.filteredImoveis = this.imoveis.filter(filterImovel);
  }


	ngOnChanges(): void {
		if (this.groupFilters) this.filterImovelList(this.groupFilters, this.imoveis);
    
	}

  ngOnInit(): void {
    this.loadImoveis();
  }

  changedPage(page: number){
    console.log(page)
    // this.data = json.slice((page - 1) * this.pageSize, page * this.pageSize)
  }

  loadImoveis(): void {
    this.imovelService.fetchImoveis()
      .subscribe((imoveis: any) => {
        this.imoveis = imoveis
      });
    this.filteredImoveis = this.filteredImoveis.length > 0 ? this.filteredImoveis : this.imoveis;
  }
}

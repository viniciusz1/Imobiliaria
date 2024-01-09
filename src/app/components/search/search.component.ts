import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  form: FormGroup;
	@Output() autoSearch: EventEmitter<string> = new EventEmitter<string>();
	@Output() groupFilters: EventEmitter<any> = new EventEmitter<any>();
	searchText: string = '';
	constructor(private fb: FormBuilder) {
		this.form = this.fb.group({
			tipo: new FormControl(''),
			descricao: new FormControl(''),
			rua: new FormControl(''),
			bairro: new FormControl(''),
			cidade: new FormControl(''),
			minimo: new FormControl(''),
			maximo: new FormControl(''),
			imobiliaria: new FormControl(''),
		});
  }
  search(filters: any): void {
    Object.keys(filters).forEach(key => filters[key] === '' ? delete filters[key] : key);
	console.log(filters)
    this.groupFilters.emit(filters);
  }
}

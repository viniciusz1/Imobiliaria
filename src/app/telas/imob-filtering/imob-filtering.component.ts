import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ImobFilterPipe } from './imob-filter.pipe';
import { ImovelService } from 'src/app/services/imovel.service';
import { SearchComponent } from 'src/app/components/search/search.component';
import { ComponentsModule } from 'src/app/components/components.module';
@Component({
  selector: 'app-imob-filtering',
  templateUrl: './imob-filtering.component.html',
	standalone: true,
	imports: [FormsModule, CommonModule, ImobFilterPipe, ComponentsModule],
  styleUrls: ['./imob-filtering.component.scss']
})
export class ImobFilteringComponent {
 
  searchText: string;
  filters: Object;

  constructor(){
    this.searchText = ''
    this.filters = Object()
  }


}

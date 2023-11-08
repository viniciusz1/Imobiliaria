import { Component } from '@angular/core';
import json from 'src/assets/itaivan_ec_pradi.json';
@Component({
  selector: 'app-imob-filtering',
  templateUrl: './imob-filtering.component.html',
  styleUrls: ['./imob-filtering.component.scss']
})
export class ImobFilteringComponent {
  data: any
  constructor(){
    this.data = json
    console.log(this.data)
  }
}

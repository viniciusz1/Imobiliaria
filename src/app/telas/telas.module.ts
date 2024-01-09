import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroImovelComponent } from './cadastro-imovel/cadastro-imovel.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ListaImovelComponent } from './lista-imovel/lista-imovel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImobFilteringComponent } from './imob-filtering/imob-filtering.component';
import { ImobFilterPipe } from './imob-filtering/imob-filter.pipe';
import { CurrencyMaskConfig, CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';
import { NgxEditorModule } from 'ngx-editor';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: false,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};


@NgModule({
  declarations: [
    CadastroImovelComponent,
    CadastroClienteComponent,
    ListaClienteComponent,
    ListaImovelComponent,
    // ImobFilteringComponent,
    // ImobFilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ],
  providers: [
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
],
})
export class TelasModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaImovelComponent } from './lista-imovel.component';

describe('ListaImovelComponent', () => {
  let component: ListaImovelComponent;
  let fixture: ComponentFixture<ListaImovelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaImovelComponent]
    });
    fixture = TestBed.createComponent(ListaImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

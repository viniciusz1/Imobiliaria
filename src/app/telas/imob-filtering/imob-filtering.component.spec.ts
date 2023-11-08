import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImobFilteringComponent } from './imob-filtering.component';

describe('ImobFilteringComponent', () => {
  let component: ImobFilteringComponent;
  let fixture: ComponentFixture<ImobFilteringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImobFilteringComponent]
    });
    fixture = TestBed.createComponent(ImobFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucigramaComponent } from './crucigrama.component';

describe('CrucigramaComponent', () => {
  let component: CrucigramaComponent;
  let fixture: ComponentFixture<CrucigramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrucigramaComponent]
    });
    fixture = TestBed.createComponent(CrucigramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

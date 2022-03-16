import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationConcentrationComponent } from './information-concentration.component';

describe('InformationConcentrationComponent', () => {
  let component: InformationConcentrationComponent;
  let fixture: ComponentFixture<InformationConcentrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationConcentrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

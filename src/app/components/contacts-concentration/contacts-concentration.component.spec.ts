import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsConcentrationComponent } from './contacts-concentration.component';

describe('ContactsConcentrationComponent', () => {
  let component: ContactsConcentrationComponent;
  let fixture: ComponentFixture<ContactsConcentrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsConcentrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsConcentrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

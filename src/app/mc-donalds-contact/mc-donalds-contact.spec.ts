import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDonaldsContact } from './mc-donalds-contact';

describe('McDonaldsContact', () => {
  let component: McDonaldsContact;
  let fixture: ComponentFixture<McDonaldsContact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McDonaldsContact]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McDonaldsContact);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

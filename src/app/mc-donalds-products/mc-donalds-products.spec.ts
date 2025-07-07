import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDonaldsProducts } from './mc-donalds-products';

describe('McDonaldsProducts', () => {
  let component: McDonaldsProducts;
  let fixture: ComponentFixture<McDonaldsProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McDonaldsProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McDonaldsProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

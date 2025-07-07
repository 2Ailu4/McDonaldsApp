import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McDonaldsList } from './mc-donalds-list';

describe('McDonaldsList', () => {
  let component: McDonaldsList;
  let fixture: ComponentFixture<McDonaldsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McDonaldsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(McDonaldsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

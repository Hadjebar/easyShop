import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriComponent } from './favouri.component';

describe('FavouriComponent', () => {
  let component: FavouriComponent;
  let fixture: ComponentFixture<FavouriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilSimpleComponent } from './profil-simple.component';

describe('ProfilSimpleComponent', () => {
  let component: ProfilSimpleComponent;
  let fixture: ComponentFixture<ProfilSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

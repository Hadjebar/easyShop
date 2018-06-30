import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoAreESComponent } from './who-are-es.component';

describe('WhoAreESComponent', () => {
  let component: WhoAreESComponent;
  let fixture: ComponentFixture<WhoAreESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoAreESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoAreESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyESComponent } from './why-es.component';

describe('WhyESComponent', () => {
  let component: WhyESComponent;
  let fixture: ComponentFixture<WhyESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

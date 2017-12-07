import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceSpecificComponent } from './service-specific.component';

describe('ServiceSpecificComponent', () => {
  let component: ServiceSpecificComponent;
  let fixture: ComponentFixture<ServiceSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

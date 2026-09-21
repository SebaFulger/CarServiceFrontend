import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRecordForm } from './service-record-form';

describe('ServiceRecordForm', () => {
  let component: ServiceRecordForm;
  let fixture: ComponentFixture<ServiceRecordForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceRecordForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceRecordForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

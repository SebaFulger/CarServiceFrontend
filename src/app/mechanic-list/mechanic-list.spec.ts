import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicList } from './mechanic-list';

describe('MechanicList', () => {
  let component: MechanicList;
  let fixture: ComponentFixture<MechanicList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MechanicList],
    }).compileComponents();

    fixture = TestBed.createComponent(MechanicList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

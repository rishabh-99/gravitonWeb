import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetCashComponent } from './net-cash.component';

describe('NetCashComponent', () => {
  let component: NetCashComponent;
  let fixture: ComponentFixture<NetCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NetCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

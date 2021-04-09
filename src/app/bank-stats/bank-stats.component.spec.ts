import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankStatsComponent } from './bank-stats.component';

describe('BankStatsComponent', () => {
  let component: BankStatsComponent;
  let fixture: ComponentFixture<BankStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

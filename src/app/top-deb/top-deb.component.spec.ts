import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDebComponent } from './top-deb.component';

describe('TopDebComponent', () => {
  let component: TopDebComponent;
  let fixture: ComponentFixture<TopDebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

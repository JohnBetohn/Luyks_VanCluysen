import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombomapComponent } from './combomap.component';

describe('CombomapComponent', () => {
  let component: CombomapComponent;
  let fixture: ComponentFixture<CombomapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombomapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombomapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

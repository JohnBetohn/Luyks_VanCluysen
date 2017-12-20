import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogParkComponent } from './dog-park.component';

describe('DogParkComponent', () => {
  let component: DogParkComponent;
  let fixture: ComponentFixture<DogParkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogParkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

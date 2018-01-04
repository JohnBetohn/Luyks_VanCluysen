import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogParkRandomComponent } from './dog-park-random.component';

describe('DogParkRandomComponent', () => {
  let component: DogParkRandomComponent;
  let fixture: ComponentFixture<DogParkRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogParkRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogParkRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

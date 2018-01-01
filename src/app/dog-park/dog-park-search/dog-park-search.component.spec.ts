import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogParkSearchComponent } from './dog-park-search.component';

describe('DogParkSearchComponent', () => {
  let component: DogParkSearchComponent;
  let fixture: ComponentFixture<DogParkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogParkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogParkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

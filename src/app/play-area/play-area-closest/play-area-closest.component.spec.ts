import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAreaClosestComponent } from './play-area-closest.component';

describe('PlayAreaClosestComponent', () => {
  let component: PlayAreaClosestComponent;
  let fixture: ComponentFixture<PlayAreaClosestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAreaClosestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAreaClosestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisearchComponent } from './poisearch.component';

describe('PoisearchComponent', () => {
  let component: PoisearchComponent;
  let fixture: ComponentFixture<PoisearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoisearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoisearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

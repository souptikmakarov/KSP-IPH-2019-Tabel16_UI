import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownPersonCardComponent } from './unknown-person-card.component';

describe('UnknownPersonCardComponent', () => {
  let component: UnknownPersonCardComponent;
  let fixture: ComponentFixture<UnknownPersonCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownPersonCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownPersonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

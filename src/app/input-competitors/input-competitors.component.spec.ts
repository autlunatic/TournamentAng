import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCompetitorsComponent } from './input-competitors.component';

describe('InputCompetitorsComponent', () => {
  let component: InputCompetitorsComponent;
  let fixture: ComponentFixture<InputCompetitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCompetitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCompetitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

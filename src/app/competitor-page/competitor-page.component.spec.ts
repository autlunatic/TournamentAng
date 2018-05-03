import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorPageComponent } from './competitor-page.component';

describe('CompetitorPageComponent', () => {
  let component: CompetitorPageComponent;
  let fixture: ComponentFixture<CompetitorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

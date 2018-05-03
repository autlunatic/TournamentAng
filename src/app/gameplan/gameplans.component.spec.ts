import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplansComponent } from './gameplans.component';

describe('GameplansComponent', () => {
  let component: GameplansComponent;
  let fixture: ComponentFixture<GameplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

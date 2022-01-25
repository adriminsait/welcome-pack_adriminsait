import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyCharacterComponent } from './card-my-character.component';

describe('CardMyCharacterComponent', () => {
  let component: CardMyCharacterComponent;
  let fixture: ComponentFixture<CardMyCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMyCharacterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

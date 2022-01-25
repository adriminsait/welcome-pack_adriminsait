import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharacterDetailComponentComponent } from './my-character-detail-component.component';

describe('MyCharacterDetailComponentComponent', () => {
  let component: MyCharacterDetailComponentComponent;
  let fixture: ComponentFixture<MyCharacterDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCharacterDetailComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCharacterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

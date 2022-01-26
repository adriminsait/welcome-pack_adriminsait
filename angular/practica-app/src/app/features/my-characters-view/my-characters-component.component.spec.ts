import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCharactersComponentComponent } from './my-characters-component.component';

describe('MyCharactersComponentComponent', () => {
  let component: MyCharactersComponentComponent;
  let fixture: ComponentFixture<MyCharactersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCharactersComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCharactersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

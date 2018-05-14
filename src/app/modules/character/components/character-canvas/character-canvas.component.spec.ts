import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCanvasComponent } from './character-canvas.component';

describe('CharacterCanvasComponent', () => {
  let component: CharacterCanvasComponent;
  let fixture: ComponentFixture<CharacterCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

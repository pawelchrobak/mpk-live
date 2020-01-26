import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinePickerComponent } from './line-picker.component';

describe('LinePickerComponent', () => {
  let component: LinePickerComponent;
  let fixture: ComponentFixture<LinePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

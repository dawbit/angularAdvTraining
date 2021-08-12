import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableListOptionComponent } from './selectable-list-option.component';

describe('SelectableListOptionComponent', () => {
  let component: SelectableListOptionComponent;
  let fixture: ComponentFixture<SelectableListOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectableListOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableListOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

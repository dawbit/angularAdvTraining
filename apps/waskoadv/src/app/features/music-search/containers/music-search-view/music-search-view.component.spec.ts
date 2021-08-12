import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicSearchViewComponent } from './music-search-view.component';

describe('MusicSearchViewComponent', () => {
  let component: MusicSearchViewComponent;
  let fixture: ComponentFixture<MusicSearchViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicSearchViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicSearchViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

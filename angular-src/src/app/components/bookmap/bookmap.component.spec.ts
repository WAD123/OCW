import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmapComponent } from './bookmap.component';

describe('BookmapComponent', () => {
  let component: BookmapComponent;
  let fixture: ComponentFixture<BookmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

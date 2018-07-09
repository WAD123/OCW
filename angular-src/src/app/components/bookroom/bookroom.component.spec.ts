import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookroomComponent } from './bookroom.component';

describe('BookroomComponent', () => {
  let component: BookroomComponent;
  let fixture: ComponentFixture<BookroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomComponent } from './bookroom.component';

describe('BookRoomComponent', () => {
  let component: BookRoomComponent;
  let fixture: ComponentFixture<BookRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

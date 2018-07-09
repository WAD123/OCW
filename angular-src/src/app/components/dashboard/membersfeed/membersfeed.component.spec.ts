import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersfeedComponent } from './membersfeed.component';

describe('MembersfeedComponent', () => {
  let component: MembersfeedComponent;
  let fixture: ComponentFixture<MembersfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

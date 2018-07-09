import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagebookingsComponent } from './managebookings.component';

describe('ManagebookingsComponent', () => {
  let component: ManagebookingsComponent;
  let fixture: ComponentFixture<ManagebookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagebookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagebookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

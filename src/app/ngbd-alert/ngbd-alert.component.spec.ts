import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdAlertClosableComponent } from './ngbd-alert.component';

describe('NgbdAlertClosableComponent', () => {
  let component: NgbdAlertClosableComponent;
  let fixture: ComponentFixture<NgbdAlertClosableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdAlertClosableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdAlertClosableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

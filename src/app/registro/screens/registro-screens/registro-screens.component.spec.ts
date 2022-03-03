import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroScreensComponent } from './registro-screens.component';

describe('RegistroScreensComponent', () => {
  let component: RegistroScreensComponent;
  let fixture: ComponentFixture<RegistroScreensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroScreensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroScreensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

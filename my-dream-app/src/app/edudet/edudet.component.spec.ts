import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdudetComponent } from './edudet.component';

describe('EdudetComponent', () => {
  let component: EdudetComponent;
  let fixture: ComponentFixture<EdudetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdudetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdudetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

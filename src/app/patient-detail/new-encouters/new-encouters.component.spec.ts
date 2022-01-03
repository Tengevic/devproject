import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEncoutersComponent } from './new-encouters.component';

describe('NewEncoutersComponent', () => {
  let component: NewEncoutersComponent;
  let fixture: ComponentFixture<NewEncoutersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEncoutersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEncoutersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPetientFormComponent } from './new-petient-form.component';

describe('NewPetientFormComponent', () => {
  let component: NewPetientFormComponent;
  let fixture: ComponentFixture<NewPetientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPetientFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPetientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

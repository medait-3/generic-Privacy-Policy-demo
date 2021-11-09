import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivaComponent } from './priva.component';

describe('PrivaComponent', () => {
  let component: PrivaComponent;
  let fixture: ComponentFixture<PrivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoutMeComponent } from './amout-me.component';

describe('AmoutMeComponent', () => {
  let component: AmoutMeComponent;
  let fixture: ComponentFixture<AmoutMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmoutMeComponent]
    });
    fixture = TestBed.createComponent(AmoutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

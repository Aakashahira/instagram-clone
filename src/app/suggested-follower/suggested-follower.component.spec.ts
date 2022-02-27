import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedFollowerComponent } from './suggested-follower.component';

describe('SuggestedFollowerComponent', () => {
  let component: SuggestedFollowerComponent;
  let fixture: ComponentFixture<SuggestedFollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedFollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedFollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

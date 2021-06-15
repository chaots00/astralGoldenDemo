import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasementComponent } from './clasement.component';

describe('ClasementComponent', () => {
  let component: ClasementComponent;
  let fixture: ComponentFixture<ClasementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClasementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

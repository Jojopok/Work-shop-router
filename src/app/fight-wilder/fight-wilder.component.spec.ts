import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightWilderComponent } from './fight-wilder.component';

describe('FightWilderComponent', () => {
  let component: FightWilderComponent;
  let fixture: ComponentFixture<FightWilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightWilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FightWilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

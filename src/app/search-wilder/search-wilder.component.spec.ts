import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWilderComponent } from './search-wilder.component';

describe('SearchWilderComponent', () => {
  let component: SearchWilderComponent;
  let fixture: ComponentFixture<SearchWilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchWilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchWilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

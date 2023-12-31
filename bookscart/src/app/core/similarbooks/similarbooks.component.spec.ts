import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarbooksComponent } from './similarbooks.component';

describe('SimilarbooksComponent', () => {
  let component: SimilarbooksComponent;
  let fixture: ComponentFixture<SimilarbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarbooksComponent]
    });
    fixture = TestBed.createComponent(SimilarbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

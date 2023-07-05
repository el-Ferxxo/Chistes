import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChisteComponent } from './chiste.component';

describe('ChisteComponent', () => {
  let component: ChisteComponent;
  let fixture: ComponentFixture<ChisteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChisteComponent]
    });
    fixture = TestBed.createComponent(ChisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

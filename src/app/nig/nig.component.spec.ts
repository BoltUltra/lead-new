import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NigComponent } from './nig.component';

describe('NigComponent', () => {
  let component: NigComponent;
  let fixture: ComponentFixture<NigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NigComponent]
    });
    fixture = TestBed.createComponent(NigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

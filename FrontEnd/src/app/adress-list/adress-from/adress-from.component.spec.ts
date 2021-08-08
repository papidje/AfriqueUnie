import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressFromComponent } from './adress-from.component';

describe('AdressFromComponent', () => {
  let component: AdressFromComponent;
  let fixture: ComponentFixture<AdressFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdressFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

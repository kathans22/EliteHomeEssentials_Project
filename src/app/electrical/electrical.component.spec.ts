import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalComponent } from './electrical.component';

describe('electricalComponent', () => {
  let component: electricalComponent;
  let fixture: ComponentFixture<electricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ electricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(electricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

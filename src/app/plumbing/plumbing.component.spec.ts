import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { plumbingComponent } from './plumbing.component';

describe('plumbingComponent', () => {
  let component: plumbingComponent;
  let fixture: ComponentFixture<plumbingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ plumbingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(plumbingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

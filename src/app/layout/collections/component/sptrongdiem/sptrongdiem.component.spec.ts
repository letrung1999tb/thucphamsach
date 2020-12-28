import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SptrongdiemComponent } from './sptrongdiem.component';

describe('SptrongdiemComponent', () => {
  let component: SptrongdiemComponent;
  let fixture: ComponentFixture<SptrongdiemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SptrongdiemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SptrongdiemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

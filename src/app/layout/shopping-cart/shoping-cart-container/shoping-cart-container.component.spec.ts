import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartContainerComponent } from './shoping-cart-container.component';

describe('ShopingCartContainerComponent', () => {
  let component: ShopingCartContainerComponent;
  let fixture: ComponentFixture<ShopingCartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingCartContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

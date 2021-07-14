import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponBannerComponent } from './coupon-banner.component';

describe('CouponBannerComponent', () => {
  let component: CouponBannerComponent;
  let fixture: ComponentFixture<CouponBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

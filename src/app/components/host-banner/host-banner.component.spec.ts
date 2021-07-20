import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostBannerComponent } from './host-banner.component';

describe('HostBannerComponent', () => {
  let component: HostBannerComponent;
  let fixture: ComponentFixture<HostBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

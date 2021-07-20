import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularHostsComponent } from './popular-hosts.component';

describe('PopularHostsComponent', () => {
  let component: PopularHostsComponent;
  let fixture: ComponentFixture<PopularHostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularHostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpkImageComponent } from './spk-image.component';

describe('SpkImageComponent', () => {
  let component: SpkImageComponent;
  let fixture: ComponentFixture<SpkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpkImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

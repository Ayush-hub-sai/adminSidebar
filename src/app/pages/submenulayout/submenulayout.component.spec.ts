import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmenulayoutComponent } from './submenulayout.component';

describe('SubmenulayoutComponent', () => {
  let component: SubmenulayoutComponent;
  let fixture: ComponentFixture<SubmenulayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubmenulayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmenulayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

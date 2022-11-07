import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedGameComponent } from './related-game.component';

describe('RelatedGameComponent', () => {
  let component: RelatedGameComponent;
  let fixture: ComponentFixture<RelatedGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

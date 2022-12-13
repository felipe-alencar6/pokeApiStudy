import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketeamComponent } from './poketeam.component';

describe('PoketeamComponent', () => {
  let component: PoketeamComponent;
  let fixture: ComponentFixture<PoketeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoketeamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoketeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

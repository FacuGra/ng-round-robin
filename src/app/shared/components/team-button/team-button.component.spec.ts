import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamButtonComponent } from './team-button.component';

describe('TeamButtonComponent', () => {
  let component: TeamButtonComponent;
  let fixture: ComponentFixture<TeamButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamButtonComponent);
    component = fixture.componentInstance;
    component.team = { id: 1, name: 'Team1' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

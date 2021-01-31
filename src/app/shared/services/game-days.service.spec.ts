import { TestBed } from '@angular/core/testing';

import { GameDaysService } from './game-days.service';

describe('MatchesService', () => {
  let service: GameDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

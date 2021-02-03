import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GameDay } from 'src/app/shared/models/game-day';
import { GameDaysService } from 'src/app/shared/services/game-days.service';
import { TeamsService } from 'src/app/shared/services/teams.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchesComponent implements OnInit {
  canGenerate: Observable<boolean>;
  gameDays: Observable<GameDay[]>;

  constructor(
    private teamsService: TeamsService,
    private gameDaysService: GameDaysService
  ) {}

  ngOnInit(): void {
    this.gameDays = this.gameDaysService.gameDays$;
    this.canGenerate = this.teamsService.teams$.pipe(
      mergeMap((teams) =>
        this.gameDays.pipe(
          map((gameDays) => {
            const { length } = teams;
            return (
              !(length % 2) && length >= 4 && length <= 20 && !gameDays.length
            );
          })
        )
      )
    );
  }

  generateGameDays(): void {
    this.gameDaysService.generateGameDays();
  }
}

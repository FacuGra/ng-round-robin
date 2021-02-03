import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../models/team';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-team-button',
  templateUrl: './team-button.component.html',
  styleUrls: ['./team-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamButtonComponent implements OnInit {
  @Input() team: Team;
  selected: Observable<number>;
  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.selected = this.teamsService.selected$;
  }
  setSelected(index: number): void {
    this.teamsService.setSelected(index);
  }
}

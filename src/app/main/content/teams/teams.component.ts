import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team';
import { TeamsService } from 'src/app/shared/services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnInit {
  teams: Observable<Team[]>;
  selected: Observable<number>;
  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teams = this.teamsService.teams$;
    this.selected = this.teamsService.selected$;
  }

  deleteSelected() {
    this.teamsService.deleteSelected();
  }
}

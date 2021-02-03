import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamsService } from 'src/app/shared/services/teams.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html',
  styleUrls: ['./team-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamAddComponent implements OnInit {
  form: FormGroup;
  canAdd: Observable<boolean>;
  constructor(private fb: FormBuilder, private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.form = this.fb.group({ team: ['', [Validators.required]] });
    this.canAdd = this.teamsService.teams$.pipe(
      map((teams) => teams.length < 20)
    );
  }

  save(): void {
    const teamControl = this.form.get('team');
    this.teamsService.addTeam(teamControl.value);
    teamControl.reset();
  }
}

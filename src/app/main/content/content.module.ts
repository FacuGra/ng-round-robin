import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TeamButtonModule } from 'src/app/shared/components/team-button/team-button.module';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ContentComponent } from './content.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamAddComponent } from './teams/team-add/team-add.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
  declarations: [
    ContentComponent,
    MatchesComponent,
    TeamsComponent,
    TeamAddComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TeamButtonModule,
  ],
  exports: [ContentComponent],
})
export class ContentModule {}

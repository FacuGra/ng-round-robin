import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamButtonModule } from 'src/app/shared/components/team-button/team-button.module';

@NgModule({
  declarations: [ContentComponent, MatchesComponent, TeamsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    TeamButtonModule,
  ],
  exports: [ContentComponent],
})
export class ContentModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamButtonComponent } from './team-button.component';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
  declarations: [TeamButtonComponent],
  imports: [CommonModule, MaterialModule],
  exports: [TeamButtonComponent],
})
export class TeamButtonModule {}

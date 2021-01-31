import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { TeamAddComponent } from './team-add/team-add.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, TeamAddComponent],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}

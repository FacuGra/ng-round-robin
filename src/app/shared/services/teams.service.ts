import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teamsSrc = new BehaviorSubject<Team[]>([]);
  teams$ = this.teamsSrc.asObservable();
  private selectedSrc = new BehaviorSubject<number>(null);
  selected$ = this.selectedSrc.asObservable();

  constructor() {}

  addTeam(name: string): void {
    const newTeams = this.teamsSrc.value;
    const newTeam = { name, id: this.teamsSrc.value.length + 1 };
    newTeams.push(newTeam);
    this.teamsSrc.next(newTeams);
  }

  setSelected(index: number) {
    if (this.selectedSrc.value === index) {
      this.selectedSrc.next(null);
    } else {
      this.selectedSrc.next(index);
    }
  }

  deleteSelected() {
    const newTeams = this.teamsSrc.value;
    newTeams.splice(this.selectedSrc.value - 1);
    this.selectedSrc.next(null);
    this.teamsSrc.next(newTeams);
  }
}

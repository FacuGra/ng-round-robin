import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teams$: Observable<Team[]>;
  selected$: Observable<number>;
  private teamsSrc = new BehaviorSubject<Team[]>([]);
  private selectedSrc = new BehaviorSubject<number>(null);

  constructor() {
    this.teams$ = this.teamsSrc.asObservable();
    this.selected$ = this.selectedSrc.asObservable();
  }

  addTeam(name: string): void {
    const newTeams = this.teamsSrc.value;
    const newTeam = { name, id: this.teamsSrc.value.length + 1 };
    newTeams.push(newTeam);
    this.teamsSrc.next(newTeams);
  }

  setSelected(index: number): void {
    if (this.selectedSrc.value === index) {
      this.selectedSrc.next(null);
    } else {
      this.selectedSrc.next(index);
    }
  }

  deleteSelected(): void {
    const newTeams = this.teamsSrc.value;
    newTeams.splice(this.selectedSrc.value - 1);
    this.selectedSrc.next(null);
    this.teamsSrc.next(newTeams);
  }
}

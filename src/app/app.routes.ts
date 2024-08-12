import { Routes } from '@angular/router';
import { MathProblemsComponent } from './math-problems/math-problems.component';
import { StatisticsComponent } from './statistics/statistics.component';

export const routes: Routes = [
    {path: '', component: MathProblemsComponent, pathMatch: 'full'},
    {path: 'statistics', component: StatisticsComponent}
];

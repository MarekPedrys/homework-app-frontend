import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MathProblem } from './models';

const BASER_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpCient = inject(HttpClient);

  getMathProblems(): Observable<MathProblem[]> {
    return this.httpCient.get<MathProblem[]>(`${BASER_URL}/math-problems`);
  }

}

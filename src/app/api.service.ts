import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MathProblem, MathProblemPage } from './models';

const BASER_URL = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpCient = inject(HttpClient);

  getMathProblems(pageNumber: number): Observable<MathProblemPage> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pageNumber",pageNumber);
    return this.httpCient.get<MathProblemPage>(`${BASER_URL}/math-problems`,{params:queryParams});
  }

}

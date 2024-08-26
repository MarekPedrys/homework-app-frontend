import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MathProblem } from '../models';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-math-problems',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './math-problems.component.html',
  styleUrl: './math-problems.component.css'
})
export class MathProblemsComponent implements OnInit {
  mathProblems: MathProblem[] = [];
  private readonly apiService = inject(ApiService);

  ngOnInit(): void {
    this.fetchMathProblems();
  }

  fetchMathProblems() {    
    this.apiService.getMathProblems().subscribe(
      mathProblemPage => this.mathProblems = mathProblemPage.content
    )
  }

}

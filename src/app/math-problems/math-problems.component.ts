import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MathProblem } from '../models';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-math-problems',
  standalone: true,
  imports: [NgForOf, NgClass, NgIf],
  templateUrl: './math-problems.component.html',
  styleUrl: './math-problems.component.css'
})
export class MathProblemsComponent implements OnInit {
  mathProblems: MathProblem[] = [];
  pageNumber: number = 0;
  totalPages: number = 1;
  private readonly apiService = inject(ApiService);

  ngOnInit(): void {
    this.fetchMathProblems(0);
  }

  fetchMathProblems(pageNumber: number) {    
    this.apiService.getMathProblems(pageNumber).subscribe(
      mathProblemPage => {
        this.mathProblems = mathProblemPage.content;
        this.pageNumber = mathProblemPage.pageNumber;
        this.totalPages = mathProblemPage.totalPages;
      }
 
    )
  }

}

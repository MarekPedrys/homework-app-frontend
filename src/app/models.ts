export interface MathProblem {
    id: number;
    yearOfStudy: string;
    level: string;
    department: string;
    points: number;
    content: string;
}

export interface MathProblemPage {
    content: MathProblem[];
    pageNumber: number;
    totalPages: number;
}
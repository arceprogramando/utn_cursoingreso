export interface Correlativity {
  number: number;
  subject: string;
  coursesRequiredToEnroll: number[] | 'No requiere';
  coursesRequiredToTakeExam: number[] | 'No requiere';
  aprovedCourses: boolean;
}

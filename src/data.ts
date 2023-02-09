export interface SubjectRecord {
  course_id: string;

  subject: string;
  grade: string;
  credits: number;
  score: number;
}

export const mockedData: SubjectRecord[] = [
  {
    course_id: "123541",
    credits: 4,
    grade: "A+",
    score: 97,
    subject: "Chemistry",
  },
];

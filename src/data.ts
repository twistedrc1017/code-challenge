export interface SubjectRecord {
  course_id: string;

  subject: string;
  grade: string;
  credits: number;
  score: number;
}

export const mockedData: SubjectRecord[] = [
  {
    course_id: "00000001",
    credits: 4,
    grade: "A+",
    score: 97,
    subject: "Chemistry",
  },
  {
    course_id: "00000002",
    credits: 4,
    grade: "B+",
    score: 87,
    subject: "Math",
  },
  {
    course_id: "00000003",
    credits: 4,
    grade: "C+",
    score: 77,
    subject: "Health",
  },
];

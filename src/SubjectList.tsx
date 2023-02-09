import { FC } from "react";
import { SubjectListWrapper } from "./SubjectList.styled";
import { SubjectCard } from "./SubjectCard";
import { mockedData } from "./data";

export interface ISubjectListProps {}

export const SubjectList: FC<ISubjectListProps> = (props) => {
  return (
    <SubjectListWrapper>
      {mockedData.map((record) => {
        return (
          <SubjectCard course_id={record.course_id} key={record.course_id} />
        );
      })}
    </SubjectListWrapper>
  );
};

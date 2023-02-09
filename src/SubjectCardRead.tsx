import { FC, Fragment } from "react";
import {
  SubjectCardEditButton,
  SubjectCardLabel,
  SubjectCardValue,
  SubjectCardWrapper,
} from "./SubjectCard.styled";
import { useSubjectCardContext } from "./SubjectCard.context";

export interface ISubjectCardReadProps {}

export const SubjectCardRead: FC<ISubjectCardReadProps> = (props) => {
  const { data, setMode } = useSubjectCardContext();
  return (
    <SubjectCardWrapper>
      <SubjectCardLabel />
      <SubjectCardEditButton
        onClick={() => {
          setMode("Edit");
        }}
      >
        Edit
      </SubjectCardEditButton>
      <SubjectCardLabel>Course ID</SubjectCardLabel>
      <SubjectCardValue>{data?.course_id}</SubjectCardValue>
    </SubjectCardWrapper>
  );
};

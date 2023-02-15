import { FC } from "react";
import {
  SubjectCardButton,
  SubjectCardLabel,
  SubjectCardValue,
  SubjectCardWrapper,
} from "../SubjectCard/SubjectCard.styled";
import { useSubjectCardContext } from "../SubjectCard/SubjectCard.context";

export interface ISubjectCardReadProps {}

export const SubjectCardRead: FC<ISubjectCardReadProps> = (props) => {
  const { data, setMode } = useSubjectCardContext();
  return (
    <SubjectCardWrapper>
      <SubjectCardLabel />
      <SubjectCardButton onClick={() => setMode("Edit")}>
        Edit
      </SubjectCardButton>
      <SubjectCardLabel>Course ID</SubjectCardLabel>
      <SubjectCardValue>{data?.course_id}</SubjectCardValue>
      <SubjectCardLabel>Subject</SubjectCardLabel>
      <SubjectCardValue>{data?.subject}</SubjectCardValue>
      <SubjectCardLabel>Score</SubjectCardLabel>
      <SubjectCardValue>{data?.score}</SubjectCardValue>
      <SubjectCardLabel>Grade</SubjectCardLabel>
      <SubjectCardValue>{data?.grade}</SubjectCardValue>
      <SubjectCardLabel>Credits</SubjectCardLabel>
      <SubjectCardValue>{data?.credits}</SubjectCardValue>
    </SubjectCardWrapper>
  );
};

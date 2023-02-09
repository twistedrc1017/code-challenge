import { FC, Fragment } from "react";
import {
  SubjectCardWrapper,
  SubjectCardLabel,
  SubjectCardEditButton,
  SubjectCardValue,
} from "./SubjectCard.styled";
import { useSubjectCardContext } from "./SubjectCard.context";

export interface ISubjectCardEditProps {}

export const SubjectCardEdit: FC<ISubjectCardEditProps> = (props) => {
  const { setMode } = useSubjectCardContext();
  return (
    <SubjectCardWrapper>
      <SubjectCardLabel />
      <SubjectCardEditButton
        onClick={() => {
          setMode("Read");
        }}
      >
        Save
      </SubjectCardEditButton>
      <SubjectCardLabel>Course ID</SubjectCardLabel>
      <input />
    </SubjectCardWrapper>
  );
};

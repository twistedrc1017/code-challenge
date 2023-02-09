import { FC } from "react";
import {
  SubjectCardWrapper,
  SubjectCardLabel,
  SubjectCardEditButton,
  SubjectCardInput,
  SubjectCardValue,
} from "./SubjectCard.styled";
import { useSubjectCardContext } from "./SubjectCard.context";
import { useFormBehaviors } from "./hooks/useFormBehaviors";

export interface ISubjectCardEditProps {}

export const SubjectCardEdit: FC<ISubjectCardEditProps> = (props) => {
  const { setMode, data } = useSubjectCardContext();

  const form = useFormBehaviors({ initialState: data! });
  return (
    <SubjectCardWrapper>
      <SubjectCardLabel />
      <SubjectCardEditButton onClick={() => setMode("Read")}>
        Save
      </SubjectCardEditButton>
      <SubjectCardLabel>Course ID</SubjectCardLabel>
      <SubjectCardValue>{data?.course_id}</SubjectCardValue>
      <SubjectCardLabel>Subject</SubjectCardLabel>
      <SubjectCardValue>{data?.subject}</SubjectCardValue>
      <SubjectCardLabel>Score</SubjectCardLabel>
      <SubjectCardInput
        name="score"
        onChange={form.onChange}
        value={form.values.score}
      />
      <SubjectCardLabel>Grade</SubjectCardLabel>
      <SubjectCardInput
        name="grade"
        onChange={form.onChange}
        value={form.values.grade}
      />
      <SubjectCardLabel>Credits</SubjectCardLabel>
      <SubjectCardInput
        name="credits"
        onChange={form.onChange}
        value={form.values.credits}
      />
    </SubjectCardWrapper>
  );
};

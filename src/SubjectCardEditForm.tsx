import { FC } from "react";
import { useSubjectCardContext } from "./SubjectCard.context";
import {
  SubjectCardButton,
  SubjectCardButtonRed,
  SubjectCardInput,
  SubjectCardLabel,
  SubjectCardValue,
  SubjectCardWrapper,
} from "./SubjectCard.styled";
import { SubjectRecord } from "./data";
import { UseFormBehaviors } from "./hooks/useFormBehaviors/useFormBehaviors.types";

export interface ISubjectCardEditFormProps {
  form: UseFormBehaviors<SubjectRecord, undefined>;
  onSave: () => void;
}

export const SubjectCardEditForm: FC<ISubjectCardEditFormProps> = (props) => {
  const { data, setMode } = useSubjectCardContext();
  const { form, onSave } = props;

  return (
    <SubjectCardWrapper>
      <SubjectCardLabel />

      {form.isDisabled ? (
        <SubjectCardButtonRed
          type="submit"
          onClick={() => {
            setMode("Read");
          }}
        >
          Cancel
        </SubjectCardButtonRed>
      ) : (
        <SubjectCardButton
          onClick={onSave}
          disabled={form.isDisabled}
          type="submit"
        >
          Save
        </SubjectCardButton>
      )}

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

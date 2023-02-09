import { FC, Fragment } from "react";
import {
  SubjectCardWrapper,
  SubjectCardLabel,
  SubjectCardButton,
  SubjectCardValue,
} from "./SubjectCard.styled";
import { Flex } from "./components/Flex";
import { useSubjectCardContext } from "./SubjectCard.context";
import { SubjectRecord } from "./data";
import { UseFormBehaviors } from "./hooks/useFormBehaviors/useFormBehaviors.types";

export interface ISubjectCardEditSummaryProps {
  form: UseFormBehaviors<SubjectRecord, undefined>;
}

export const SubjectCardEditSummary: FC<ISubjectCardEditSummaryProps> = (
  props
) => {
  const { data } = useSubjectCardContext();
  const { form } = props;
  return (
    <SubjectCardWrapper>
      <Flex>
        <SubjectCardLabel>Course ID</SubjectCardLabel>
      </Flex>
      <Flex>
        <SubjectCardValue>{data?.course_id}</SubjectCardValue>
      </Flex>

      <Flex>
        <SubjectCardLabel>Subject</SubjectCardLabel>
      </Flex>
      <Flex>
        <SubjectCardValue>{data?.subject}</SubjectCardValue>
      </Flex>

      {data?.score !== form.values.score && (
        <Fragment>
          <Flex>
            <SubjectCardLabel>Score</SubjectCardLabel>
          </Flex>
          <Flex>
            <SubjectCardValue>
              {data?.score} {"→"} {form.values.score}
            </SubjectCardValue>
          </Flex>
        </Fragment>
      )}
      {data?.grade !== form.values.grade && (
        <Fragment>
          <Flex>
            <SubjectCardLabel>Grade</SubjectCardLabel>
          </Flex>
          <Flex>
            <SubjectCardValue>
              {data?.grade} {"→"} {form.values.grade}
            </SubjectCardValue>
          </Flex>
        </Fragment>
      )}
      {data?.credits !== form.values.credits && (
        <Fragment>
          <Flex>
            <SubjectCardLabel>Credits</SubjectCardLabel>
          </Flex>
          <Flex>
            <SubjectCardValue>
              {data?.credits} {"→"} {form.values.credits}
            </SubjectCardValue>
          </Flex>
        </Fragment>
      )}
      <SubjectCardLabel />
      <SubjectCardButton>Confirm Changes</SubjectCardButton>
    </SubjectCardWrapper>
  );
};

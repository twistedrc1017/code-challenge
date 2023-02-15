import { FC } from "react";
import {
  SubjectCardProvider,
  useSubjectCardContext,
} from "./SubjectCard.context";
import { SubjectCardEdit } from "../SubjectCardEdit/SubjectCardEdit";
import { SubjectCardRead } from "../SubjectCardRead/SubjectCardRead";
import { SubjectRecord } from "../../data";

const Component: FC = () => {
  const { mode } = useSubjectCardContext();

  const ActiveComponent = { Read: SubjectCardRead, Edit: SubjectCardEdit }[
    mode
  ];
  return <ActiveComponent />;
};

export interface ISubjectCardProps {
  course_id: SubjectRecord["course_id"];
}

export const SubjectCard: FC<ISubjectCardProps> = ({ course_id }) => {
  return (
    <SubjectCardProvider course_id={course_id}>
      <Component />
    </SubjectCardProvider>
  );
};

import { FC, useState } from "react";
import { useSubjectCardContext } from "./SubjectCard.context";
import { SubjectCardEditForm } from "./SubjectCardEditForm";
import { SubjectCardEditSummary } from "./SubjectCardEditSummary";
import { useFormBehaviors } from "./hooks/useFormBehaviors";

export interface ISubjectCardEditProps {}

export const SubjectCardEdit: FC<ISubjectCardEditProps> = () => {
  const { data } = useSubjectCardContext();

  const form = useFormBehaviors({
    initialState: data!,
    isDirtyCheckEnabled: true,
    type: "EDIT",
  });

  const [isSummaryViewVisible, setSummaryViewVisible] = useState(false);

  if (isSummaryViewVisible) return <SubjectCardEditSummary form={form} />;
  else
    return (
      <SubjectCardEditForm
        form={form}
        onSave={() => {
          setSummaryViewVisible(true);
        }}
      />
    );
};

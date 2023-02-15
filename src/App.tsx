import { FC } from "react";
import "./App.css";
import { AppWrapper, SubjectTitle } from "./App.styled";
import { SubjectList } from "./views/SubjectList/SubjectList";

export const App: FC = () => {
  return (
    <AppWrapper>
      <SubjectTitle>Subjects</SubjectTitle>

      <SubjectList />
    </AppWrapper>
  );
};

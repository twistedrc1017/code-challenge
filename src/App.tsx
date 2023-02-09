import "./App.css";
import { AppWrapper, SubjectTitle } from "./App.styled";
import { SubjectList } from "./SubjectList";

function App() {
  return (
    <AppWrapper>
      <SubjectTitle>Subjects</SubjectTitle>

      <SubjectList />
    </AppWrapper>
  );
}

export default App;

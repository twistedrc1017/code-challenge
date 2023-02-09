import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";
import { SubjectRecord, mockedData } from "./data";

type SubjectCardMode = "Read" | "Edit";

interface ISubjectCardContext {
  data: SubjectRecord | null;
  mode: SubjectCardMode;
  setMode: Dispatch<SetStateAction<SubjectCardMode>>;
}

const initialState = {
  data: null,
  mode: "Read",
};

const SubjectCardContext = createContext<ISubjectCardContext>(
  initialState as ISubjectCardContext
);

export interface ISubjectCardContextProviderProps extends PropsWithChildren {
  course_id: SubjectRecord["course_id"];
}

export const SubjectCardProvider: FC<ISubjectCardContextProviderProps> = (
  props
) => {
  const { children, course_id } = props;

  const record = useMemo(() => {
    return mockedData.filter((data) => {
      return data.course_id === course_id;
    })[0];
  }, [course_id]);

  const [mode, setMode] = useState<SubjectCardMode>("Read");

  return (
    <SubjectCardContext.Provider value={{ data: record, mode, setMode }}>
      {children}
    </SubjectCardContext.Provider>
  );
};

export const useSubjectCardContext = () => useContext(SubjectCardContext);

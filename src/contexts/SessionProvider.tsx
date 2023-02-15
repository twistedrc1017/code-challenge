import { QueryResult } from "@apollo/client";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { QueryWrapper } from "../components/LoadingSwitch/QueryWrapper";
import {
  GET_USER_QUERY,
  IGetUserResponse,
  IUserRecord,
} from "../graphql/mocks/user";

interface ISessionContext {
  loading: boolean;
  isAuthenticated: boolean;
  user?: IGetUserResponse;
}

const initialState: ISessionContext = {
  loading: true,
  isAuthenticated: false,
  user: undefined,
};

const SessionContext = createContext<ISessionContext>(initialState);

const Component: FC<
  QueryResult<IGetUserResponse, { email: IUserRecord["email"] }> &
    PropsWithChildren
> = (props) => {
  const { children, data } = props;

  const [state, setState] =
    useState<Omit<ISessionContext, "user">>(initialState);

  return (
    <SessionContext.Provider value={{ ...state, user: data }}>
      {children}
    </SessionContext.Provider>
  );
};

export const SessionProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryWrapper<IGetUserResponse, { email: IUserRecord["email"] }>
      query={GET_USER_QUERY}
      options={{
        variables: {
          email: "jane_doe@teacher.com",
        },
      }}
      component={Component}
      children={children}
    />
  );
};

export const useSessionContext = () => useContext(SessionContext);

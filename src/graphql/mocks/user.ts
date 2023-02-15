import { gql } from "@apollo/client";
import { MockedResponse } from "@apollo/client/testing";
import { MOCK_API_REQUEST_DURATION } from "./constants";

export interface IUserRecord {
  id: string;
  role: "instructor";
  type: "teacher";
  first_name: string;
  last_name: string;
  email: `${string}@${string}.${string}`;
}

export interface IGetUserResponse {
  user: IUserRecord;
}

const user: IUserRecord = {
  id: "2574df32-ac81-11ed-afa1-0242ac120002",
  role: "instructor",
  type: "teacher",
  first_name: "Jane",
  last_name: "Doe",
  email: "jane_doe@teacher.com",
};

export const GET_USER_QUERY = gql`
  query GetUser($email: string!) {
    user(email: $email) {
      id
      role
      type
      first_name
      last_name
      email
    }
  }
`;

export const userMock: MockedResponse = {
  delay: MOCK_API_REQUEST_DURATION,
  result: {
    data: {
      user,
    },
  },
  request: {
    query: GET_USER_QUERY,
    variables: {
      email: user.email,
    },
  },
};

export function useUserQuery() {}

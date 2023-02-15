import { ApolloProvider as ApolloCTXProvider } from "@apollo/client";
import { FC, PropsWithChildren } from "react";
import { mocks } from "./mocks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { MockLink } from "@apollo/client/testing";

const mockLink = new MockLink(mocks);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: mockLink,
});

export interface IApolloProviderProps extends PropsWithChildren {}

export const ApolloProvider: FC<IApolloProviderProps> = (props) => {
  const { children } = props;
  return (
    <ApolloCTXProvider client={apolloClient}>{children}</ApolloCTXProvider>
  );
};

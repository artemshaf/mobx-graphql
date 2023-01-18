import { ApolloClient, gql } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client/react";
import { CustomApolloProviderProps } from "./CustomApolloProvider.props";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

export const CustomApolloProvider = ({
  children,
}: CustomApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

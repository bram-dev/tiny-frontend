import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from "@apollo/client";
import ExampleTinyFrontend from "../lib";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ExampleTinyFrontend />
    </ApolloProvider>
  )
}

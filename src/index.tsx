import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloProvider } from "./graphql/apollo-client";
import { SessionProvider } from "./contexts/SessionProvider";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ErrorBoundary fallback={<p>error</p>}>
    <Suspense fallback={<p>loading...</p>}>
      <ApolloProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </ApolloProvider>
    </Suspense>
  </ErrorBoundary>
);

reportWebVitals();

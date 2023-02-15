import { useState, useEffect } from "react";
import { apolloClient } from "../graphql/apollo-client";
import { OperationVariables, QueryOptions } from "@apollo/client";

export function useApi<TData, TVariables extends OperationVariables>(
  options: QueryOptions<TVariables, TData>
) {
  const [data, setData] = useState<TData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await apolloClient.query<TData, TVariables>(options);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    throw new Promise((resolve) =>
      setTimeout(() => {
        console.log("here");
        resolve("<div>lol</div>");
      }, 1000)
    );
  }
  return data;
}

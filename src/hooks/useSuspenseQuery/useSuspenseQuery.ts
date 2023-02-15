/* eslint-disable */
// @ts-ignore
// @ts-nocheck
import {
  ApolloQueryResult,
  OperationVariables,
  QueryHookOptions,
  useQuery,
} from "@apollo/client";
import { useEffect, useState } from "react";

export function useSuspenseQuery<
  TData,
  TVariables extends OperationVariables = OperationVariables
>(options: QueryHookOptions<TData, TVariables>): TData {
  const { query, ...restOpts } = options;
  const [data, setData] = useState<TData | null>(null);
  const [promise, setPromise] = useState<Promise<
    ApolloQueryResult<TData>
  > | null>(null);

  useEffect(() => {
    const promise = new Promise<ApolloQueryResult<TData>>((resolve, reject) => {
      useQuery<TData, TVariables>(query, restOpts)
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });

    setPromise(promise);
  }, [options]);

  if (promise) {
    throw promise;
  }

  return data as TData;
}

function wrapPromise<T>(promise: Promise<T>) {
  let status = "pending";
  let result: any;
  let suspender = promise.then(
    (r: any) => {
      status = "success";
      result = r;
    },
    (e: any) => {
      status = "error";
      result = e;
    }
  );
  return {
    read(): T {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

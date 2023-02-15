import {
  DocumentNode,
  OperationVariables,
  QueryHookOptions,
  QueryResult,
  TypedDocumentNode,
  useQuery,
} from "@apollo/client";
import { FC, PropsWithChildren } from "react";

interface Component<TData, TVariables extends OperationVariables>
  extends FC<QueryResult<TData, TVariables> & PropsWithChildren> {}

interface QueryWrapperProps<TData, TVariables extends OperationVariables>
  extends PropsWithChildren {
  query: DocumentNode | TypedDocumentNode<TData, TVariables>;
  options?: QueryHookOptions<TData, TVariables>;
  component: Component<TData, TVariables>;
}

export const QueryWrapper = <TData, TVariables extends OperationVariables>({
  query,
  options,
  component: Component,
  children,
}: QueryWrapperProps<TData, TVariables>) => {
  const { loading, error, data, ...rest } = useQuery<TData, TVariables>(
    query,
    options
  );

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <Component
      loading={loading}
      error={error}
      data={data}
      {...rest}
      children={children}
    />
  );
};

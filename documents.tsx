import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Posts = {
  __typename?: "Posts";
  id: Scalars["Int"];
  name: Scalars["String"];
  type: Scalars["String"];
  description: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  getUsers: Array<Users>;
  getUsersById: Users;
  getPosts: Array<Posts>;
};

export type QueryGetUsersByIdArgs = {
  userId: Scalars["Float"];
};

export type Users = {
  __typename?: "Users";
  id: Scalars["Int"];
  name: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
  posts: Array<Posts>;
};

export type PostDataFragment = {
  __typename?: "Posts";
  id: number;
  name: string;
  type: string;
  description: string;
};

export type UserDataFragment = {
  __typename?: "Users";
  name: string;
  id: number;
  email: string;
  password: string;
  posts: Array<{
    __typename?: "Posts";
    id: number;
    name: string;
    type: string;
    description: string;
  }>;
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  getUsers: Array<{
    __typename?: "Users";
    name: string;
    id: number;
    email: string;
    password: string;
    posts: Array<{
      __typename?: "Posts";
      id: number;
      name: string;
      type: string;
      description: string;
    }>;
  }>;
};

export type UsersByIdQueryVariables = Exact<{
  userId: Scalars["Float"];
}>;

export type UsersByIdQuery = {
  __typename?: "Query";
  getUsersById: {
    __typename?: "Users";
    name: string;
    id: number;
    email: string;
    password: string;
    posts: Array<{
      __typename?: "Posts";
      id: number;
      name: string;
      type: string;
      description: string;
    }>;
  };
};

export type PostsQueryVariables = Exact<{ [key: string]: never }>;

export type PostsQuery = {
  __typename?: "Query";
  getPosts: Array<{
    __typename?: "Posts";
    id: number;
    name: string;
    type: string;
    description: string;
  }>;
};

export const PostDataFragmentDoc = gql`
  fragment PostData on Posts {
    id
    name
    type
    description
  }
`;
export const UserDataFragmentDoc = gql`
  fragment UserData on Users {
    name
    id
    email
    password
    posts {
      ...PostData
    }
  }
  ${PostDataFragmentDoc}
`;
export const UsersDocument = gql`
  query Users {
    getUsers {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const UsersByIdDocument = gql`
  query UsersById($userId: Float!) {
    getUsersById(userId: $userId) {
      ...UserData
    }
  }
  ${UserDataFragmentDoc}
`;

/**
 * __useUsersByIdQuery__
 *
 * To run a query within a React component, call `useUsersByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUsersByIdQuery(
  baseOptions: Apollo.QueryHookOptions<UsersByIdQuery, UsersByIdQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersByIdQuery, UsersByIdQueryVariables>(
    UsersByIdDocument,
    options
  );
}
export function useUsersByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    UsersByIdQuery,
    UsersByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersByIdQuery, UsersByIdQueryVariables>(
    UsersByIdDocument,
    options
  );
}
export type UsersByIdQueryHookResult = ReturnType<typeof useUsersByIdQuery>;
export type UsersByIdLazyQueryHookResult = ReturnType<
  typeof useUsersByIdLazyQuery
>;
export type UsersByIdQueryResult = Apollo.QueryResult<
  UsersByIdQuery,
  UsersByIdQueryVariables
>;
export const PostsDocument = gql`
  query Posts {
    getPosts {
      ...PostData
    }
  }
  ${PostDataFragmentDoc}
`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(
  baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export function usePostsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(
    PostsDocument,
    options
  );
}
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<
  PostsQuery,
  PostsQueryVariables
>;

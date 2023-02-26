import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type CreateMessageInput = {
  applications: Array<Scalars["String"]>;
  content: Scalars["String"];
  published: Scalars["Boolean"];
  startingDate: Scalars["DateTime"];
  title: Scalars["String"];
};

export type Message = {
  __typename?: "Message";
  applications: Array<Scalars["String"]>;
  content: Scalars["String"];
  id: Scalars["String"];
  published: Scalars["Boolean"];
  startingDate: Scalars["DateTime"];
  title: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createMessage?: Maybe<Message>;
  removeMessage?: Maybe<Message>;
  updateMessage: Message;
};

export type MutationCreateMessageArgs = {
  createMessageInput: CreateMessageInput;
};

export type MutationRemoveMessageArgs = {
  id: Scalars["ID"];
};

export type MutationUpdateMessageArgs = {
  id: Scalars["ID"];
  updateMessageInput: UpdateMessageInput;
};

export type Query = {
  __typename?: "Query";
  message?: Maybe<Message>;
  messages?: Maybe<Array<Maybe<Message>>>;
};

export type QueryMessageArgs = {
  id: Scalars["ID"];
};

export type UpdateMessageInput = {
  applications: Array<Scalars["String"]>;
  content: Scalars["String"];
  published: Scalars["Boolean"];
  startingDate: Scalars["DateTime"];
  title: Scalars["String"];
};

export type GetMessagesQueryVariables = Exact<{ [key: string]: never }>;

export type GetMessagesQuery = {
  __typename?: "Query";
  messages?: Array<{
    __typename?: "Message";
    id: string;
    applications: Array<string>;
    title: string;
    content: string;
    published: boolean;
    startingDate: any;
  } | null> | null;
};

export const GetMessagesDocument = gql`
  query GetMessages {
    messages {
      id
      applications
      title
      content
      published
      startingDate
    }
  }
`;
export type GetMessagesQueryResult = Apollo.QueryResult<
  GetMessagesQuery,
  GetMessagesQueryVariables
>;

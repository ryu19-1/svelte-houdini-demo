export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
};


export type MutationAddUserArgs = {
  user: UserInput;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UserInput = {
  name: Scalars['String']['input'];
};


export const mockMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        addUser: overrides && overrides.hasOwnProperty('addUser') ? overrides.addUser! : mockUser(),
    };
};

export const mockQuery = (overrides?: Partial<Query>): Query => {
    return {
        users: overrides && overrides.hasOwnProperty('users') ? overrides.users! : [mockUser()],
    };
};

export const mockUser = (overrides?: Partial<User>): User => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 7269,
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'porro',
    };
};

export const mockUserInput = (overrides?: Partial<UserInput>): UserInput => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'inventore',
    };
};

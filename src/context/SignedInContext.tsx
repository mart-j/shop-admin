import { useQuery } from '@apollo/client';
import React, { Context, createContext, FC, ReactNode } from 'react';
import { ValidateToken, VALIDATE_TOKEN } from '../gql/gql';

type SignedInContextType = {
  loading: boolean;
  isSigned: boolean;
};

export const SignedInContext = (createContext<SignedInContextType | null>(
  null,
) as unknown) as Context<SignedInContextType>;

interface Props {
  children: ReactNode;
}

export const SignedInContextProvider: FC<Props> = ({ children }) => {
  const { data, loading } = useQuery<ValidateToken>(VALIDATE_TOKEN);

  return (
    <SignedInContext.Provider
      value={{
        isSigned: data?.validateUser || false,
        loading,
      }}
    >
      {children}
    </SignedInContext.Provider>
  );
};

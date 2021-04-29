import { gql } from '@apollo/client';

export type ValidateToken = { validateUser: true };

export const VALIDATE_TOKEN = gql`
  query validateUser {
    validateUser
  }
`;

export type LoginType = {
  loginUser: {
    username: string;
    token: string;
  };
};

export const LOGIN = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(options: { username: $username, password: $password }) {
      username
      token
    }
  }
`;

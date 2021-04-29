import React, { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, LoginType, VALIDATE_TOKEN } from '../../gql/gql';
import styles from './Login.module.scss';
import Input from '../../components/common/Input/Input';
import Button from '../../components/common/Button/Button';

const initialLoginValues = {
  username: '',
  password: '',
};

const Login: FC = () => {
  const [loginDetails, setLoginDetails] = useState(initialLoginValues);
  const [loginUser] = useMutation<LoginType>(LOGIN);

  const login = async () => {
    try {
      const userInfo = await loginUser({
        variables: loginDetails,
        update: (store, { data }) => {
          store.writeQuery({
            query: VALIDATE_TOKEN,
            data: {
              validateUser: true,
            },
          });
        },
      });
      if (userInfo.data) {
        localStorage.setItem('token', userInfo.data.loginUser.token);
      }
    } catch (e) {
      console.error(e.message);
    }
    setLoginDetails(initialLoginValues);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await login();
          }}
        >
          <label>username</label>
          <br></br>
          <Input
            value={loginDetails.username}
            onChange={(e) => {
              setLoginDetails({ ...loginDetails, username: e.target.value });
            }}
            required
            type="text"
          />
          <br />
          <br />
          <label>password</label>
          <br></br>
          <Input
            value={loginDetails.password}
            onChange={(e) => {
              setLoginDetails({ ...loginDetails, password: e.target.value });
            }}
            required
            type="password"
          />
          <br />
          <br />
          <Button type="submit">login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

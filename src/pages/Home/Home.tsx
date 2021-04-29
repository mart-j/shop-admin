import React from 'react';
import { client } from '../../api';
import Button from '../../components/common/Button/Button';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          display: 'flex',
          margin: 24,
        }}
      >
        <div style={{ marginRight: 12 }}>Hello</div>
        <Button
          onClick={() => {
            localStorage.token = '';
            client.cache.reset();
          }}
        >
          logout
        </Button>
      </div>
    </div>
  );
};

export default Home;

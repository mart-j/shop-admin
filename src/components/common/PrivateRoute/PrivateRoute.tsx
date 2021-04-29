import React, { FC, ReactNode, useContext } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { SignedInContext } from '../../../context/SignedInContext';

interface Props extends RouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<Props> = ({ exact, children, ...props }) => {
  const { isSigned } = useContext(SignedInContext);

  return (
    <>
      {!isSigned ? (
        <Redirect to="/login" />
      ) : (
        <Route exact={exact} {...props}>
          {children}
        </Route>
      )}
    </>
  );
};

export default PrivateRoute;

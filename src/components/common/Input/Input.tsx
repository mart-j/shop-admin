import React, { FC, ComponentProps } from 'react';
import styles from './Input.module.scss';

interface Props extends ComponentProps<'input'> {}

const Input: FC<Props> = ({ ...props }) => {
  return <input className={styles.input} {...props} />;
};

export default Input;

import React, { FC } from 'react';

export interface IInput {
  name?: string;
  type: string;
  className?: string;
  placeholder?: string;
  onchange?: any;
  required?: boolean;
  id?: string;
}

export const Input: FC<IInput> = ({ required = false, onchange, ...props }) => {
  return <input required={required} onChange={onchange} {...props} />;
};

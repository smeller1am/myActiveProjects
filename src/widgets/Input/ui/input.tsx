import React, { FC } from 'react';

export interface IInput {
  name?: string;
  type: string;
  className?: string;
  placeholder?: string;
  callback?: any;
  required?: boolean;
  id?: string;
}

export const Input: FC<IInput> = ({
  name,
  type,
  className,
  placeholder,
  callback,
  required = false,
  id,
}) => {
  return (
    <input
      required={required}
      name={name}
      type={type}
      id={id}
      className={className}
      placeholder={placeholder}
      onChange={callback}
    />
  );
};

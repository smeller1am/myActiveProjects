import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface Button {
  text: ReactNode;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}
const Button: FC<Button> = ({ text, type = 'primary', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames('dontForget__cards-infoBtn', {
        'dontForget__cards-infoBtn--grey': type === 'secondary',
      })}
    >
      {text}
    </div>
  );
};

export default Button;

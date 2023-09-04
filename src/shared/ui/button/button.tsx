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
      className={classNames('modal__buttons-infoBtn', {
        'modal__buttons-infoBtn--dark': type === 'secondary',
      })}
    >
      {text}
    </div>
  );
};

export default Button;

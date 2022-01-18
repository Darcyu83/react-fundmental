import { NONAME } from 'dns';
import { ReactNode } from 'react';
import './Button.scss';
function Button({
  children,
  size,
  color,
  outline,
  fullWidth,
  ...rest
}: {
  children: ReactNode;
  size: string;
  color: string;
  outline: boolean;
  fullWidth: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={[
        'Button',
        size,
        color,
        `${outline ? 'outline' : ''}`,
        `${fullWidth ? 'fullWidth' : ''}`,
      ].join(' ')}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
  outline: false,
  fullWidth: false,
  onClick: null,
};

import './Button1.scss';

interface IProps {
  btnNm: string;
  size: string;
  color: 'blue' | 'gray' | 'pink';
  outline: boolean;
  fullWidth: boolean;
}
export default function Button1({
  btnNm,
  size,
  color,
  outline,
  fullWidth,
}: IProps) {
  return (
    <button
      className={[
        'button',
        size,
        color,
        `${outline ? 'outline' : ''}`,
        `${fullWidth ? 'fullWidth' : ''}`,
      ].join(' ')}
    >
      {btnNm}
    </button>
  );
}

Button1.defaultProps = {
  btnNm: '버튼명',
  size: `medium`,
  color: 'blue',
  outline: false,
  fullWidth: false,
};

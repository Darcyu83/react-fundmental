import { ReactNode, useState } from 'react';

import styles from './Checkbox.module.css';

import { ImCheckmark, ImCheckmark2 } from 'react-icons/im';
interface Irops {
  children: ReactNode;
  isChecked: boolean;
  onChange: () => void;
}
function Checkbox({ children, isChecked, ...rest }: Irops) {
  return (
    <div className={styles[`checkbox`]}>
      <label>
        <input type="checkbox" checked={isChecked} {...rest} />
        {isChecked ? <ImCheckmark /> : <ImCheckmark2 />}
      </label>
      &nbsp;<span>{children}</span>
    </div>
  );
}

export default Checkbox;

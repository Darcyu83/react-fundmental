import { useState } from 'react';
import Button1 from '../css/Button1';
import Checkbox from '../css/Checkbox';
import './CssHome.scss';

export default function CssHome() {
  const [isChecked, setIsChecked] = useState(false);
  const onChange = () => {
    setIsChecked((curr) => !curr);
  };
  return (
    <>
      <div className="CSS">
        <Checkbox isChecked={isChecked} onChange={onChange}>
          약관에 동의하십니까?{' '}
        </Checkbox>
      </div>
      <div className="CSS">
        <div className="buttons">
          defaultProps
          <br />
          <Button1 btnNm="Large Btn" size="large" />
          <Button1 btnNm="Medium Btn" />
          <Button1 btnNm="Small Btn" size="small" />
        </div>
        <div className="buttons">
          Button color
          <br />
          <Button1 btnNm="Large Btn" size="large" color="pink" />
          <Button1 btnNm="Medium Btn" color="pink" />
          <Button1 btnNm="Small Btn" size="small" color="pink" />
        </div>
        <div className="buttons">
          <Button1 btnNm="Large Btn" size="large" color="gray" />
          <Button1 btnNm="Medium Btn" color="gray" />
          <Button1 btnNm="Small Btn" size="small" color="gray" />
        </div>
        <div className="buttons">
          Button outline
          <br />
          <Button1 btnNm="Large Btn" size="large" outline />
          <Button1 btnNm="Medium Btn" color="gray" outline />
          <Button1 btnNm="Small Btn" size="small" color="pink" outline />
        </div>
        <div className="buttons">
          FullWidth Button
          <br />
          <Button1 btnNm="Large Btn" size="large" outline fullWidth />
          <Button1 btnNm="Medium Btn" color="gray" outline fullWidth />
          <Button1
            btnNm="Small Btn"
            size="small"
            color="pink"
            outline
            fullWidth
          />
        </div>
      </div>
    </>
  );
}

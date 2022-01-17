import { Link } from "react-router-dom";
import styles from "../modules/upperMostMenu.module.css";

function UpperMostMenu() {
  return (
    <div className={styles.navBar}>
      <Link className={styles.link} to="/">
        Home
      </Link>
      <Link className={styles.link} to="/inputs">
        Input values Control
      </Link>
      <Link className={styles.link} to="/useinputs">
        useInputs
      </Link>
      <Link className={styles.link} to="/renderarr">
        User List
      </Link>
      <Link className={styles.link} to="/userlistreducer">
        User List w/useReducer
      </Link>
      <Link className={styles.link} to="/checkbox">
        Checkbox Control
      </Link>
      <Link className={styles.link} to="/counter">
        Counter w/useReducer
      </Link>
    </div>
  );
}
export default UpperMostMenu;

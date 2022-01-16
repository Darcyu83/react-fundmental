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
      <Link className={styles.link} to="/renderarr">
        Render data in an array
      </Link>
      <Link className={styles.link} to="/checkbox">
        Checkbox Control
      </Link>
    </div>
  );
}
export default UpperMostMenu;

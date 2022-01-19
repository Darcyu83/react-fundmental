import { useMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../modules/upperMostMenu.module.css';

function UpperMostMenu() {
  const homeMatched = useMatch('/');
  const inputCtrlMatched = useMatch('/inputs');
  const hookMatched = useMatch('/useinputs');
  const userlistMatched = useMatch('/userlist');
  const userlistRdcMatched = useMatch('/userlistreducer');
  const checkboxMatched = useMatch('/checkbox');
  const conterMatched = useMatch('/counter');
  const todoMatched = useMatch('/todolist');
  const cssMatched = useMatch('/css');
  const reduxMatched = useMatch('/redux');

  return (
    <div className={styles.navBar}>
      <Link
        className={`${
          homeMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`${
          inputCtrlMatched
            ? `${styles.link} ${styles.active}`
            : `${styles.link}`
        }
        `}
        to="/inputs"
      >
        Input values Control
      </Link>
      <Link
        className={`${
          hookMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/useinputs"
      >
        useInputs Hook customized
      </Link>
      <Link
        className={`${
          userlistMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/userlist"
      >
        User List
      </Link>
      <Link
        className={`${
          userlistRdcMatched
            ? `${styles.link} ${styles.active}`
            : `${styles.link}`
        }
        `}
        to="/userlistreducer"
      >
        User List w/useReducer
      </Link>
      <Link
        className={`${
          checkboxMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/checkbox"
      >
        Checkbox Control
      </Link>
      <Link
        className={`${
          conterMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/counter"
      >
        Counter w/useReducer
      </Link>
      <Link
        className={`${
          todoMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/todolist"
      >
        Todo List w/Context API
      </Link>
      <Link
        className={`${
          cssMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/css"
      >
        CSS Study
      </Link>
      <Link
        className={`${
          reduxMatched ? `${styles.link} ${styles.active}` : `${styles.link}`
        }
        `}
        to="/redux"
      >
        Redux Study
      </Link>
    </div>
  );
}
export default UpperMostMenu;

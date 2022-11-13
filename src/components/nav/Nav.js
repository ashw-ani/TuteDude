import styles from "./Nav.module.css";
import Link from "../links/Link";
import Profile from "../profile/Profile";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link class={styles.navitem}>My Assignment</Link>
      <Link class={styles.navitem}>Chat with Mentor</Link>
      <Profile></Profile>
    </div>
  );
};
export default Nav;

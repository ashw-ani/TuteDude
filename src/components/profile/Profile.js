import styles from "./Profile.module.css";
import Link from "../links/Link";
import arrow from "../assets/arrow-down.png";
import accountcircle from "../assets/account-circle.png";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img src={accountcircle} alt="" className={styles.accountcircle}></img>
      <Link class={styles.mobile}>ProfileName</Link>
      <img src={arrow} alt="" className={styles.arrow}></img>
    </div>
  );
};
export default Profile;

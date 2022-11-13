import styles from "./Logo.module.css";
import logo from "..//assets/image 1.png";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt=""></img>
    </div>
  );
};
export default Logo;

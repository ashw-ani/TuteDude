import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <div className={styles.Header}>
      <Navbar />
    </div>
  );
};
export default Header;

import styles from "./Navbar.module.css";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo></Logo>
      <Nav></Nav>
    </div>
  );
};
export default Navbar;

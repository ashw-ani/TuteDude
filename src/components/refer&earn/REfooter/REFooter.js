import styles from "./REFooter.module.css";
import Link from "../../links/Link";
import TermsAndConditions from "../../termsandconditions/TermsAndConditions";

const REFooter = (props) => {
  return (
    <div className={styles.footer}>
      <Link
        onclick={props.referredWindowOpenHandler}
        style={{ color: "#800080", textAlign: "left" }}
      >
        Friends Who Enrolled
      </Link>
      <TermsAndConditions style={{ bottom: "0px" }} />
    </div>
  );
};
export default REFooter;

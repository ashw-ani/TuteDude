import Link from "../links/Link";
import styles from "./ReferralContainer.module.css";

const ReferralContainer = (props) => {
  return (
    <div className={styles.referralcontainer} style={props.position}>
      <p className={styles.referraltitle} style={props.titlestyle}>
        Your Referral Code
      </p>
      <div className={styles.codecontainer} style={props.containerstyle}>
        <p className={styles.code} style={props.codestyle}>
          {props.code}
        </p>
      </div>
    </div>
  );
};
export default ReferralContainer;

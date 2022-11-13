import styles from "./ReferralCard.module.css";
import CardCourseElement from "../cardcourses/CardCourseElement";

const ReferralCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardheader}>
        <p className={styles.cardholder}>{props.name}</p>
        <p className={styles.carddate}>{props.date}</p>
      </div>

      <div className={styles.cardbody}>
        <div className={styles.title}> Courses Enrolled </div>
        <div className={styles.coursecontainer}>{props.children}</div>
      </div>

      <div className={styles.cardfooter}>
        <p className={styles.footertext}>Referral Amount</p>
        <p className={styles.referralamount}>&#x20B9;{props.referralamount}</p>
      </div>
    </div>
  );
};
export default ReferralCard;

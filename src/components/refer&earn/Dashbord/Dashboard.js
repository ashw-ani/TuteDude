import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardcomponent}>
        <p className={styles.dashboardcomponenttitle}>Referral Earning</p>
        <p className={styles.componenttext}>&#8377; {props.totalearning}</p>
      </div>
      <div className={styles.dashboardcomponent}>
        <p className={styles.dashboardcomponenttitle}>Total Referrals</p>
        <p className={styles.componenttext}>{props.Totalreferrals}</p>
      </div>
      <div className={styles.dashboardcomponent}>
        <p className={styles.dashboardcomponenttitle}>Wallet Balance</p>
        <p className={styles.componenttext}>&#8377; {props.walletbalance}</p>
      </div>
      <div className={styles.dashboardbutton}>Withdraw Balance </div>
    </div>
  );
};
export default Dashboard;

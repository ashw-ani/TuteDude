import styles from "./Refer&Earn.module.css";
import REFooter from "./REfooter/REFooter";
import REDetails from "./REDetails/REDetails";
import Dashboard from "./Dashbord/Dashboard";
import ReferralContainer from "../referral-code-container/ReferralContainer";

const ReferAndEarn = (props) => {
  return (
    <div className={styles.bodycontainer}>
      <div className={styles.main}>
        <Dashboard
          totalearning={"2,500"}
          Totalreferrals={"7"}
          walletbalance={"500"}
        ></Dashboard>
        <ReferralContainer
          position={{ position: "relative" }}
          titlestyle={{ fontSize: "24px" }}
          containerstyle={{ border: "3px solid #dfdfdf" }}
          codestyle={{
            alignSelf: "center",
            fontSize: "20px",
            color: "#800080",
          }}
          code={"EDCH54"}
        ></ReferralContainer>
      </div>
      <REDetails />
      <REFooter
        referredWindowOpenHandler={props.referredWindowOpenHandler}
        referredWindowStatus={props.referredWindowStatus}
      ></REFooter>
    </div>
  );
};

export default ReferAndEarn;

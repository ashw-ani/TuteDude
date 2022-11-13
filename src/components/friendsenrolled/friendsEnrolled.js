import styles from "./friendsEnrolled.module.css";
import ReferralContainer from "../referral-code-container/ReferralContainer";
import Wallet from "../wallet/Wallet";
import ReferredContainer from "../referredcontainer/ReferredContainer";
import GoBack from "../goback/goBack";

const FriendsEnrolled = (props) => {
  return (
    <div className={styles.friendsenrolled}>
      <GoBack
        referredWindowStatus={props.referredWindowStatus}
        referredWindowCloseHandler={props.referredWindowCloseHandler}
      ></GoBack>
      <ReferralContainer code={"EDCH54"}></ReferralContainer>
      <Wallet></Wallet>
      <ReferredContainer></ReferredContainer>
    </div>
  );
};

export default FriendsEnrolled;

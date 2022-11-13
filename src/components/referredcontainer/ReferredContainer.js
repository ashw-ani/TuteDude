import styles from "./ReferredContainer.module.css";
import RCContainer from "../referredcardcontainer/RCContainer";
import TermsAndConditions from "../termsandconditions/TermsAndConditions";

const ReferredContainer = () => {
  return (
    <div className={styles.referredcontainer}>
      <p className={styles.referredcontainertitle}>Friends who enrolled(3)</p>
      <RCContainer></RCContainer>
      <TermsAndConditions class={styles.position}></TermsAndConditions>
    </div>
  );
};
export default ReferredContainer;

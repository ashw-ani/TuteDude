import styles from "./TermsAndConditions.module.css";

const TermsAndConditions = (props) => {
  return (
    <div
      className={`${styles.termsandconditions} ${props.class}`}
      style={props.style}
    >
      Terms & Conditions
    </div>
  );
};
export default TermsAndConditions;

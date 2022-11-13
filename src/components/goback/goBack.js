import styles from "./goBack.module.css";

const GoBack = (props) => {
  return (
    <div className={styles.goback} onClick={props.referredWindowCloseHandler}>
      <p className={styles.gobackarrow}>&#x279C;</p>
      &nbsp;
      <p className={styles.gobacktext}>go back</p>
    </div>
  );
};
export default GoBack;

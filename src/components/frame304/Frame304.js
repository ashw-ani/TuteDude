import styles from "./Frame304.module.css";
import Path from "../Path/Path";

const Frame304 = (props) => {
  return (
    <div className={styles.frame304}>
      <Path
        referredWindowStatus={props.referredWindowStatus}
        referredWindowCloseHandler={props.referredWindowCloseHandler}
      ></Path>
    </div>
  );
};
export default Frame304;

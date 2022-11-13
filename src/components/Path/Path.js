import styles from "./Path.module.css";
import Link from "../links/Link";

const Path = (props) => {
  return (
    <div className={styles.path}>
      <Link style={{ color: "black", fontSize: "14px", fontWeight: "400" }}>
        UI/UX
      </Link>
      &gt;
      {props.referredWindowStatus ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link
            style={{ color: "black", fontSize: "14px", fontWeight: "400" }}
            onclick={props.referredWindowCloseHandler}
          >
            Refer & Earn
          </Link>
          &nbsp; &gt; &nbsp;
          <Link style={{ color: "black", fontSize: "14px", fontWeight: "400" }}>
            Friends Referred
          </Link>
        </div>
      ) : (
        <Link
          style={{ color: "black", fontSize: "14px", fontWeight: "400" }}
          onclick={props.referredWindowCloseHandler}
        >
          Refer & Earn
        </Link>
      )}
    </div>
  );
};
export default Path;

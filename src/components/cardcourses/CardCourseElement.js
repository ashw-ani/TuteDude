import styles from "./CardCourseElement.module.css";

const CardCourseElement = (props) => {
  return <div className={styles.courseelement}>{props.coursename}</div>;
};
export default CardCourseElement;

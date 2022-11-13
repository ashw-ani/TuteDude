import styles from "./Link.module.css";
const Link = (props) => {
  return (
    <div
      className={`${styles.link} ${props.class}`}
      style={props.style}
      onClick={props.onclick}
    >
      {props.children}
    </div>
  );
};
export default Link;

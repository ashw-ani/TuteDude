import styles from "./DetailCard.module.css";

const DetailCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardicon}>
        <img className={styles.icon} src={props.iconurl} alt=""></img>
      </div>
      <div className={styles.cardtext}>
        <p className={styles.cardtitle}> {props.cardtitle}</p>
        <p className={styles.carddescription}> {props.carddescription}</p>
      </div>
    </div>
  );
};
export default DetailCard;

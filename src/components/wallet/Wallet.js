import styles from "./Wallet.module.css";

const Wallet = () => {
  return (
    <div className={styles.wallet}>
      <p className={styles.wallettitle}>Wallet Balance</p>
      <p className={styles.walletamount}>&#8377; 500</p>
      {/*amount can be rendered dynamically*/}
    </div>
  );
};
export default Wallet;

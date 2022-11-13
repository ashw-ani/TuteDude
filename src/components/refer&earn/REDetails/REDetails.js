import styles from "./REDetails.module.css";
import DetailCard from "./detailcard/DetailCard";
import inr from "../../assets/inr.svg";
import offer from "../../assets/offer.svg";
import people from "../../assets/people.svg";
import tag from "../../assets/tag.svg";
import wallet from "../../assets/wallet.svg";

const REDetails = () => {
  return (
    <div className={styles.details}>
      <p className={styles.title}>How does it work ?</p>
      <div className={styles.cardwrapper}>
        <DetailCard
          iconurl={people}
          cardtitle="Invite your Friends"
          carddescription="Share the link tutedude.com with
                your friends"
        />
        <DetailCard
          iconurl={tag}
          cardtitle="Friend purchases any course"
          carddescription="Using your REFERRAL CODE in the payments page"
        />
        <DetailCard
          iconurl={inr}
          cardtitle="You get ₹ 200 as referral money"
          carddescription="On total purchase the friend makes, into your wallet"
        />
        <DetailCard
          iconurl={offer}
          cardtitle="Your Friend gets ₹ 200 Off "
          carddescription="On his overall fee on successful purchase using your referral code "
        />
        <DetailCard
          iconurl={wallet}
          cardtitle="Transfer money from wallet"
          carddescription="When the wallet balance reaches
          ₹200 or more, you can withdraw it"
        />
      </div>
    </div>
  );
};

export default REDetails;

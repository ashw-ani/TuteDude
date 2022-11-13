import styles from "./App.module.css";
import Header from "./components/header/Header";
import Frame304 from "./components/frame304/Frame304";
import FriendsEnrolled from "./components/friendsenrolled/friendsEnrolled";
import ReferAndEarn from "./components/refer&earn/Refer&Earn";
import { useState } from "react";

function App() {
  const [referredWindowStatus, setRefferedWindowStatus] = useState(false);

  const referredWindowOpenHandler = () => {
    setRefferedWindowStatus(true);
    window.scrollTo(0, 0);
  };
  const referredWindowCloseHandler = () => {
    setRefferedWindowStatus(false);
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.referEarn}>
      <Header></Header>
      <Frame304
        referredWindowStatus={referredWindowStatus}
        referredWindowCloseHandler={referredWindowCloseHandler}
      ></Frame304>
      {referredWindowStatus ? (
        <FriendsEnrolled
          referredWindowStatus={referredWindowStatus}
          referredWindowCloseHandler={referredWindowCloseHandler}
        />
      ) : (
        <ReferAndEarn
          referredWindowOpenHandler={referredWindowOpenHandler}
          referredWindowStatus={referredWindowStatus}
        />
      )}
    </div>
  );
}

export default App;

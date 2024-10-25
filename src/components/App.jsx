import Profile from './Main/Profile/Profile.jsx';
import FriendList from './Main/FriendList/FriendList.jsx';
// import styles from './App.module.css';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
// import clsx from "clsx";
import userData from "../userData.json";
import friends from "../friends.json";

function App() {

  return (
    <>
      <Header />
         <Profile  name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      <FriendList friends={friends}/>
      <Footer />
    </>
  );
};

export default App;

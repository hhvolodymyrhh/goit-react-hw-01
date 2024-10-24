import Profile from './Main/Profile/Profile.jsx';
// import styles from './App.module.css';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
import clsx from "clsx";
import userData from "../userData.json"

function App() {

  return (
    <>
      <Header className={clsx("add", "bdd")} />
         <Profile  name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      <Footer />
    </>
  );
};

export default App;

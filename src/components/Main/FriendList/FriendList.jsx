import styles from "./FriendList.module.css";
//використання className={clsx(styles.container, styles.container, "vaa")}
// import clsx from "clsx";

const FriendListItem = ({ friend: { avatar, name = "Friend name", isOnline } }) => {

  return (
    <div className = {styles.item_friends}>
  <img src = {avatar} alt = {name} width="48" className = {styles.img_friends}/>
  <p className = {styles.p_friends}>{name}</p>
  <p className = {isOnline ? styles.online : styles.offline}>Friend {isOnline ? "Online" : "Offline"}</p>
  </div>
  );
};

const FriendList = ({ friends }) => {

  return (
    <ul className={styles.wrap_friends}>
      {friends.map((friend) => {
        return (<li key = {friend.id}>
        <FriendListItem friend = {friend} />
        </li>
        )
      })
      }
  </ul>
  );
};

export default FriendList;

// const FriendListItem = ({ friends }) => {

//   return (
//     friends.map(({ avatar, name = "Friend name", isOnline, id }) => {
//      return (<div key = {id} className = {styles.item_friends}>
//   <img src = {avatar} alt = {name} width="48" className = {styles.img_friends}/>
//   <p className = {styles.p_friends}>{name}</p>
//   <p className = {isOnline ? styles.online : styles.offline}>Friend {isOnline ? "Online" : "Offline"}</p>
//   </div>)
//     })
//   );
// };

// const FriendList = ({ friends }) => {

//   return (
//   <ul className = {styles.wrap_friends}>
// 		<FriendListItem friends = {friends} />
//   </ul>
//   );
// };
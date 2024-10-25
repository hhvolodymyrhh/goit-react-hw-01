import styles from "./Profile.module.css";
//використання className={clsx("add", "vaa")}
import clsx from "clsx";


const Profile = (props) => {
  let { name, tag, location, image, stats } = props;

  return (
    <div className={clsx(styles.container, styles.container)}>
  <div className={styles.wrap_img}>
        <img
          className={styles.img_avatar}
      src = {image}
      alt = "User avatar"
    />
    <p className={styles.title_name}>{name}</p>
    <p className={styles.title_text}>@{tag}</p>
    <p className={styles.title_text}>{location}</p>
  </div>

    <ul className={styles.wrap_param}>
        { Object.entries(stats).map(([key, value], index) => (
          <li key={index} className={styles.item_param}>
              <span className={styles.item_span}>{key} </span>
            <span className={styles.item_span}>{value}</span>
          </li>
          ))
        }
  </ul>
</div>
  );
};

export default Profile;
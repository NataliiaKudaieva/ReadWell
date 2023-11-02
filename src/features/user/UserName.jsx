/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";

import styles from "./UserName.module.css";
import IconBookStore from "../../ui/Typography/IconBookStore";

export default function Username() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className={styles.username_container}>
      <IconBookStore />
      <span className={styles.username}>Welcome back, {username}</span>
    </div>
  );
}

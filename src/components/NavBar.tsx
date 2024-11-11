import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

interface NavBarProps {
  page?: string;
}

export default function NavBar({ page }: NavBarProps) {
  return (
    <>
      <h1 className={styles.heading}>{page}</h1>
      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles["active-link"]}` : styles.link
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/userprofiles"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles["active-link"]}` : styles.link
          }
        >
          Profiles
        </NavLink>
        <NavLink
          to="/useractivities"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles["active-link"]}` : styles.link
          }
        >
          Activities
        </NavLink>
      </div>
    </>
  );
}

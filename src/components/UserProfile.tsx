import { useNavigate } from "react-router-dom";
import styles from "./Profiles.module.css";
interface UserProps {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
  phone: string;
}

export default function User({
  id: userId,
  name,
  email,
  username,
  website,
  phone,
}: UserProps) {
  const navigate = useNavigate();
  return (
    <div className={styles["user-profile"]}>
      <div className={styles["user-profile-content"]}>
        <h2>{name}</h2>
        <h4>ID: {userId}</h4>
        <h4>Username: {username}</h4>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <p>Phone: {phone}</p>
        <button
          className={styles.activitiesBtn}
          onClick={() => navigate(`/userprofiles/${userId}`)}
        >
          activities
        </button>
      </div>
    </div>
  );
}
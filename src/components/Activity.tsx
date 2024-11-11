import styles from "./Activities.module.css";

interface ActivityProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Activity({ title, body }: ActivityProps) {
  return (
    <div className={styles["user-activities"]}>
      <h2>{title}</h2>
      <h4>{body}</h4>
    </div>
  );
}

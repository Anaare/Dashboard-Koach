import { useNavigate, useParams } from "react-router-dom";
import useActivities from "../customHooks/useActivities";
import useUserProfiles from "../customHooks/useUserProfile";
import Activity from "./Activity";
import styles from "./UserInfo.module.css";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: object;
  phone: string;
  website: string;
  company: object;
};

type Activity = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function UserInfo() {
  const { activities, isLoadingActivities, errorActivities } = useActivities<
    Activity[]
  >("https://jsonplaceholder.typicode.com/posts");
  const { userProfiles, isLoadingUserProfiles, errorUserProfiles } =
    useUserProfiles<User[]>("https://jsonplaceholder.typicode.com/users");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const userId = Number(id);

  if (isLoadingActivities || isLoadingUserProfiles) return <p>Loading...</p>;
  if (errorActivities)
    return <p>Error loading activities: {errorActivities}</p>;
  if (errorUserProfiles)
    return <p>Error loading user profiles: {errorUserProfiles}</p>;

  const userProfile = userProfiles?.find((user) => user.id === userId);

  const userActivities =
    activities?.filter((activity) => activity.userId === userId) || [];

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.nav}>
          <div className={styles.profileInfo}>
            {userProfile ? (
              <div>
                <h2>{userProfile.name}</h2>
                <p>ID: {userProfile.id}</p>
                <p>Username: {userProfile.username}</p>
              </div>
            ) : (
              <p>User not found</p>
            )}
          </div>
          <button onClick={() => navigate(-1)}>Go Back</button>
        </div>

        <h3>Activities:</h3>
        <div className={styles.activities}>
          {userActivities.length > 0 ? (
            userActivities.map((activity) => (
              <Activity key={activity.id} {...activity} />
            ))
          ) : (
            <p>No activities found for this user.</p>
          )}
        </div>
      </div>
    </div>
  );
}

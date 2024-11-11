import useActivities from "../customHooks/useActivities";
import Activity from "./Activity";
import NavBar from "./NavBar";
import activityStyles from "./Activities.module.css";
import navStyles from "./NavBar.module.css";

type Activity = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function UserActivities() {
  const { activities, isLoadingActivities, errorActivities } = useActivities<
    Activity[]
  >("https://jsonplaceholder.typicode.com/posts");

  if (isLoadingActivities) return <div className={activityStyles.loader}></div>;
  if (errorActivities) return <p>errorActivities: {errorActivities}</p>;
  return (
    <div className={activityStyles.container}>
      <div className={navStyles.nav}>
        <NavBar page="User Activities" />
      </div>
      <div className={activityStyles["activities-container"]}>
        {activities &&
          activities.map((activity: Activity) => (
            <Activity
              userId={activity.userId}
              id={activity.id}
              body={activity.body}
              title={activity.title}
            />
          ))}
      </div>
    </div>
  );
}

import useUserProfiles from "../customHooks/useUserProfile";
import UserProfile from "./UserProfile";
import NavBar from "./NavBar";
import profileStyles from "./Profiles.module.css";
import navStyles from "./NavBar.module.css";

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

export default function UserProfiles() {
  const { userProfiles, isLoadingUserProfiles, errorUserProfiles } =
    useUserProfiles<User[]>("https://jsonplaceholder.typicode.com/users");

  if (isLoadingUserProfiles)
    return <div className={profileStyles.loader}></div>;
  if (errorUserProfiles) return <p>Error: {errorUserProfiles}</p>;
  return (
    <div className={profileStyles.container}>
      <div className={navStyles.nav}>
        <NavBar page="User Profiles" />
      </div>

      <div className={profileStyles["user-container"]}>
        {userProfiles &&
          userProfiles.map((user: User) => (
            <UserProfile
              id={user.id}
              email={user.email}
              name={user.name}
              username={user.username}
              phone={user.phone}
              website={user.website}
            />
          ))}
      </div>
    </div>
  );
}

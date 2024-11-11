import { useState, useEffect } from "react";

type FetchState<T> = {
  userProfiles: T | null;
  errorUserProfiles: string | null;
  isLoadingUserProfiles: boolean;
};

export default function useUserProfiles<T>(url: string): FetchState<T> {
  const [userProfiles, setUserProfiles] = useState<T | null>(null);
  const [errorUserProfiles, setErrorUserProfiles] = useState<string | null>(
    null
  );
  const [isLoadingUserProfiles, setIsLoadingUserProfiles] =
    useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingUserProfiles(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setUserProfiles(result);
      } catch (err) {
        setErrorUserProfiles((err as Error).message);
      } finally {
        setIsLoadingUserProfiles(false);
      }
    };

    fetchData();
  }, [url]);

  return { userProfiles, isLoadingUserProfiles, errorUserProfiles };
}

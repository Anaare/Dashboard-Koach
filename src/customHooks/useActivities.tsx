import { useState, useEffect } from "react";

type FetchState<T> = {
  activities: T | null;
  errorActivities: string | null;
  isLoadingActivities: boolean;
};

export default function useActivities<T>(url: string): FetchState<T> {
  const [activities, setActivities] = useState<T | null>(null);
  const [errorActivities, setErrorActivities] = useState<string | null>(null);
  const [isLoadingActivities, setIsLoadingActivities] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoadingActivities(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const result = await response.json();
        setActivities(result);
      } catch (err) {
        setErrorActivities((err as Error).message);
      } finally {
        setIsLoadingActivities(false);
      }
    };

    fetchData();
  }, [url]);

  return { activities, isLoadingActivities, errorActivities };
}

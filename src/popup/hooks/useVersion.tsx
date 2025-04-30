import { MESSAGE_TYPES } from "@/shared";
import { useEffect, useState } from "react";
import { sendMessage } from "../utils/chromeAPI";
import { ResponseType } from "@/background/background";

export function useVersion(): {
  version: string,
  loading: boolean,
  error: string | null
} {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState<string>("X.Y.Z");

  useEffect(() => {
    const fetchVersion: () => void = async () => {
      try {
        const response: ResponseType = await sendMessage({ type: MESSAGE_TYPES.GET_VERSION });
        if (response?.type === "success") {
          setVersion(response.data.version)
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.log("Error Message:", error.message);
          setError(error.message)
        }
        else {
          console.log("Unknown Error Occured:", error);
          setError("An unknown error occured.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVersion();
  }, []);

  return { version, loading, error };
}

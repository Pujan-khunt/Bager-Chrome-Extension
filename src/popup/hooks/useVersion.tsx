import { MESSAGE_TYPES } from "@/shared";
import { useEffect, useState } from "react";

export function useVersion(): string {
  const [version, setVersion] = useState("X.Y.Z");

  useEffect(() => {
    const fetchVersion = () => {
      chrome.runtime.sendMessage({
        type: MESSAGE_TYPES.GET_VERSION
      }, (response) => {
        console.log("response:", response);
        if (response?.data?.version) {
          setVersion(response.data.version);
        }
      });
    };
    console.log("Version after sending message:", version);

    fetchVersion();
  }, []);

  return version;
}

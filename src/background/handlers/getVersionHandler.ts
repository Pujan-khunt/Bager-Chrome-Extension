import { ResponseType } from "@/shared/messages";

export const getVersionHandler: () => Promise<ResponseType> = async () => {
  try {
    const response = chrome.runtime.getManifest();
    const versionResponse: ResponseType = {
      type: "version",
      data: {
        version: response.version
      }
    }

    return versionResponse;
  } catch (error: unknown) {
    console.error("Unexpected Error from getVersionHandler", error);

    const errorResponse: ResponseType = {
      type: "error",
      error: "Unexpected Error from getVersionHandler"
    }

    return errorResponse;
  }
}


import { MessageType, ResponseType } from "@/shared/messages";

const isDevelopmentServer: boolean = !chrome.runtime?.id;

export function sendMessage(message: MessageType): Promise<ResponseType> {
  if (isDevelopmentServer) {
    return Promise.resolve({ type: "mock" });
  }
  else {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, (response: ResponseType) => {
        const lastError = chrome.runtime.lastError;

        // Issue regarding message channel with onmessage event listener callback.
        // Probably forgot to return true to keep the message channel active.
        if (lastError) {
          reject(new Error(`Chrome runtime error: ${lastError.message} 😡`));
          return;
        }

        if (!response) {
          reject(new Error("No Response Recieved From Background Script 🥲"));
        }

        if (response.type === "error") {
          reject(new Error(response.error));
        }

        resolve(response);
      });
    });
  }
}

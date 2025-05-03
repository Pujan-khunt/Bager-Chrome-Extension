import {
  MessageResponseMap,
  MessageType,
} from "@/shared/messages";
import { mockResponses } from "./mockData";

const isDevelopmentServer: boolean = location?.protocol?.startsWith("http") || location?.hostname === "localhost";

// Helper to extract message type
type ExtractMessageType<T extends MessageType> = T["type"];

// Function implementation
export function sendMessage<T extends MessageType>(
  message: T
): Promise<MessageResponseMap[ExtractMessageType<T>]> {
  if (isDevelopmentServer) {
    return Promise.resolve(
      mockResponses[message.type] as MessageResponseMap[ExtractMessageType<T>]
    );
  } else {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        message,
        (response: MessageResponseMap[ExtractMessageType<T>]) => {
          const lastError = chrome.runtime.lastError;

          if (lastError) {
            reject(new Error(`Chrome runtime error: ${lastError.message} 😡`));
            return;
          }

          if (!response) {
            reject(new Error("No Response Received From Background Script 🥲"));
            return;
          }

          if ((response as any).type === "error") {
            reject(new Error((response as any).error));
            return;
          }

          resolve(response);
        }
      );
    });
  }
}

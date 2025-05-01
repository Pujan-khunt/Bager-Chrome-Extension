import { MESSAGE_TYPES, MessageType, ResponseType } from "@/shared/messages";
import { getVersionHandler } from "./handlers/getVersionHandler";
import { getBookmarkTreeHandler } from "./handlers/getBookmarkTreeHandler";

const handlers: Record<MESSAGE_TYPES, () => Promise<ResponseType>> = {
  [MESSAGE_TYPES.GET_BOOKMARK_TREE]: getBookmarkTreeHandler,
  [MESSAGE_TYPES.GET_VERSION]: getVersionHandler,
}

chrome.runtime.onMessage.addListener((message: MessageType, _sender: chrome.runtime.MessageSender, sendResponse: (response: ResponseType) => void) => {
  const executeAppropriateHandler = async () => {
    try {
      const appropriateHandler = handlers[message.type];
      if (!appropriateHandler) {
        throw new Error(`Invalid Messsage Type. No Handler Defined For The Message Type: ${message.type}`);
      }

      const response = await appropriateHandler();
      sendResponse(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("onMessage handler error", error.message);
        sendResponse({
          type: "error",
          error: error.message
        })
      } else {
        console.error("Unexpected Error from onMessage handler", error);
        sendResponse({
          type: "error",
          error: "Default Error Response. Unexpected Error in onMessage Handler"
        })
      }
    }
  };
  executeAppropriateHandler();

  // Keep it outside of executeAppropriateHandler
  // Because true needs to be returned instantly so 
  // Chrome can keep message channel open.
  return true;
});



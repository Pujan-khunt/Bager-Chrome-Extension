import { MESSAGE_TYPES } from "@/shared";

export type MessageType =
  | { type: MESSAGE_TYPES.GET_VERSION };

type VersionResponse = {
  type: "success",
  data: {
    version: string
  }
}

export type ErrorResponse = {
  type: "error",
  error: string
}

export type ResponseType =
  | VersionResponse
  | ErrorResponse

chrome.runtime.onMessage.addListener((message: MessageType, sender: chrome.runtime.MessageSender, sendResponse: (response: ResponseType) => void) => {
  console.log("Sender Information:", sender);
  console.log("Message Recieved by Background:", message);

  switch (message.type) {
    case MESSAGE_TYPES.GET_VERSION:
      return getVersion(sendResponse);
    default:
      return handleDefault(message, sendResponse);
  };
});

// Synchronously fetching the version from the manifest and sending response to message sender.
// NOTE: true is returned even though sendResponse is called Synchronously is because we dont want chrome to 
// immediately close the message channel. This might sound counter-intuitive, but it works.
function getVersion(sendResponse: (response: ResponseType) => void): boolean {
  const manifest = chrome.runtime.getManifest();
  sendResponse({
    type: "success",
    data: {
      version: manifest.version
    }
  });
  return true;
}

function handleDefault(message: MessageType, sendResponse: (response: ResponseType) => void) {
  sendResponse({
    type: "error",
    error: `Invalid Message Type. No Handler Defined For The Message Type: ${message.type}`
  });
}

import { MESSAGE_TYPES } from "@/shared";

export type MessageType =
  | { type: MESSAGE_TYPES.GET_VERSION }
  | { type: MESSAGE_TYPES.GET_BOOKMARK_TREE };

type VersionResponse = {
  type: "version",
  data: {
    version: string
  }
}

export type ErrorResponse = {
  type: "error",
  error: string
}

type MockResponse = {
  type: "mock"
}

type BookmarkTreeResponse = {
  type: "bookmark-tree",
  data: {
    tree: chrome.bookmarks.BookmarkTreeNode[]
  }
}

export type ResponseType =
  | VersionResponse
  | ErrorResponse
  | MockResponse
  | BookmarkTreeResponse

chrome.runtime.onMessage.addListener((message: MessageType, _sender: chrome.runtime.MessageSender, sendResponse: (response: ResponseType) => void) => {
  console.log("Message Recieved by Background:", message);

  switch (message.type) {
    case MESSAGE_TYPES.GET_VERSION:
      return getVersion(sendResponse);
    case MESSAGE_TYPES.GET_BOOKMARK_TREE:
      return getBookmarkTree(sendResponse);
    default:
      return handleDefault(message, sendResponse);
  };
});

// Synchronously fetching the version from the manifest and sending response to message sender.
// true is returned even though sendResponse is called Synchronously is because we dont want chrome to 
// immediately close the message channel. This might sound counter-intuitive, but it works.
function getVersion(sendResponse: (response: ResponseType) => void): boolean {
  try {
    const manifest = chrome.runtime.getManifest();
    sendResponse({
      type: "version",
      data: {
        version: manifest.version
      }
    });
    return true;
  } catch (error: unknown) {
    console.error("Error executing getVersion() in ./src/Background/background.ts", error);
    return false;
  }
}

async function getBookmarkTree(sendResponse: (response: ResponseType) => void): Promise<boolean> {
  try {
    const response: chrome.bookmarks.BookmarkTreeNode[] = await chrome.bookmarks.getTree();
    sendResponse({
      type: "bookmark-tree",
      data: {
        tree: response
      }
    });
    return true;
  } catch (error: unknown) {
    console.error("Error executing getBookmarkTree() in ./src/Background/background.ts", error);
    return false;
  }
}

function handleDefault(message: MessageType, sendResponse: (response: ResponseType) => void) {
  try {
    sendResponse({
      type: "error",
      error: `Invalid Message Type. No Handler Defined For The Message Type: ${message.type}`
    });
    return true;
  } catch (error) {
    console.error("Error executing handleDefault() in ./src/Background/background.ts", error);
    return false;
  }
}

